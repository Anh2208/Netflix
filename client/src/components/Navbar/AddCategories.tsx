import React from "react";
import { IoMdClose } from "react-icons/io";
import { FaCloudUploadAlt } from "react-icons/fa";

interface Prop {
  onClose: () => void;
}

const AddCategories = ({ onClose }: Prop) => {
  return (
    <div
      className="position-fixed overflow-y-auto text-center"
      style={{ inset: 0, zIndex: 30 }}
    >
      <div className="min-vh-100 px-3">
        <div
          className="position-fixed bg-black opacity-50 duration-300"
          style={{ inset: 0 }}
          aria-hidden="true"
          onClick={onClose}
        ></div>
        <span
          className="align-middle vh-100"
          style={{ display: "inline-block" }}
          aria-hidden="true"
        ></span>
        <div
          className="position-relative sm:w-4/5 md:w-3/5 lg:w-2/5 w-100 align-middle h-100 overflow-y-auto bg-main text-white border rounded-2 opacity-100 scale-100"
          style={{ display: "inline-block", padding: "2.5rem" }}
        >
          <h2 className="text-3xl fw-bold">Thêm Danh Sách</h2>
          <form action="" className="d-flex flex-column gap-4 text-start mt-4">
            {/* Title */}
            <div className="w-100">
              <div className="text-sm w-100">
                <label htmlFor="title" className="text-border fw-semibold">
                  Tiêu đề
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Jeremy Renner"
                  className="w-100 text-sm mt-2 bg-main border rounded text-light"
                  style={{ padding: "1.25rem" }}
                />
              </div>
            </div>
            {/* Gener */}
            <div className="w-100">
              <div className="text-sm w-100">
                <label htmlFor="title" className="text-border fw-semibold">
                  Thể Loại Phim
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Jeremy Renner"
                  className="w-100 text-sm mt-2 bg-main border rounded text-light"
                  style={{ padding: "1.25rem" }}
                />
              </div>
            </div>
            {/* type */}
            <div className="w-100">
              <div className="text-sm w-100">
                <label htmlFor="title" className="text-border fw-semibold">
                  Thể Loại
                </label>
                <select
                  name="category"
                  className="w-100 px-4 bg-main border rounded py-3 mt-2"
                  style={{ color: "rgb(192, 192, 192) !important" }}
                >
                  <option className="text-light">Movie</option>
                  <option className="text-light">Series</option>
                </select>
              </div>
            </div>
            {/* context */}
            <div className="w-100">
              <div className="text-sm w-100">
                <label htmlFor="title" className="text-border fw-semibold">
                  context
                </label>
                <select
                  name="category"
                  className="w-100 px-4 bg-main border rounded py-3 mt-2 form-select text-white"
                  multiple
                  style={{ color: "rgb(192, 192, 192) !important" }}
                >
                  <option className="text-light">South Sudan</option>
                  <option className="text-light">Jamaica</option>
                  <option className="text-light">Kenya</option>
                  <option className="text-light">French Guiana</option>
                  <option className="text-light">Mayotta</option>
                  <option className="text-light">Liechtenstein</option>
                  <option className="text-light">Denmark</option>
                  <option className="text-light">Eritrea</option>
                  <option className="text-light">Gibraltar</option>
                  <option className="text-light">
                    Saint Helena, Ascension and Tristan da Cunha
                  </option>
                  <option className="text-light">Haiti</option>
                  <option className="text-light">Namibia</option>
                  <option className="text-light">
                    South Georgia and the South Sandwich Islands
                  </option>
                  <option className="text-light">Vietnam</option>
                  <option className="text-light">Yemen</option>
                  <option className="text-light">Philippines</option>
                </select>
              </div>
            </div>
            <button className="bg-subMain w-100 d-flex flex-row align-items-center justify-content-center gap-4 fw-medium text-light rounded py-3">
              <FaCloudUploadAlt />
              Thêm
            </button>
          </form>
        </div>
        <div
          className="position-absolute"
          style={{ right: "1.5rem", top: "1.5rem" }}
        >
          <button
            className="d-flex flex-column text-base text-subMain bg-white rounded-circle align-items-center justify-content-center"
            style={{ width: "40px", height: "40px" }}
            onClick={onClose}
          >
            <IoMdClose />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCategories;
