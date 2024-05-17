/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Home.css";

const FooterHome = () => {
  return (
    <>
      <footer
        style={{
          paddingLeft: "10rem",
          paddingRight: "2rem",
          marginTop: "4.5rem",
          marginBottom: "4.5rem",
          color: "rgba(255,255,255,0.7)",
          margin: "auto",
          fontSize: "1rem",
          fontWeight: 400,
        }}
      >
        <div className="w-100 d-inherit h-auto">
          <div className="d-flex d-inline-flex flex-wrap w-100 flex-row p-0">
            <div
              style={{
                flex: "0 0 100%",
                width: "inherit",
              }}
              className="w-inherit"
            >
              <div
                style={{
                  marginBottom: "0.75rem",
                }}
              >
                <a
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    borderRadius: "0.125rem",
                  }}
                  href="https://help.netflix.com/contactus"
                >
                  Bạn có câu hỏi? Liên hệ với chúng tôi.
                </a>
              </div>
              <div>
                <div
                  style={{
                    margin: "0.75rem 0",
                    fontSize: "0.875rem",
                    fontWeight: 400,
                  }}
                  className="w-100"
                >
                  <div
                    style={{
                      height: "auto",
                    }}
                    className="w-100 d-inherit"
                  >
                    <ul
                      style={{
                        height: "inherit",
                        marginTop: "1rem",
                        width: "calc(100% + 0.75rem)",
                      }}
                      className=" d-flex flex-wrap flex-row p-0"
                    >
                      <li className="col-3 gap-3 d-flex flex-column">
                        <a href="#">Câu hỏi thường gặp</a>
                        <a href="#">Quan hệ với nhà đầu tư</a>
                        <a href="#">Quyền riêng tư</a>
                        <a href="#">Kiểm tra tốc độ</a>
                      </li>
                      <li className="col-3 gap-3 d-flex flex-column">
                        <a href="#">Trung tâm trợ giúp</a>
                        <a href="#">Việc làm</a>
                        <a href="#">Tùy chọn cookie</a>
                        <a href="#">Thông báo pháp lý</a>
                      </li>
                      <li className="col-3 gap-3 d-flex flex-column">
                        <a href="#">Tài khoản</a>
                        <a href="#">Các cách xem</a>
                        <a href="#">Thông tin doanh nghiệp</a>
                        <a href="#">Chỉ có trên Netflix</a>
                      </li>
                      <li className="col-3 gap-3 d-flex flex-column">
                        <a href="#">Trung tâm đa phương tiện</a>
                        <a href="#">Điều khoản sử dụng</a>
                        <a href="#">Liên hệ với chúng tôi</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                flex: "0 0 100%",
                width: "inherit",
              }}
              className="w-inherit"
            ></div>
          </div>
        </div>
        {/* select language */}
        <div className="mt-4">
          <span className="ms-auto">
            <div
              style={{
                fontSize: "1rem",
                color: "white",
                zIndex: 0,
                padding: 0,
                minWidth: "auto",
                width: "auto",
              }}
              className="d-inline-flex gap-2 position-relative align-text-left align-items-center"
            >
              <div
                style={{
                  width: "1rem",
                  height: "-1rem",
                  left: "0.75rem",
                  right: "auto",
                }}
                className="position-absolute"
                role="img"
                aria-hidden="true"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z"
                    fill="#fff"
                  ></path>
                </svg>
              </div>
              <select
                defaultValue={"Tiếng Việt"}
                style={{
                  paddingRight: "2.25rem",
                  paddingLeft: "2.25rem",
                  paddingTop: "0.375rem",
                  paddingBottom: "0.375rem",
                  lineHeight: " 1.25rem",
                  width: "auto",
                  color: "inherit",
                  border: "0 solid transparent",
                  appearance: "none",
                  font: "inherit",
                }}
                className="bg-transparent fw-light"
              >
                <option value="vi">Tiếng Việt</option>
                <option value="en">English</option>
              </select>
              <div
                style={{
                  borderColor: "rgba(128, 128, 128, 0.7)",
                }}
                className="dropdown-button position-absolute"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5976 6.5C11.7461 6.5 11.8204 6.67956 11.7154 6.78457L8.23574 10.2643C8.10555 10.3945 7.89445 10.3945 7.76425 10.2643L4.28457 6.78457C4.17956 6.67956 4.25393 6.5 4.40244 6.5H11.5976Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
          </span>
        </div>
        <div className="mt-3">
          <div
            style={{
              fontSize: "0.875rem",
              marginTop: "1.5rem",
            }}
          >
            Netflix Việt Nam
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterHome;
