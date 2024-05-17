import React, { useContext } from "react";
import { CiSettings } from "react-icons/ci";
import { MdFavorite, MdDashboard, MdAddCircle } from "react-icons/md";
import { RiLockPasswordLine, RiLogoutCircleLine } from "react-icons/ri";
import { FaThList, FaUser } from "react-icons/fa";
import { TbCategory2 } from "react-icons/tb";
import axiosJWT from "../../utils/axiosJWT";
import { AuthContext } from "../../context/authContext/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

const links = [
  { href: "/dashboard", text: "Bảng điều khiển", icon: <MdDashboard /> },
  { href: "/movielist", text: "Danh Sách Phim", icon: <FaThList /> },
  { href: "/addmovie", text: "Thêm Phim", icon: <MdAddCircle /> },
  { href: "/categories", text: "Thể Loại", icon: <TbCategory2 /> },
  { href: "/userlist", text: "Người Dùng", icon: <FaUser /> },
  { href: "/user", text: "Cập Nhật Tài Khoản", icon: <CiSettings /> },
  { href: "/mylist", text: "Danh Sách Yêu Thích", icon: <MdFavorite /> },
  {
    href: "/changepassword",
    text: "Đổi Mật Khẩu",
    icon: <RiLockPasswordLine />,
  },
  // { href: "/", text: "Đăng Xuất", icon: <RiLogoutCircleLine /> },
];

const NavbarProfile = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

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
    <div className="item1 border border-secondary border-1 rounded-2 p-4 bg-dry">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className={`font-medium text-sm rounded-2 p-3 align-items-center d-flex ${
            location.pathname === link.href
              ? "bg-dryGray text-subMain"
              : "text-light"
          }`}
          style={{ gap: "0.75rem" }}
        >
          {link.icon}
          {link.text}
        </a>
      ))}
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
    </div>
  );
};

export default NavbarProfile;
