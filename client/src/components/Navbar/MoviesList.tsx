import React, { useEffect, useState } from "react";
import { FaListAlt, FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { PiFilmReelLight } from "react-icons/pi";
import "./Navbar.css";
import NavbarProfile from "./NavbarProfile.tsx";
import axiosJWT from "../../utils/axiosJWT.js";
import { toast, ToastContainer } from "react-toastify";

interface Movie {
  id: string;
  title: string;
  genre: string;
  language: string;
  year: string;
  limit: string;
  img: string;
}

const MoviesList = () => {
  const MyList = true;
  const [movieList, setMovieList] = useState<Movie[]>([]);

  const getMovieList = async () => {
    try {
      const res = await axiosJWT.get(`http://localhost:8800/api/movie/findAll`);
      if (res.status == 200) {
        console.log("1231", res.data);
        setMovieList(res.data.movieList);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getMovieList();
  }, []);

  // Hàm chuyển đổi chuỗi JSON thành mảng string
  const parseGenres = (genresJson: string) => {
    try {
      const genresObj = JSON.parse(genresJson); // Chuyển đổi chuỗi JSON thành đối tượng JavaScript
      if (Array.isArray(genresObj)) {
        // Kiểm tra nếu đối tượng là một mảng
        return genresObj; // Trả về mảng string
      }
      // Nếu đối tượng không phải mảng, trả về mảng rỗng
      return [];
    } catch (error) {
      console.error("Lỗi khi chuyển đổi chuỗi JSON:", error);
      return []; // Trả về mảng rỗng trong trường hợp có lỗi xảy ra
    }
  };

  const handleDeleteMovie = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();

    const confirmDelete = window.confirm("Bạn có chắc chắn muốn xóa phim này?");
    if (!confirmDelete) {
      return;
    }

    try {
      const res = await axiosJWT.delete(
        `http://localhost:8800/api/movie/${id}`
      );

      if (res.status == 200) {
        toast.success("Xóa phim thành công", {
          autoClose: 2000,
        });

        setMovieList((prevMovieList) =>
          prevMovieList.filter((movie) => movie.id != id)
        );
      }
    } catch (error) {
      console.error(error);
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
                <h2 className="text-xl font-bold text-light">Danh Sách Phim</h2>
                <button className="bg-subMain font-medium red-btn px-4 text-light">
                  <a href="/addmovie" className="text-light">
                    Thêm Phim
                  </a>
                </button>
              </div>
              {movieList.length > 0 ? (
                <div className="overflow-hidden d-relative w-100 text-light">
                  <table className="w-100 table-auto border border-1">
                    <thead>
                      <tr className="bg-dryGray">
                        <th
                          scope="col"
                          className="text-xs text-left px-4 py-2 text-dark text-uppercase"
                        >
                          Hình ảnh
                        </th>
                        <th
                          scope="col"
                          className="text-xs text-left px-4 py-2 text-dark text-uppercase"
                        >
                          Tên
                        </th>
                        <th
                          scope="col"
                          className="text-xs text-left px-4 py-2 text-dark text-uppercase sm:hidden"
                        >
                          Thể loại
                        </th>
                        <th
                          scope="col"
                          className="text-xs text-center px-2 py-2 text-dark text-uppercase"
                        >
                          Ngôn ngữ
                        </th>
                        <th
                          scope="col"
                          className="text-xs text-left px-4 py-2 text-dark text-uppercase sm:hidden"
                        >
                          Năm
                        </th>
                        <th
                          scope="col"
                          className="text-xs text-left px-4 py-2 text-dark text-uppercase"
                        >
                          Thời gian
                        </th>
                        <th
                          scope="col"
                          className="text-xs text-left px-4 py-2 text-dark text-uppercase text-center"
                        >
                          Hành động
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      {movieList &&
                        movieList.map((movie, index) => (
                          <tr key={index}>
                            <td className="text-sm text-start table-td">
                              <div
                                className="p-1 bg-dry border rounded overflow-hidden"
                                style={{ width: "3rem", height: "3rem" }}
                              >
                                <a
                                  href={movie.img}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <img
                                    src={
                                      movie.img
                                        ? movie.img
                                        : "https://firebasestorage.googleapis.com/v0/b/netflixo-minah.appspot.com/o/dd8a26a1-9a18-4149-b0ff-a86cb40b8aa6.jpeg?alt=media"
                                    }
                                    className="w-100 h-100 object-fit-cover"
                                  />
                                </a>
                              </div>
                            </td>
                            <td className="text-sm text-start table-td">
                              {movie.title}
                            </td>
                            <td className="text-sm text-start table-td sm:hidden">
                              {parseGenres(movie.genre).join(", ")}{" "}
                            </td>
                            <td className="text-sm text-center table-td">
                              {movie.language}
                            </td>
                            <td className="text-sm text-center table-td sm:hidden">
                              {movie.year}
                            </td>
                            <td className="text-sm text-center table-td">
                              {movie.limit}
                            </td>
                            <td className="text-sm text-start table-td d-flex flex-row align-items-center justify-content-center gap-2 mt-2">
                              <a
                                href=""
                                className="border border-1 bg-dry d-flex align-items-center justify-content-center px-2 py-1 rounded"
                                style={{ color: "rgb(34, 197, 94)" }}
                              >
                                <FaEdit />
                              </a>
                              <button
                                className="bg-subMain text-light rounded d-flex align-items-center justify-content-center flex-column"
                                style={{ height: "1.5rem", width: "1.5rem" }}
                                onClick={(e) => handleDeleteMovie(e, movie.id)}
                              >
                                <MdDeleteForever />
                              </button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="d-flex align-items-center justify-content-center flex-column py-5 px-3 border border-1 gap-3 text-light">
                  <div
                    className="d-flex align-items-center justify-content-center flex-column text-subMain text-4xl"
                    style={{ width: "6rem", height: "6rem" }}
                  >
                    <PiFilmReelLight />
                  </div>
                  <div className="text-sm text-border">
                    Bạn chưa có bộ phim yêu thích nào
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default MoviesList;
