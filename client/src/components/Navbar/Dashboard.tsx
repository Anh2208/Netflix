import React from "react";
import { FaListAlt, FaEdit } from "react-icons/fa";
import { RxVideo } from "react-icons/rx";
import { MdDeleteForever } from "react-icons/md";
import "./Navbar.css";
import NavbarProfile from "./NavbarProfile.tsx";

const Dashboard = () => {
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
            <h2 className="text-light font-weight-bold text-xl">Hồ sơ</h2>
            <div className="grid-container-2 grid-container-3 gap-4 mt-2">
              <div
                className="p-3 rounded-1 gap-1 bg-main grid-container-4"
                style={{ borderColor: "rgb(75, 85, 99)" }}
              >
                <div
                  className="col-span-1 rounded-circle text-light align-items-center d-flex justify-content-center flex-column"
                  style={{
                    width: "3rem",
                    height: "3rem",
                    backgroundColor: "rgb(234, 88, 12)",
                  }}
                >
                  <FaListAlt />
                </div>
                <div className="col-span-3 text-light">
                  <h6>Phim</h6>
                  <p className="mt-1 fw-semibold">14</p>
                </div>
              </div>
              <div
                className="p-3 rounded-1 gap-1 bg-main grid-container-4"
                style={{ borderColor: "rgb(75, 85, 99)" }}
              >
                <div
                  className="col-span-1 rounded-circle text-light align-items-center d-flex justify-content-center flex-column"
                  style={{
                    width: "3rem",
                    height: "3rem",
                    backgroundColor: "rgb(29 78 216)",
                  }}
                >
                  <FaListAlt />
                </div>
                <div className="col-span-3 text-light">
                  <h6>Thể Loại</h6>
                  <p className="mt-1 fw-semibold">10</p>
                </div>
              </div>
              <div
                className="p-3 rounded-1 gap-1 bg-main grid-container-4"
                style={{ borderColor: "rgb(75, 85, 99)" }}
              >
                <div
                  className="col-span-1 rounded-circle text-light align-items-center d-flex justify-content-center flex-column"
                  style={{
                    width: "3rem",
                    height: "3rem",
                    backgroundColor: "rgb(22 163 74)",
                  }}
                >
                  <FaListAlt />
                </div>
                <div className="col-span-3 text-light">
                  <h6>Người Dùng</h6>
                  <p className="mt-1 fw-semibold">1</p>
                </div>
              </div>
            </div>
            <h6 className="text-md font-medium my-4 text-border">
              Phim Gần Đây
            </h6>
            <div className="overflow-hidden d-relative w-100 text-light">
              <table className="w-100 table-auto border border-1 text-center">
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
                      className="text-xs text-left px-4 py-2 text-dark text-uppercase"
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
                    <td className="text-sm text-start table-td">The Beast</td>
                    <td className="text-sm text-start table-td">Thriller</td>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
