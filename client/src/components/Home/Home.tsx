import React from "react";
import "./Home.css";
const Header = () => {
  return (
    <>
      <div
        style={{ zIndex: 1, height: 0 }}
        className="overflow-visible position-relative"
      >
        {/* <header className="card ">
          <div className="wrapper">
            <div className="container">
              <div className="row">
                <div className="item-left">
                  <span>
                    <svg
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
                    <span>Netflix</span>
                  </span>
                </div>
                <div className="item-right">
                  <div className="layout">
                    <div className="container">
                      <div className="language-picker-header">
                        <span>
                          <div className="main-select">
                            <div
                              role="img"
                              aria-hidden="true"
                              className="svg-select-language"
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
                              className="select-language"
                              name="LanguageSelect"
                            >
                              <option
                                lang="vi"
                                label="Tiếng Việt"
                                value="vi-VN"
                                selected
                              >
                                Tiếng Việt
                              </option>
                              <option lang="en" label="English" value="en-VN">
                                English
                              </option>
                            </select>
                            <div
                              className="last-main-select"
                              aria-hidden="true"
                            >
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                data-name="CaretDown"
                                aria-hidden="true"
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
                      </div>
                      <div className="main-login">
                        <div>
                          <a
                            role="button"
                            className="login-button"
                            id="signIn"
                            data-uia="header-login-link"
                            href="/vn/login"
                          >
                            Đăng nhập
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header> */}

        <header className="container p-3">
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
                  <span>Netflix</span>
                </span>
              </div>
            </div>
            <div className="col-8">
              <div className="d-flex">
                <span className="ms-auto">
                  <div>
                    <div role="img" aria-hidden="true">
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
                    <select className="">
                      <option selected>Tiếng Việt</option>
                      <option>English</option>
                    </select>
                    <div className="last-main-select" aria-hidden="true">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        data-name="CaretDown"
                        aria-hidden="true"
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
                <div>
                  <a
                    role="button"
                    className="btn btn-danger"
                    id="signIn"
                    data-uia="header-login-link"
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
        <div className="card-hero">
          <div className="card-poster">
            <div className="detail-img">
              <img
                alt=""
                aria-hidden="true"
                data-uia="nmhp-card-hero+background+image"
                src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/b8cca226-95ea-4851-8459-3e8940c3654e/VN-vi-20240415-popsignuptwoweeks-perspective_alpha_website_small.jpg"
                srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/b8cca226-95ea-4851-8459-3e8940c3654e/VN-vi-20240415-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/b8cca226-95ea-4851-8459-3e8940c3654e/VN-vi-20240415-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/b8cca226-95ea-4851-8459-3e8940c3654e/VN-vi-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
                className="poster"
              ></img>
              <div
                className="detail-poster"
                data-uia="nmhp-card-hero+gradient"
              ></div>
            </div>
          </div>
          {/* center */}
          <div className="main-center-poster">
            <div className="center-poster">
              <h1
                data-uia="nmhp-card-hero-text-title"
                className="default-ltr-cache-jpuyb8 e9eyrqp8"
              >
                Chương trình truyền hình, phim không giới hạn và nhiều nội dung
                khác
              </h1>
              <p
                data-uia="nmhp-card-hero-text-subtitle"
                className="default-ltr-cache-10i4ild e9eyrqp7"
              >
                Xem ở mọi nơi. Hủy bất kỳ lúc nào.
              </p>
              <div className="default-ltr-cache-1asgq30 e9eyrqp4">
                <div className="default-ltr-cache-inkrn e1w590cc2">
                  <form
                    data-uia="email-form"
                    className=" default-ltr-cache-1u8qly9"
                    aria-label="Đăng ký hoặc kích hoạt lại tư cách thành viên của bạn."
                    method="post"
                  >
                    <h3 className="default-ltr-cache-1arr3vy e1w590cc1">
                      Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt
                      lại tư cách thành viên của bạn.
                    </h3>
                    <div
                      data-issplitform="false"
                      data-hasmessage="false"
                      className="default-ltr-cache-1jbflut e1w590cc0"
                    >
                      <div
                        data-uia="field-email+container"
                        className=" e2so2tu1 default-ltr-cache-19j78qz ea3diy35"
                      >
                        <label
                          htmlFor=":r0:"
                          data-uia="field-email+label"
                          className="default-ltr-cache-v70qew ea3diy32"
                        >
                          Địa chỉ email
                        </label>
                        <div className="default-ltr-cache-fmygl2 ea3diy34">
                          <input
                            autoComplete="email"
                            minLength={5}
                            maxLength={50}
                            type="email"
                            id=":r0:"
                            name="email"
                            data-uia="field-email"
                            value=""
                            data-autofill="true"
                          />
                          <div
                            aria-hidden="true"
                            className="default-ltr-cache-emv211 ea3diy33"
                          ></div>
                        </div>
                      </div>
                      <button
                        className=" e1ax5wel1 ew97par0 default-ltr-cache-zrlha2 e1ff4m3w2"
                        data-uia="nmhp-card-cta+hero_fuji"
                        type="submit"
                      >
                        Bắt đầu
                        <div
                          aria-hidden="true"
                          className="default-ltr-cache-17uj5h e1ax5wel0"
                        >
                          <svg
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
      </div>
    </>
  );
};

export default Header;
