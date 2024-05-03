import React from "react";
import "./Navbar.css";

const ChangePassword = () => {
  return (
    <form className="d-flex flex-column gap-4">
      <h2 className="text-light font-weight-bold text-xl">Đổi mật khẩu</h2>
      <div className="w-100">
        <div className="w-100 text-sm">
          <label htmlFor="oldPassword" className="fw-semibold text-border">
            Mật khẩu cũ
          </label>
          <input
            type="password"
            name="oldPassword"
            placeholder="********"
            className="w-100 text-sm mt-2 bg-main border rounded text-light"
            style={{ padding: "1.25rem" }}
          />
        </div>
      </div>
      <div className="w-100">
        <div className="w-100 text-sm">
          <label htmlFor="newPassword" className="fw-semibold text-border">
            Mật khẩu mới
          </label>
          <input
            type="password"
            name="newPassword"
            placeholder="********"
            className="w-100 text-sm mt-2 bg-main border rounded text-light"
            style={{ padding: "1.25rem" }}
          />
        </div>
      </div>
      <div className="w-100">
        <div className="w-100 text-sm">
          <label htmlFor="confirmPassword" className="fw-semibold text-border">
            Nhập lại mật khẩu
          </label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="********"
            className="w-100 text-sm mt-2 bg-main border rounded text-light"
            style={{ padding: "1.25rem" }}
          />
        </div>
      </div>
      <div className="d-flex justify-content-end align-items-center my-2">
        <button type="submit" className="font-medium black-btn px-4 text-light">
          Đổi mật khẩu
        </button>
      </div>
    </form>
  );
};

export default ChangePassword;
