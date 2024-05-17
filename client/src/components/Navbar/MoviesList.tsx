import React from "react";
import { FaListAlt, FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { PiFilmReelLight } from "react-icons/pi";
import "./Navbar.css";
import NavbarProfile from "./NavbarProfile.tsx";

const MoviesList = () => {
  const MyList = true;

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
                  Thêm Phim
                </button>
              </div>
              {MyList ? (
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
                          className="text-xs text-left px-4 py-2 text-dark text-uppercase"
                        >
                          Thể loại
                        </th>
                        <th
                          scope="col"
                          className="text-xs text-left px-4 py-2 text-dark text-uppercase"
                        >
                          Ngôn ngữ
                        </th>
                        <th
                          scope="col"
                          className="text-xs text-left px-4 py-2 text-dark text-uppercase"
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
                      <tr>
                        <td className="text-sm text-start table-td">
                          <div
                            className="p-1 bg-dry border rounded overflow-hidden"
                            style={{ width: "3rem", height: "3rem" }}
                          >
                            <img
                              src="https://firebasestorage.googleapis.com/v0/b/netflixo-minah.appspot.com/o/dd8a26a1-9a18-4149-b0ff-a86cb40b8aa6.jpeg?alt=media"
                              className="w-100 h-100 object-fit-cover"
                            />
                          </div>
                        </td>
                        <td className="text-sm text-start table-td">
                          The Beast
                        </td>
                        <td className="text-sm text-start table-td">
                          Thriller
                        </td>
                        <td className="text-sm text-start table-td">English</td>
                        <td className="text-sm text-start table-td">2027</td>
                        <td className="text-sm text-start table-td">1hr</td>
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
                          >
                            <MdDeleteForever />
                          </button>
                        </td>
                      </tr>
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
    </>
  );
};

export default MoviesList;
