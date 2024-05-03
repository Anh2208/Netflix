import React from "react";
import { RxVideo } from "react-icons/rx";
import { MdDeleteForever, MdAddCircle } from "react-icons/md";
import { PiFilmReelLight } from "react-icons/pi";
import "./Navbar.css";

const Categories = () => {
  const MyList = true;
  return (
    <div className="d-flex flex-column gap-4">
      <div className="align-items-center d-flex justify-content-between gap-2">
        <h2 className="text-xl font-bold text-light"> Thể Loại</h2>
        <button className="bg-subMain font-medium red-btn gap-3 px-4 py-2 d-flex align-items-center justify-content-center text-light">
          <MdAddCircle /> Tạo
        </button>
      </div>
      {MyList ? (
        <div className="overflow-hidden d-relative w-100 text-light">
          <table className="w-100 table-auto border border-1 ">
            <thead>
              <tr className="bg-dryGray">
                <th
                  scope="col"
                  className="text-xs text-left px-4 py-2 text-dark text-uppercase"
                >
                  ID
                </th>
                <th
                  scope="col"
                  className="text-xs text-left px-4 py-2 text-dark text-uppercase"
                >
                  DATE
                </th>
                <th
                  scope="col"
                  className="text-xs text-left px-4 py-2 text-dark text-uppercase"
                >
                  Thể Loại
                </th>
                <th
                  scope="col"
                  className="text-xs text-left px-4 py-2 text-dark text-uppercase text-center"
                >
                  Hành Động
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              <tr>
                <td className="text-sm text-start table-td">12345678</td>
                <td className="text-sm text-start table-td">
                  November 22, 2022
                </td>
                <td className="text-sm text-start table-td">Horror</td>
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

export default Categories;
