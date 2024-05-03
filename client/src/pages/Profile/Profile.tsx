import React from "react";
import { CiSettings } from "react-icons/ci";
import { MdFavorite, MdDashboard, MdAddCircle } from "react-icons/md";
import { RiLockPasswordLine, RiLogoutCircleLine } from "react-icons/ri";
import { FaThList, FaUser } from "react-icons/fa";
import { TbCategory2 } from "react-icons/tb";
import "./Profile.css"; // Import CSS file để tùy chỉnh tỷ lệ
import UpdateProfile from "../../components/Navbar/UpdateProfile.tsx";
import MyList from "../../components/Navbar/MyList.tsx";
import ChangePassword from "../../components/Navbar/ChangePassword.tsx";
import Dashboard from "../../components/Navbar/Dashboard.tsx";
import Categories from "../../components/Navbar/Categories.tsx";
import MoviesList from "../../components/Navbar/MoviesList.tsx";

const Profile = () => {
  return (
    <div
      className="container mx-auto px-2"
      style={{ minHeight: "100vh", background: "rgb(8 10 26)" }}
    >
      <div className="grid-container align-items-start mx-0 w-100 py-5">
        <div className="item1 border border-secondary border-1 rounded-2 p-4 bg-dry">
          <a
            href="/"
            className="font-medium text-sm rounded-2 p-3 align-items-center d-flex text-light"
            style={{ gap: "0.75rem" }}
          >
            <MdDashboard />
            Bảng điều khiển
          </a>
          <a
            href="/"
            className="font-medium text-sm rounded-2 p-3 align-items-center d-flex text-light"
            style={{ gap: "0.75rem" }}
          >
            <FaThList />
            Danh Sách Phim
          </a>
          <a
            href="/"
            className="font-medium text-sm rounded-2 p-3 align-items-center d-flex text-light"
            style={{ gap: "0.75rem" }}
          >
            <MdAddCircle />
            Thêm Phim
          </a>
          <a
            href="/"
            className="font-medium text-sm rounded-2 p-3 align-items-center d-flex text-light"
            style={{ gap: "0.75rem" }}
          >
            <TbCategory2 />
            Thể Loại
          </a>
          <a
            href="/"
            className="font-medium text-sm rounded-2 p-3 align-items-center d-flex text-light"
            style={{ gap: "0.75rem" }}
          >
            <FaUser />
            Người Dùng
          </a>
          <a
            href="/"
            className="bg-dryGray text-subMain font-medium text-sm rounded-2 p-3 align-items-center d-flex"
            style={{ gap: "0.75rem" }}
          >
            <CiSettings />
            Cập Nhật Tài Khoản
          </a>
          <a
            href="/"
            className="font-medium text-sm rounded-2 p-3 align-items-center d-flex text-light"
            style={{ gap: "0.75rem" }}
          >
            <MdFavorite />
            Danh Sách Yêu Thích
          </a>
          <a
            href="/"
            className="font-medium text-sm rounded-2 p-3 align-items-center d-flex text-light"
            style={{ gap: "0.75rem" }}
          >
            <RiLockPasswordLine />
            Đổi Mật Khẩu
          </a>
          <a
            href="/"
            className="font-medium text-sm rounded-2 p-3 align-items-center d-flex text-light"
            style={{ gap: "0.75rem" }}
          >
            <RiLogoutCircleLine />
            Đăng Xuất
          </a>
        </div>
        <div className="item2 bg-dry p-4 border border-1 rounded-md mx-0">
          {/* <UpdateProfile /> */}
          {/* <MyList /> */}
          {/* <ChangePassword /> */}
          {/* <Dashboard /> */}
          {/* <Categories /> */}
          <MoviesList />
        </div>
      </div>
    </div>
  );
};

export default Profile;
