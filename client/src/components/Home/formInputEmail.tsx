import React, { useState } from "react";

const FormInputEmail = () => {
  const [email, setEmail] = useState("");
  return (
    <>
      <form
        className="d-flex flex-column"
        aria-label="Đăng ký hoặc kích hoạt lại tư cách thành viên của bạn."
        method="post"
      >
        <h3
          style={{
            fontSize: "1.25rem",
            fontWeight: "400",
          }}
          className=" m-0"
        >
          Bạn đã sẵn sàng xem chưa? Nhập email hoặc số điện thoại di động để tạo
          hoặc kích hoạt lại tư cách thành viên của bạn.
        </h3>
        <div
          style={{
            margin: "1rem auto 0",
            maxWidth: "36.625rem",
            textAlign: "left",
          }}
          className="d-flex flex-row position-relative w-100"
        >
          <div
            style={{
              flex: "1 1 auto",
            }}
            className="d-flex flex-wrap align-top text-left w-auto position-relative d-inline-flex"
          >
            <label
              style={{
                color: "rgba(255, 255, 255, 0.7)",
                zIndex: 1,
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                transitionProperty: "top, fontSize, lineHeight",
                transitionDuration: "250ms",
                transitionTimingFunction: "cubic-bezier(0.5, 0, 0.1, 1)",
                left: "1rem",
                right: "1rem",
                top: "0.5rem",
                fontSize: "0.75rem",
              }}
              className="position-absolute overflow-hidden text-left"
            >
              Email hoặc số điện thoại di động
            </label>
            <div
              style={{
                minWidth: "12.5rem",
                zIndex: 0,
              }}
              className="fs-6 fw-normal p-0 w-100 align-items-center d-inline-flex gap-2 position-relative text-left"
            >
              <input
                className="input-email"
                autoComplete="email"
                minLength={5}
                maxLength={50}
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="opacity-input-email"></div>
            </div>
          </div>
          <button
            style={{
              flex: "0 0 auto",
              marginLeft: "0.5rem",
              fontSize: "1.5rem",
              fontWeight: 500,
              minHeight: "3.5rem",
              padding: "0.75rem 1.5rem",
              background: "rgb(229, 9, 20)",
              color: "rgb(255, 255, 255)",
              lineHeight: 1,
            }}
            className="mt-0 position-relative appearance-none d-inline-flex align-items-center border-0 rounded justify-content-center overflow-visible"
            type="submit"
          >
            Bắt đầu
            <div
              style={{
                height: "1.5rem",
              }}
              className="d-inline-block"
            >
              <svg
                style={{
                  marginLeft: "0.5rem",
                }}
                className="overflow-hidden"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </button>
        </div>
      </form>
    </>
  );
};

export default FormInputEmail;
