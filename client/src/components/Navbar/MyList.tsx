import React, { useRef, useState } from "react";
import { RxVideo } from "react-icons/rx";
import { MdDeleteForever } from "react-icons/md";
import { PiFilmReelLight } from "react-icons/pi";
import "./Navbar.css";

const MyList = () => {
  const MyList = true;
  return (
    <div className="d-flex flex-column gap-4">
      <div className="align-items-center d-flex justify-content-between gap-2">
        <h2 className="text-xl font-bold text-light">My List</h2>
        <button className="bg-subMain font-medium black-btn px-4 text-light">
          Xóa tất cả
        </button>
      </div>
      {MyList ? (
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
                  <button
                    className="bg-subMain text-light rounded d-flex align-items-center justify-content-center flex-column"
                    style={{ height: "1.5rem", width: "1.5rem" }}
                  >
                    <MdDeleteForever />
                  </button>
                  <a
                    href="/user"
                    className="bg-subMain text-light rounded d-flex align-items-center justify-content-center flex-column"
                    style={{ height: "1.5rem", width: "1.5rem" }}
                  >
                    <RxVideo />
                  </a>
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
  );
};

export default MyList;
