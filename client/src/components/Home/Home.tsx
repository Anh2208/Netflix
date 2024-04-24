import React, { useState } from "react";
import "./Home.css";
const Header = () => {
  const [email, setEmail] = useState("");
  return (
    <>
      <div
        style={{ zIndex: 1, height: 0 }}
        className="overflow-visible position-relative"
      >
        <header className="container p-3 m-auto">
          <div className="row">
            <div className="col-4">
              <div>
                <span className="text-danger fs-5">
                  <svg
                    className="icon"
                    viewBox="0 0 111 30"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    role="img"
                  >
                    <g>
                      <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"></path>
                    </g>
                  </svg>
                  {/* <span>Netflix</span> */}
                </span>
              </div>
            </div>

            {/* select language */}

            <div className="col-8">
              <div className="d-flex flex-wrap position-relative">
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
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z"
                          fill="#fff"
                        ></path>
                      </svg>
                    </div>
                    <select
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
                      <option selected>Tiếng Việt</option>
                      <option>English</option>
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
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M11.5976 6.5C11.7461 6.5 11.8204 6.67956 11.7154 6.78457L8.23574 10.2643C8.10555 10.3945 7.89445 10.3945 7.76425 10.2643L4.28457 6.78457C4.17956 6.67956 4.25393 6.5 4.40244 6.5H11.5976Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </span>

                {/* button login */}

                <div
                  style={{
                    marginLeft: "1.5rem",
                  }}
                >
                  <a
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      minHeight: "2rem",
                      padding: "0.25rem 1rem",
                    }}
                    role="button"
                    className="btn btn-danger"
                    href="/vn/login"
                  >
                    Đăng nhập
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* main poster */}
      <div>
        {/* poster */}
        <div
          style={{
            minHeight: "43.75rem",
            padding: "9.875rem 0 4rem",
          }}
          className="position-relative d-flex text-center h-100"
        >
          <div className="position-absolute top-0 left-0 w-100 h-100">
            <div className="position-relative overflow-hidden h-100 w-100">
              <img
                alt=""
                aria-hidden="true"
                data-uia="nmhp-card-hero+background+image"
                src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/b8cca226-95ea-4851-8459-3e8940c3654e/VN-vi-20240415-popsignuptwoweeks-perspective_alpha_website_small.jpg"
                srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/b8cca226-95ea-4851-8459-3e8940c3654e/VN-vi-20240415-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/b8cca226-95ea-4851-8459-3e8940c3654e/VN-vi-20240415-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/b8cca226-95ea-4851-8459-3e8940c3654e/VN-vi-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
                className="img-poster"
              ></img>
              <div
                style={{
                  backgroundImage:
                    "linear-gradient( to top,rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%)",
                }}
                className="opacity-poster"
              ></div>
            </div>
          </div>

          {/* main center */}
          <div
            style={{
              maxWidth: "calc(88% - 4rem)",
            }}
            className="d-flex flex-column m-auto text-light"
          >
            <div
              style={{
                flexBasis: "50%",
                zIndex: 1,
              }}
              className="p-0 w-100"
            >
              <h1
                style={{
                  fontSize: "3rem",
                  fontWeight: 900,
                }}
                className="m-0"
              >
                Chương trình truyền hình, phim không giới hạn và nhiều nội dung
                khác
              </h1>
              <p
                style={{
                  margin: "1rem 0 0",
                }}
                className="fs-4 fw-normal"
              >
                Xem ở mọi nơi. Hủy bất kỳ lúc nào.
              </p>
              <div
                style={{
                  margin: "1rem 0 0",
                }}
              >
                <div
                  style={{
                    content: "2",
                    padding: "0 2rem",
                    maxWidth: "61.5rem",
                    margin: "0 auto",
                  }}
                >
                  <form
                    className="d-flex flex-column"
                    aria-label="Đăng ký hoặc kích hoạt lại tư cách thành viên của bạn."
                    method="post"
                  >
                    <h3 className="fs-5 m-0">
                      Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt
                      lại tư cách thành viên của bạn.
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
                            transitionTimingFunction:
                              "cubic-bezier(0.5, 0, 0.1, 1)",
                            left: "1rem",
                            right: "1rem",
                            top: "0.5rem",
                            fontSize: "0.75rem",
                          }}
                          className="position-absolute overflow-hidden text-left"
                        >
                          Địa chỉ email
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
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                      </button>
                    </div>
                  </form>
                </div>
                <div className="center-pixel default-ltr-cache-1qms9jn ekwtkbw0"></div>
              </div>
            </div>
            <div className="default-ltr-cache-vgp0nn e9eyrqp3"></div>
          </div>
        </div>
        <div
          style={{
            minHeight: "auto",
            padding: "4.5rem 0",
            color: "rgb(255,255,255)",
          }}
          className="position-relative d-flex justify-content-center text-center h-100"
        >
          <div
            style={{
              maxWidth: "calc(100% - 4rem)",
            }}
            className="d-flex flex-row m-auto align-items-center text-center"
          >
            <div
              style={{
                paddingLeft: "0.375rem",
                flexBasis: "50%",
                zIndex: 1,
              }}
              className="text-left p-0 w-100"
            >
              <h2 className="fs-3 fw-bold m-0 text-left">
                Thưởng thức trên TV của bạn
              </h2>
              <p
                style={{
                  margin: "1rem 0 0",
                }}
                className="fs-2 fw-normal"
              >
                Xem trên TV thông minh, Playstation, Xbox, Chromecast, Apple TV,
                đầu phát Blu-ray và nhiều thiết bị khác.
              </p>
              <div
                style={{
                  margin: "1.5rem 0 0",
                }}
              >
                <div></div>
              </div>
            </div>
            <div
              style={{
                paddingLeft: "0.375rem",
                flexBasis: "50%",
                zIndex: 1,
              }}
              className="p-0"
            >
              <div className="position-relative">
                <img
                  alt="img-tv"
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                  className="w-100 border-0"
                />
                <div
                  style={{
                    zIndex: -1,
                    maxWidth: "73%",
                    maxHeight: "54%",
                    top: "46%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                  className="overflow-hidden w-100 h-100 position-absolute"
                >
                  <video
                    className="d-inline-block align-baseline"
                    autoPlay={true}
                    playsInline={true}
                    muted={true}
                    loop={true}
                  >
                    <source
                      src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                      type="video/mp4"
                    />
                  </video>
                  <div aria-hidden="true"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
