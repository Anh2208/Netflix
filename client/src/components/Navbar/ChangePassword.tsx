import React, { useContext, useState } from "react";
import "./Navbar.css";
import NavbarProfile from "./NavbarProfile.tsx";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { toast, ToastContainer } from "react-toastify";
import axiosJWT from "../../utils/axiosJWT.js";
import { AuthContext } from "../../context/authContext/AuthContext.js";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfimPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { user } = useContext(AuthContext);

  const updateHandle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (newPassword != confirmPassword) {
        toast.error("Mật khẩu mới và mật khẩu xác nhận không trùng khớp", {
          autoClose: 2000,
        });
      } else {
        const res = await axiosJWT.put(
          `http://localhost:8800/api/user/${user.email}`,
          {
            password: oldPassword,
            newpassword: newPassword,
          }
        );
        if (res.status == 200) {
          toast.success("Cập nhật mật khẩu thành công", {
            autoClose: 2000,
          });
        }
      }
    } catch (error) {
      toast.error(`Đổi mật khẩu thất bại`, {
        autoClose: 1500,
      });
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
            <form onSubmit={updateHandle} className="d-flex flex-column gap-4">
              <h2 className="text-light font-weight-bold text-xl">
                Đổi mật khẩu
              </h2>
              <div className="w-100">
                <div className="w-100 text-sm">
                  <label
                    htmlFor="oldPassword"
                    className="fw-semibold text-border"
                  >
                    Mật khẩu cũ
                  </label>
                  <div className="position-relative d-flex justify-content-center align-items-center">
                    <input
                      type={showOldPassword == false ? "password" : "text"}
                      name="oldPassword"
                      placeholder="********"
                      onChange={(e) => setOldPassword(e.target.value)}
                      className="w-100 text-sm mt-2 bg-main border rounded text-light"
                      style={{ padding: "1.25rem" }}
                    />
                    <div
                      className="position-absolute justify-content-center align-items-center d-flex text-light"
                      style={{
                        right: "20px",
                        height: "10px",
                        width: "20px",
                        cursor: "pointer",
                      }}
                      onClick={() => setShowOldPassword((prev) => !prev)}
                    >
                      {showOldPassword ? <FaEyeSlash /> : <FaEye />}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-100">
                <div className="w-100 text-sm">
                  <label
                    htmlFor="newPassword"
                    className="fw-semibold text-border"
                  >
                    Mật khẩu mới
                  </label>
                  <div className="position-relative d-flex justify-content-center align-items-center">
                    <input
                      type={showNewPassword == false ? "password" : "text"}
                      name="newPassword"
                      placeholder="********"
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="w-100 text-sm mt-2 bg-main border rounded text-light"
                      style={{ padding: "1.25rem" }}
                    />
                    <div
                      className="position-absolute justify-content-center align-items-center d-flex text-light"
                      style={{
                        right: "20px",
                        height: "10px",
                        width: "20px",
                        cursor: "pointer",
                      }}
                      onClick={() => setShowNewPassword((prev) => !prev)}
                    >
                      {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-100">
                <div className="w-100 text-sm">
                  <label
                    htmlFor="confirmPassword"
                    className="fw-semibold text-border"
                  >
                    Nhập lại mật khẩu
                  </label>
                  <div className="position-relative d-flex justify-content-center align-items-center">
                    <input
                      type={showConfirmPassword == false ? "password" : "text"}
                      name="confirmPassword"
                      placeholder="********"
                      onChange={(e) => setConfimPassword(e.target.value)}
                      className="w-100 text-sm mt-2 bg-main border rounded text-light"
                      style={{ padding: "1.25rem" }}
                    />
                    <div
                      className="position-absolute justify-content-center align-items-center d-flex text-light"
                      style={{
                        right: "20px",
                        height: "10px",
                        width: "20px",
                        cursor: "pointer",
                      }}
                      onClick={() => setShowConfirmPassword((prev) => !prev)}
                    >
                      {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end align-items-center my-2">
                <button
                  type="submit"
                  className="font-medium black-btn px-4 text-light"
                >
                  Đổi mật khẩu
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default ChangePassword;
