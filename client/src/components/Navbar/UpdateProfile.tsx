import React, { useRef, useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import "./Navbar.css";

const UpdateProfile = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState("");

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
    <form action="" className="d-flex flex-column gap-4 ">
      <h2 className="text-light font-weight-bold text-xl">Hồ sơ</h2>
      <div className="w-100 grid-container-12">
        <div className="grid-left text-light">
          <div className="w-100 align-items-center text-center d-flex flex-column justify-content-center gap-4 mx-0">
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
              <p className="text-sm mb-0 mt-2">Kéo hình ảnh của bạn vào đây</p>
              <em className="text-xs text-border">
                Chỉ các tệp .jpg và .png mới được chấp nhận
              </em>
            </div>
          </div>
        </div>
        <div className="grid-right ">
          <div
            className="p-2 bg-main border rounded mt-1"
            style={{
              height: "8rem",
              width: "8rem",
            }}
          >
            <img
              src={
                imageUrl || "https://netflixo-ten.vercel.app/images/user.png"
              }
              alt=""
              className="w-100 h-100 object-fit-cover rounded"
            />
          </div>
        </div>
      </div>
      <div className="w-100">
        <div className="w-100 text-sm">
          <label htmlFor="fullName" className="fw-semibold text-border">
            Họ và tên
          </label>
          <input
            type="text"
            name="fullName"
            placeholder="Họ Và Tên"
            className="w-100 text-sm mt-2 bg-main border rounded text-light"
            style={{ padding: "1.25rem" }}
          />
        </div>
      </div>
      <div className="w-100">
        <div className="w-100 text-sm">
          <label htmlFor="email" className="fw-semibold text-border">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Netflix@gmail.com"
            className="w-100 text-sm mt-2 bg-main border rounded text-light"
            style={{ padding: "1.25rem" }}
          />
        </div>
      </div>
      <div className="d-flex gap-1 flex-wrap flex-column-reverse flex-md-row justify-content-between align-items-center">
        <button className="bg-subMain font-medium red-btn px-4 text-light">
          Khôi Phục
        </button>
        <button className="bg-subMain font-medium black-btn px-4 text-light">
          Cập Nhật
        </button>
      </div>
    </form>
  );
};

export default UpdateProfile;
