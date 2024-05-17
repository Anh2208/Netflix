import React, { useState } from "react";
import {
  IoMdNotificationsOutline,
  IoIosSearch,
  IoMdMenu,
} from "react-icons/io";
import { RiHome2Line } from "react-icons/ri";
import { RxVideo } from "react-icons/rx";
import NavbarMenu from "../Navbar/NavbarMenu.tsx";

const Footer = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div
        className="position-fixed w-100 lg:hidden"
        style={{
          bottom: "0px",
          // paddingRight: "60px",
          // paddingLeft: "60px",
          zIndex: 50,
        }}
      >
        <div className="bg-dry rounded-2 d-flex align-items-center justify-content-between w-100 p-1">
          <a
            href=""
            className="transitions text-3xl d-flex align-items-center justify-content-center flex-column text-white px-4 py-3 rounded-2"
          >
            <RiHome2Line />
            <p className="text-sm sm:hidden">Trang Chủ</p>
          </a>
          <a
            href=""
            className="transitions text-3xl d-flex align-items-center justify-content-center flex-column text-white px-4 py-3 rounded-2"
          >
            <IoIosSearch />
            <p className="text-sm sm:hidden">Tìm Kiếm</p>
          </a>
          <a
            href=""
            className="transitions text-3xl d-flex align-items-center justify-content-center flex-column text-white px-4 py-3 rounded-2"
          >
            <RxVideo />
            <p className="text-sm sm:hidden">My List</p>
          </a>
          <button
            className="transitions text-3xl d-flex align-items-center justify-content-center flex-column text-white px-4 py-3 rounded-2 bg-main border-0"
            onClick={() => setShowMenu(true)}
          >
            <IoMdMenu />
            <p className="text-sm sm:hidden">Khác</p>
          </button>
        </div>
      </div>
      {showMenu && <NavbarMenu onClose={() => setShowMenu(false)} />}
    </>
  );
};

export default Footer;
