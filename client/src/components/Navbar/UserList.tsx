import React, { useEffect, useState } from "react";
import { FaListAlt, FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import NavbarProfile from "./NavbarProfile.tsx";
import axiosJWT from "../../utils/axiosJWT.js";
import { toast, ToastContainer } from "react-toastify";

interface User {
  id: string;
  email: string;
  username: string;
  avatar: string;
  isAdmin: boolean;
}

const UserList = () => {
  const [userList, setUserList] = useState<User[]>([]);

  const getUserList = async () => {
    const res = await axiosJWT.get(`http://localhost:8800/api/user`);
    if (res.status == 200) {
      setUserList(res.data.userList);
    }
  };

  useEffect(() => {
    getUserList();
  }, []);

  const deleteUserHandle = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();

    if (window.confirm("Bạn có chắc chắn muốn xóa người dùng này không?")) {
      try {
        const res = await axiosJWT.delete(
          `http://localhost:8800/api/user/${id}`
        );

        if (res.status === 200) {
          setUserList(userList.filter((user) => user.id !== id));
          toast.success("Xóa người dùng thành công", {
            autoClose: 1500,
          });
        }
      } catch (error) {
        toast.error(`${error}`, {
          autoClose: 1500,
        });
      }
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
            <div className="d-flex flex-column gap-4">
              <h5 className="text-xl fw-bold text-light">
                Danh sách người dùng
              </h5>
              <div className="overflow-hidden d-relative w-100 text-light">
                <table className="w-100 table-auto border border-1">
                  <thead>
                    <tr className="bg-dryGray">
                      <th
                        scope="col"
                        className="text-xs text-left px-4 py-2 text-dark text-uppercase"
                      >
                        Hình ảnh
                      </th>
                      {/* <th
                        scope="col"
                        className="text-xs text-left px-4 py-2 text-dark text-uppercase"
                      >
                        ID
                      </th> */}
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
                        Email
                      </th>
                      <th
                        scope="col"
                        className="text-xs text-left px-4 py-2 text-dark text-uppercase"
                      >
                        Role
                      </th>

                      <th
                        scope="col"
                        className="text-xs text-left px-4 py-2 text-dark text-uppercase text-center"
                      >
                        Hành động
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {userList.map((user, index) => (
                      <tr key={index}>
                        <td className="text-sm text-start table-td px-4">
                          <div
                            className="p-1 bg-dry border rounded overflow-hidden"
                            style={{ width: "3rem", height: "3rem" }}
                          >
                            <img
                              src={
                                user.avatar ||
                                "https://media.licdn.com/dms/image/D560BAQE96KctT7x-iw/company-logo_200_200/0/1666170056423?e=2147483647&v=beta&t=VWwOyGELKPqLpkj7dbxaCDtWbhWKvp3akvhvMdHivy4"
                              }
                              className="w-100 h-100 object-fit-cover rounded-1"
                            />
                          </div>
                        </td>
                        {/* <td className="text-sm text-start table-td px-4">
                          {user.email}
                        </td> */}
                        <td className="text-sm text-start table-td px-4">
                          {user.username}
                        </td>
                        <td className="text-sm text-start table-td px-4">
                          {user.email}
                        </td>
                        <td className="text-sm text-start table-td px-4">
                          {user.isAdmin ? "Admin" : "User"}
                        </td>
                        <td className="text-sm text-start table-td  px-4 d-flex flex-row align-items-center justify-content-center gap-2 mt-2">
                          {/* <a
                            href=""
                            className="border border-1 bg-dry d-flex align-items-center justify-content-center px-2 py-1 rounded"
                            style={{ color: "rgb(34, 197, 94)" }}
                          >
                            <FaEdit />
                          </a> */}
                          {user.isAdmin == false ? (
                            <button
                              className="bg-subMain text-light rounded d-flex align-items-center justify-content-center flex-column"
                              style={{ height: "1.5rem", width: "1.5rem" }}
                              onClick={(e) => deleteUserHandle(e, user.id)}
                            >
                              <MdDeleteForever />
                            </button>
                          ) : null}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default UserList;
