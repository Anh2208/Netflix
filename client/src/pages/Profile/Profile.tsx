import React, { useContext } from "react";
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
import AddMovie from "../../components/Navbar/AddMovie.tsx";
import UserList from "../../components/Navbar/UserList.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import axiosJWT from "../../utils/axiosJWT.js";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext/AuthContext.js";
import { toast } from "react-toastify";
import NavbarProfile from "../../components/Navbar/NavbarProfile.tsx";

const Profile = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const LogoutSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    const res = await axiosJWT.get(`http://localhost:8800/api/auth/logout`, {
      withCredentials: true,
    });

    if (res.status == 204) {
      dispatch({ type: "LOGOUT" });
      // toast.success(`Đăng nhập thành công`, {
      //   autoClose: 1500,
      //   onCloseComplete: () => {

      //   },
      // } as any);
      navigate("/");
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
          {/* <div className="item1 border border-secondary border-1 rounded-2 p-4 bg-dry">
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
              <button
                onClick={LogoutSubmit}
                className="font-medium text-sm align-items-center d-flex text-light bg-dry border-0"
              >
                Đăng Xuất
              </button>
            </a>
          </div> */}
          <NavbarProfile />
          {/* <div className="item2 bg-dry p-4 border border-1 rounded-md mx-0">
          </div> */}
          <UpdateProfile />
          {/* <MyList /> */}
          {/* <ChangePassword /> */}
          {/* <Dashboard /> */}
          {/* <Categories /> */}
          {/* <MoviesList /> */}
          {/* <AddMovie /> */}
          {/* <UserList /> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
