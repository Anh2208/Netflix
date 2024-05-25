import React, { useEffect, useRef, useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import { FaCloudUploadAlt } from "react-icons/fa";
import "./Navbar.css";
import axios from "axios";
import AddCast from "../AddCast/AddCast.tsx";
import NavbarProfile from "./NavbarProfile.tsx";
import { IoMdCloseCircleOutline } from "react-icons/io";
// import axiosJWT from "../../utils/axiosJWT.js";
import { toast, ToastContainer } from "react-toastify";
import tmdb from "../../utils/tmdb.js";
import axiosJWT from "../../utils/axiosJWT.js";

interface Actor {
  username: string;
  image: File;
  imageUrl: string;
}

interface Gener {
  id: string;
  name: string;
}

const AddMovie = () => {
  const imageInputRef = useRef<HTMLInputElement>(null);
  const titleImageInputRef = useRef<HTMLInputElement>(null);
  const thumbnailImageInputRef = useRef<HTMLInputElement>(null);
  const trailerInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);

  const [imageUrl, setImageUrl] = useState<File | undefined>(undefined);
  const [imgTitle, setImgTitle] = useState<File | undefined>(undefined);
  const [imgSm, setImgSm] = useState<File | undefined>(undefined);

  // const [video, setVideo] = useState("");
  const [trailerMovie, setTrailerMovie] = useState<File | undefined>(undefined);
  const [video, setVideo] = useState<File | undefined>(undefined);
  const [videoUrl, setVideoUrl] = useState("");
  const [trailerUrl, setTrailerUrl] = useState("");
  const [uploadProgressVideo, setUploadProgressVideo] = useState(0);
  const [uploadProgressTrailer, setUploadProgressTrailer] = useState(0);

  const [idMovieAdd, setIdMovieAdd] = useState("");
  const [addCast, setAddCast] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [year, setYear] = useState("");
  const [limit, setLimit] = useState("");
  const [language, setLanguage] = useState("");
  const [isSeries, setIsSeries] = useState("");
  const [actors, setActors] = useState<Actor[]>([]);

  const [genre, setGenre] = useState("");
  const [genreMovie, setGenreMovie] = useState<string[]>([]);
  const [genreList, setGenreList] = useState<Gener[]>([]);

  useEffect(() => {
    getGener();
  }, []);

  const getGener = async () => {
    const gener = await tmdb.get(`genre/movie/list`);
    setGenreList(gener.data.genres);
  };

  const handleButtonClick = (inputRef: React.RefObject<HTMLInputElement>) => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  // get movie by id of TMDB
  const getMovieDetails = async (
    e: React.FormEvent<HTMLFormElement>,
    movieId: string
  ) => {
    e.preventDefault();
    try {
      const response = await tmdb.get(`/movie/${movieId}`);
      const creditsResponse = await tmdb.get(`/movie/${movieId}/credits`); // Lấy thông tin về diễn viên

      if (response.data && creditsResponse.data) {
        const data = response.data;
        setTitle(data.title);
        setLimit(data.runtime);
        setLanguage(data.original_language);
        setYear(data.release_date);
        setDesc(data.overview);

        const genres = data.genres.map((genre: { name: string }) => genre.name);
        setGenreMovie(genres);

        // Lấy danh sách diễn viên từ phản hồi về credits
        const cast = creditsResponse.data.cast.map(
          (actor: { name: string; profile_path: string }) => ({
            name: actor.name,
            imageUrl: actor.profile_path
              ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
              : undefined,
          })
        );
        setActors(cast);
      }
    } catch (error) {
      toast.error("Không tìm thấy phim", {
        autoClose: 2000,
      });
    }
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFileFunc: React.Dispatch<React.SetStateAction<File | undefined>>
  ) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setFileFunc(selectedFile);
    } else {
      setFileFunc(undefined);
    }
  };

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      console.log(selectedFile);
      setVideo(selectedFile);
    }
  };

  // create and upload film
  const uploadFileInChunks = async (file: File, type: string) => {
    const CHUNK_SIZE = 1024 * 1024 * 5; // 5MB
    const totalChunks = Math.ceil(file.size / CHUNK_SIZE);

    for (let i = 0; i < totalChunks; i++) {
      const start = i * CHUNK_SIZE;
      const end = Math.min(start + CHUNK_SIZE, file.size);
      const chunk = file.slice(start, end);

      const formData = new FormData();
      formData.append("file", chunk);
      formData.append("fileName", file.name);
      formData.append("chunkIndex", i.toString());
      formData.append("totalChunks", totalChunks.toString());

      try {
        await axios.post("http://localhost:8800/api/movie/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        const progress = ((i + 1) / totalChunks) * 100;
        if (type === "trailer") {
          setUploadProgressTrailer(progress);
        } else {
          setUploadProgressVideo(progress);
        }
      } catch (error) {
        toast.error(`Error uploading chunk ${i + 1} of ${totalChunks}`, {
          autoClose: 2000,
        });
        break;
      }
    }
  };

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    console.log(genre);
    if (
      title == "" ||
      desc == "" ||
      year == "" ||
      limit == "" ||
      language == "" ||
      !genreMovie ||
      !video ||
      !trailerMovie
    ) {
      toast.error(`Vui lòng nhập đầy đủ dữ liệu`, {
        autoClose: 2000,
      });
      return;
    }
    try {
      if (video && trailerMovie) {
        // upload trailer
        await uploadFileInChunks(trailerMovie, "trailer");
        const responsetrailer = await axios.get(
          `http://localhost:8800/api/movie/${trailerMovie.name}`,
          {
            responseType: "blob",
          }
        );
        const trailerUrl = URL.createObjectURL(responsetrailer.data);
        setTrailerUrl(trailerUrl);
        toast.success("Trailer uploaded successfully", {
          autoClose: 2000,
        });

        // upload video
        await uploadFileInChunks(video, "video");
        const responseVideo = await axios.get(
          `http://localhost:8800/api/movie/${video.name}`,
          {
            responseType: "blob",
          }
        );
        const videoUrl = URL.createObjectURL(responseVideo.data);
        setVideoUrl(videoUrl);
        toast.success("Video uploaded successfully", {
          autoClose: 2000,
        });
        console.log("videoUrl", videoUrl);
        console.log("trailerUrl", trailerUrl);
        const res = await axiosJWT.post(`http://localhost:8800/api/movie`, {
          title: title,
          desc: desc,
          year: year,
          limit: limit,
          genre: genreMovie,
          language: language,
          actor: actors,
          video: videoUrl,
          trailer: trailerUrl,
        });
        if (res.status == 201) {
          toast.success("Thêm thành công phim", {
            autoClose: 2000,
          });
        }
      } else {
        toast.error("No video or trailer selected", {
          autoClose: 2000,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addActor = (actor: Actor) => {
    setActors((prevActors) => [...prevActors, actor]);
    setAddCast(false); // Close the AddCast modal after adding an actor
  };

  const removeActor = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    e.preventDefault();
    setActors((prevActors) => prevActors.filter((_, i) => i !== index));
  };

  //Add movie genre from the list
  const addGenerMovie = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    gener: string
  ) => {
    e.preventDefault();
    const foundGenre = genreMovie.find((item) => item === gener); // Tìm kiếm thể loại trong mảng genreMovie
    if (!foundGenre) {
      setGenreMovie((prevGener) => [...prevGener, gener]);
    }
  };

  // Remove movie genre from the list
  const removeMovie = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    e.preventDefault();
    setGenreMovie((prevGener) => prevGener.filter((_, i) => i !== index));
  };

  return (
    <>
      <div
        className=" mx-auto px-2"
        style={{
          minHeight: "100vh",
          background: "rgb(8 10 26)",
          paddingBottom: "106px",
        }}
      >
        <div className="grid-container align-items-start mx-0 w-100 py-5">
          <NavbarProfile />
          <div className="item2 bg-dry p-4 border border-1 rounded-md mx-0">
            <div className="d-flex flex-column gap-4">
              <div className="align-items-center d-flex justify-content-between gap-2">
                <h2 className="text-xl font-bold text-light">My List</h2>
                <form
                  onSubmit={(e) => getMovieDetails(e, idMovieAdd)}
                  className="text-sm bg-dryGray rounded-2 align-items-center d-flex justify-content-between"
                >
                  <input
                    type="text"
                    placeholder="ID Phim"
                    onChange={(e) => setIdMovieAdd(e.target.value)}
                    className="fw-medium text-sm px-2 rounded-2 border-0"
                    style={{
                      height: "2rem",
                      outline: "none",
                      backgroundColor: "initial",
                    }}
                  />
                  <button
                    type="submit"
                    className="bg-subMain align-items-center d-flex justify-content-center rounded-2 text-light"
                    style={{ width: "3rem", height: "2rem" }}
                  >
                    Thêm
                  </button>
                </form>
              </div>
              <div className="grid-container-2 w-100 gap-4">
                <div className="w-100">
                  <div className="text-sm w-100">
                    <label htmlFor="name" className="text-border fw-semibold">
                      Tên Phim
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={title || ""}
                      placeholder="Game of Thrones"
                      onChange={(e) => setTitle(e.target.value)}
                      className="w-100 text-sm mt-2 bg-main border rounded text-light"
                      style={{ padding: "1.25rem" }}
                    />
                  </div>
                </div>
                <div className="w-100">
                  <div className="text-sm w-100">
                    <label htmlFor="name" className="text-border fw-semibold">
                      Thời gian
                    </label>
                    <input
                      type="text"
                      name="time"
                      placeholder="2hr"
                      value={limit || ""}
                      onChange={(e) => setLimit(e.target.value)}
                      className="w-100 text-sm mt-2 bg-main border rounded text-light"
                      style={{ padding: "1.25rem" }}
                    />
                  </div>
                </div>
              </div>
              <div className="grid-container-2 w-100 gap-4">
                <div className="w-100">
                  <div className="text-sm w-100">
                    <label
                      htmlFor="language"
                      className="text-border fw-semibold"
                    >
                      Ngôn ngữ
                    </label>
                    <input
                      type="text"
                      name="language"
                      placeholder="English"
                      value={language || ""}
                      onChange={(e) => setLanguage(e.target.value)}
                      className="w-100 text-sm mt-2 bg-main border rounded text-light"
                      style={{ padding: "1.25rem" }}
                    />
                  </div>
                </div>
                <div className="w-100">
                  <div className="text-sm w-100">
                    <label
                      htmlFor="YearOfRelease"
                      className="text-border fw-semibold"
                    >
                      Năm sản xuất
                    </label>
                    <input
                      type="text"
                      name="YearOfRelease"
                      placeholder="2002"
                      value={year || ""}
                      onChange={(e) => setYear(e.target.value)}
                      className="w-100 text-sm mt-2 bg-main border rounded text-light"
                      style={{ padding: "1.25rem" }}
                    />
                  </div>
                </div>
              </div>
              <div className="grid-container-3 w-100 gap-4">
                {/* Image */}
                <div className="d-flex flex-column gap-2">
                  <p className="text-border fw-semibold text-sm">Image</p>
                  <div className="w-100 text-center d-flex align-items-center justify-content-center flex-column gap-4">
                    <div
                      className="px-4 w-100 mx-0 rounded-md border-dashed"
                      style={{
                        paddingTop: "2rem",
                        paddingBottom: "2rem",
                        cursor: "pointer",
                      }}
                      onClick={() => handleButtonClick(imageInputRef)}
                    >
                      <input
                        type="file"
                        ref={imageInputRef}
                        className="d-none"
                        onChange={(e) => handleFileChange(e, setImageUrl)}
                      />
                      <span className="mx-auto d-flex align-items-center justify-content-center flex-column text-subMain text-3xl">
                        <FiUploadCloud />
                      </span>
                      <p className="text-sm mb-0 mt-2">
                        Kéo hình ảnh của bạn vào đây
                      </p>
                      <em className="text-xs text-border">
                        Chỉ các tệp .jpg và .png mới được chấp nhận
                      </em>
                    </div>
                  </div>
                  <div
                    className="p-2 bg-main border rounded mt-1"
                    style={{
                      height: "8rem",
                      width: "8rem",
                    }}
                  >
                    <img
                      src={
                        imageUrl
                          ? URL.createObjectURL(imageUrl)
                          : "https://netflixo-ten.vercel.app/images/user.png"
                      }
                      alt=""
                      className="w-100 h-100 object-fit-cover rounded"
                    />
                  </div>
                </div>

                {/* Title image */}
                <div className="d-flex flex-column gap-2">
                  <p className="text-border fw-semibold text-sm">Title image</p>
                  <div className="w-100 text-center d-flex align-items-center justify-content-center flex-column gap-4">
                    <div
                      className="px-4 w-100 mx-0 rounded-md border-dashed"
                      style={{
                        paddingTop: "2rem",
                        paddingBottom: "2rem",
                        cursor: "pointer",
                      }}
                      onClick={() => handleButtonClick(titleImageInputRef)}
                    >
                      <input
                        type="file"
                        ref={titleImageInputRef}
                        className="d-none"
                        onChange={(e) => handleFileChange(e, setImgTitle)}
                      />
                      <span className="mx-auto d-flex align-items-center justify-content-center flex-column text-subMain text-3xl">
                        <FiUploadCloud />
                      </span>
                      <p className="text-sm mb-0 mt-2">
                        Kéo hình ảnh của bạn vào đây
                      </p>
                      <em className="text-xs text-border">
                        Chỉ các tệp .jpg và .png mới được chấp nhận
                      </em>
                    </div>
                  </div>
                  <div
                    className="p-2 bg-main border rounded mt-1"
                    style={{
                      height: "8rem",
                      width: "8rem",
                    }}
                  >
                    <img
                      src={
                        imgTitle
                          ? URL.createObjectURL(imgTitle)
                          : "https://netflixo-ten.vercel.app/images/user.png"
                      }
                      alt=""
                      className="w-100 h-100 object-fit-cover rounded"
                    />
                  </div>
                </div>

                {/* Thumbnail image */}
                <div className="d-flex flex-column gap-2">
                  <p className="text-border fw-semibold text-sm">
                    Thumbnail image
                  </p>
                  <div className="w-100 text-center d-flex align-items-center justify-content-center flex-column gap-4">
                    <div
                      className="px-4 w-100 mx-0 rounded-md border-dashed"
                      style={{
                        paddingTop: "2rem",
                        paddingBottom: "2rem",
                        cursor: "pointer",
                      }}
                      onClick={() => handleButtonClick(thumbnailImageInputRef)}
                    >
                      <input
                        type="file"
                        ref={thumbnailImageInputRef}
                        className="d-none"
                        onChange={(e) => handleFileChange(e, setImgSm)}
                      />
                      <span className="mx-auto d-flex align-items-center justify-content-center flex-column text-subMain text-3xl">
                        <FiUploadCloud />
                      </span>
                      <p className="text-sm mb-0 mt-2">
                        Kéo hình ảnh của bạn vào đây
                      </p>
                      <em className="text-xs text-border">
                        Chỉ các tệp .jpg và .png mới được chấp nhận
                      </em>
                    </div>
                  </div>
                  <div
                    className="p-2 bg-main border rounded mt-1"
                    style={{
                      height: "8rem",
                      width: "8rem",
                    }}
                  >
                    <img
                      src={
                        imgSm
                          ? URL.createObjectURL(imgSm)
                          : "https://netflixo-ten.vercel.app/images/user.png"
                      }
                      alt=""
                      className="w-100 h-100 object-fit-cover rounded"
                    />
                  </div>
                </div>
              </div>

              {/*  Movie Desc */}
              <div className="w-100">
                <div className="text-sm w-100">
                  <label htmlFor="desc" className="text-border fw-semibold">
                    Movie Desc
                  </label>
                  <textarea
                    name="desc"
                    value={desc || ""}
                    className="w-100 mt-2 p-4 bg-main border rounded text-light"
                    placeholder="Make it short and sweet"
                    onChange={(e) => setDesc(e.target.value)}
                  ></textarea>
                </div>
              </div>

              {/* Movie Genre Start */}
              <div className="text-sm w-100 d-flex flex-column">
                <label htmlFor="genre" className="text-border fw-semibold">
                  Movie Genre
                </label>
                <div className="text-sm d-flex flex-rows gap-3">
                  {genreList.length > 0 && (
                    <select
                      name="genre"
                      className="px-4 bg-main border rounded py-3 text-light"
                      style={{ color: "rgb(192, 192, 192) !important" }}
                      defaultValue="Action"
                      onChange={(e) => setGenre(e.target.value)}
                    >
                      {genreList.map((gener, index) => (
                        <option key={index} className="text-light">
                          {gener.name}
                        </option>
                      ))}
                    </select>
                  )}
                  <button
                    onClick={(e) => addGenerMovie(e, genre)}
                    className="bg-subMain rounded px-4 fw-medium text-light"
                  >
                    Thêm
                  </button>
                </div>
                <div className="d-flex flex-rows gap-3 mt-3">
                  {genreMovie &&
                    genreMovie.map((gener, index) => (
                      <div
                        key={index}
                        className="text-sm p-3 bg-main border rounded text-light position-relative d-flex justify-content-center align-items-center"
                      >
                        {gener}
                        <div
                          className="position-absolute rounded-circle justify-content-center align-items-center d-flex text-light bg-main"
                          style={{
                            top: "-5px",
                            right: "-5px",
                            fontSize: "15px",
                            cursor: "pointer",
                          }}
                          onClick={(e) => removeMovie(e, index)}
                        >
                          <IoMdCloseCircleOutline />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              {/* Movie Genre end */}

              {/* trailer movie start */}
              <div className="d-flex flex-column w-100 gap-2">
                <p className="text-border fw-semibold text-sm mb-0">Trailer</p>
                <div className="w-100 text-center d-flex align-items-center justify-content-center flex-column gap-4">
                  <div
                    className="px-4 w-100 mx-0 rounded-md border-dashed"
                    style={{
                      paddingTop: "2rem",
                      paddingBottom: "2rem",
                      cursor: "pointer",
                    }}
                    onClick={() => handleButtonClick(trailerInputRef)}
                  >
                    <input
                      type="file"
                      ref={trailerInputRef}
                      className="d-none"
                      onChange={(e) => handleFileChange(e, setTrailerMovie)}
                    />
                    <span className="mx-auto d-flex align-items-center justify-content-center flex-column text-subMain text-3xl">
                      <FiUploadCloud />
                    </span>
                    <p className="text-sm mb-0 mt-2">
                      Kéo hình ảnh của bạn vào đây
                    </p>
                    <em className="text-xs text-border">
                      Chỉ các tệp .jpg và .png mới được chấp nhận
                    </em>
                  </div>
                </div>
                {uploadProgressTrailer > 1 && (
                  <div className="d-flex flex-row gap-2">
                    <div className="progress-bar-container">
                      <div
                        className="progress-bar text-center"
                        style={{ width: `${uploadProgressTrailer}%` }}
                      >
                        {Math.floor(uploadProgressTrailer)}%
                      </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center gap-2">
                      {uploadProgressTrailer === 100 ? (
                        <div className="badges">
                          <button className="green">Thành công</button>
                        </div>
                      ) : (
                        <div className="custom-loader"></div>
                      )}
                    </div>
                  </div>
                )}
                <div
                  className="p-2 bg-main border rounded mt-1 justify-content-center align-items-center d-flex"
                  style={{
                    height: "100%",
                    width: "50%",
                  }}
                >
                  {trailerMovie && (
                    <video
                      width="100%"
                      height="100%"
                      controls
                      className="mt-2"
                      src={
                        trailerUrl
                          ? trailerUrl
                          : URL.createObjectURL(trailerMovie)
                      }
                      muted
                    >
                      {/* <source src={trailer} type="video/mp4" /> */}
                      Trình duyệt của bạn không hỗ trợ thẻ video.
                    </video>
                  )}
                </div>
              </div>
              {/* trailer movie end */}

              {/* film */}
              <div className="d-flex flex-column w-100 gap-2">
                <p className="text-border fw-semibold text-sm mb-0">Video</p>
                <div className="w-100 text-center d-flex align-items-center justify-content-center flex-column gap-4">
                  <div
                    className="px-4 w-100 mx-0 rounded-md border-dashed"
                    style={{
                      paddingTop: "2rem",
                      paddingBottom: "2rem",
                      cursor: "pointer",
                    }}
                    onClick={() => handleButtonClick(videoInputRef)}
                  >
                    <input
                      type="file"
                      ref={videoInputRef}
                      className="d-none"
                      onChange={handleVideoChange}
                    />
                    <span className="mx-auto d-flex align-items-center justify-content-center flex-column text-subMain text-3xl">
                      <FiUploadCloud />
                    </span>
                    <p className="text-sm mb-0 mt-2">
                      Kéo hình ảnh của bạn vào đây
                    </p>
                    <em className="text-xs text-border">
                      Chỉ các tệp .jpg và .png mới được chấp nhận
                    </em>
                  </div>
                </div>
                {uploadProgressVideo > 1 && (
                  <div className="d-flex flex-row gap-2">
                    <div className="progress-bar-container">
                      <div
                        className="progress-bar text-center"
                        style={{ width: `${uploadProgressVideo}%` }}
                      >
                        {Math.floor(uploadProgressVideo)}%
                      </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center gap-2">
                      {uploadProgressVideo === 100 ? (
                        <div className="badges">
                          <button className="green">Thành công</button>
                        </div>
                      ) : (
                        <div className="custom-loader"></div>
                      )}
                    </div>
                  </div>
                )}
                <div
                  className="p-2 bg-main border rounded mt-1 justify-content-center align-items-center d-flex"
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                >
                  {video && (
                    <div
                      className="p-2 bg-main border rounded mt-1 justify-content-center align-items-center d-flex"
                      style={{ height: "100%", width: "100%" }}
                    >
                      {video &&
                        (uploadProgressVideo === 0 ||
                          uploadProgressVideo === 100) && (
                          <video
                            width="100%"
                            height="100%"
                            controls
                            className="mt-2"
                            // src={URL.createObjectURL(video)}
                            src={
                              videoUrl ? videoUrl : URL.createObjectURL(video)
                            }
                            muted
                          >
                            {/* <source src={trailer} type="video/mp4" /> */}
                            Trình duyệt của bạn không hỗ trợ thẻ video.
                          </video>
                        )}
                    </div>
                  )}
                </div>
              </div>
              <div className="p-2 bg-main border rounded d-flex gap-3 row">
                {actors.map((actor, index) => (
                  <div
                    className="p-2 bg-main border rounded col-12 position-relative d-flex justify-content-center align-items-center"
                    style={{
                      height: "8rem",
                      width: "8rem",
                    }}
                    key={index}
                  >
                    <img
                      src={
                        actor.imageUrl != ""
                          ? actor.imageUrl
                          : URL.createObjectURL(actor.image)
                      }
                      alt={actor.username}
                      className="w-100 h-100 object-fit-cover rounded"
                    />
                    <div
                      className="position-absolute rounded-circle justify-content-center align-items-center d-flex text-light bg-main"
                      style={{
                        top: "-5px",
                        right: "-5px",
                        fontSize: "15px",
                        cursor: "pointer",
                      }}
                      onClick={(e) => removeActor(e, index)}
                    >
                      <IoMdCloseCircleOutline />
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-100 grid-container-2 gap-4 items-start">
                <button
                  className="w-100 py-3 bg-main border-subMain text-light rounded"
                  onClick={() => setAddCast(true)}
                >
                  Thêm diễn viên
                </button>
              </div>
              <button
                onClick={handleSubmit}
                className="bg-subMain w-100 d-flex flex-row align-items-center justify-content-center gap-4 fw-medium text-light rounded py-3"
              >
                <FaCloudUploadAlt />
                Tạo Phim
              </button>
              {addCast && (
                <AddCast
                  onAddActor={addActor}
                  onClose={() => setAddCast(false)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default AddMovie;
