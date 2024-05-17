import React, { useRef, useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import { FaCloudUploadAlt } from "react-icons/fa";
import "./Navbar.css";
import AddCast from "../AddCast/AddCast.tsx";
import NavbarProfile from "./NavbarProfile.tsx";

const AddMovie = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [addCast, setAddCast] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  const [imgTitle, setImgTitle] = useState("");
  const [imgSm, setImgSm] = useState("");
  const [trailer, setTrailer] = useState("");
  const [video, setVideo] = useState("");
  const [year, setYear] = useState("");
  const [limit, setLimit] = useState("");
  const [genre, setGenre] = useState("");
  const [isSeries, setIsSeries] = useState("");
  // desc img imgTitle imgSm trailer video year limit genre isSeries

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      const imageUrl = URL.createObjectURL(selectedFile); // Tạo URL cho file đã chọn
      setImageUrl(imageUrl); // Lưu URL vào state
    }
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
                  action=""
                  className="text-sm bg-dryGray rounded-2 align-items-center d-flex justify-content-between"
                >
                  <input
                    type="text"
                    placeholder="ID Phim"
                    className="fw-medium text-sm px-2 rounded-2 border-0"
                    style={{
                      height: "2rem",
                      outline: "none",
                      backgroundColor: "initial",
                    }}
                  />
                  <button
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
                      onClick={handleButtonClick}
                    >
                      <input
                        type="file"
                        ref={fileInputRef}
                        className="d-none"
                        onChange={handleFileChange}
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
                        imageUrl ||
                        "https://netflixo-ten.vercel.app/images/user.png"
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
                    >
                      <input type="file" className="d-none" />
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
                        imageUrl ||
                        "https://netflixo-ten.vercel.app/images/user.png"
                      }
                      alt=""
                      className="w-100 h-100 object-fit-cover rounded"
                    />
                  </div>
                </div>
                {/* Title image */}
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
                    >
                      <input type="file" className="d-none" />
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
                        imageUrl ||
                        "https://netflixo-ten.vercel.app/images/user.png"
                      }
                      alt=""
                      className="w-100 h-100 object-fit-cover rounded"
                    />
                  </div>
                </div>
              </div>
              <div className="w-100">
                <div className="text-sm w-100">
                  <label htmlFor="desc" className="text-border fw-semibold">
                    Movie Desc
                  </label>
                  <textarea
                    name="desc"
                    className="w-100 mt-2 p-4 bg-main border rounded text-light"
                    placeholder="Make it short and sweet"
                  ></textarea>
                </div>
              </div>
              <div className="text-sm w-100">
                <label htmlFor="category" className="text-border fw-semibold">
                  Movie Category
                </label>
                <select
                  name="category"
                  className="w-100 px-4 bg-main border rounded py-3"
                  style={{ color: "rgb(192, 192, 192) !important" }}
                >
                  <option className="text-light">Action</option>
                  <option className="text-light">Comedy</option>
                  <option className="text-light">Drama</option>
                  <option className="text-light">Fantasy</option>
                  <option className="text-light">Horror</option>
                  <option className="text-light">Romance</option>
                </select>
              </div>
              {/* trailer */}
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
                    onClick={handleButtonClick}
                  >
                    <input
                      type="file"
                      ref={fileInputRef}
                      className="d-none"
                      onChange={handleFileChange}
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
                      imageUrl ||
                      "https://netflixo-ten.vercel.app/images/user.png"
                    }
                    alt=""
                    className="w-100 h-100 object-fit-cover rounded"
                  />
                </div>
              </div>
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
                    onClick={handleButtonClick}
                  >
                    <input
                      type="file"
                      ref={fileInputRef}
                      className="d-none"
                      onChange={handleFileChange}
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
                      imageUrl ||
                      "https://netflixo-ten.vercel.app/images/user.png"
                    }
                    alt=""
                    className="w-100 h-100 object-fit-cover rounded"
                  />
                </div>
              </div>
              <div className="w-100 grid-container-2 gap-4 items-start">
                <button
                  className="w-100 py-3 bg-main border-subMain text-light rounded"
                  onClick={() => setAddCast(true)}
                >
                  Thêm diễn viên
                </button>
              </div>
              <button className="bg-subMain w-100 d-flex flex-row align-items-center justify-content-center gap-4 fw-medium text-light rounded py-3">
                <FaCloudUploadAlt />
                Tạo Phim
              </button>
              {addCast && <AddCast onClose={() => setAddCast(false)} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddMovie;
