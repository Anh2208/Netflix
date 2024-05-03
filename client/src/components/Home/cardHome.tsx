import React from "react";

const CardHome = () => {
  return (
    <>
      {/* thưởng thức trên tv của bạn */}
      <div
        style={{
          minHeight: "auto",
          padding: "4.5rem 0",
          color: "rgb(255,255,255)",
        }}
        className=" position-relative d-flex justify-content-center h-100"
      >
        <div className="div-maxWidth d-flex flex-row m-auto align-items-center">
          <div
            style={{
              paddingLeft: "0.375rem",
              flexBasis: "50%",
              zIndex: 1,
            }}
            className="text-left p-0 w-100"
          >
            <h2
              style={{
                fontSize: "3rem",
                fontWeight: 900,
              }}
              className="m-0 text-left"
            >
              Thưởng thức trên TV của bạn
            </h2>
            <p
              style={{
                margin: "1rem 0 0",
                fontSize: "1.5rem",
              }}
              className="fw-normal"
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
        <div
          style={{
            height: "0.5rem",
            bottom: "-0.5rem",
            backgroundColor: "rgb(35,35,35)",
          }}
          className="w-100 position-absolute"
        ></div>
      </div>
      {/* tải xuống nội dung để xem trực tuyến */}
      <div
        style={{
          minHeight: "auto",
          padding: "4.5rem 0",
          color: "rgb(255,255,255)",
        }}
        className=" position-relative d-flex justify-content-center h-100"
      >
        <div className="div-maxWidth d-flex flex-row-reverse m-auto align-items-center">
          <div
            style={{
              paddingLeft: "0.375rem",
              flexBasis: "50%",
              zIndex: 1,
            }}
            className="text-left p-0"
          >
            <h2
              style={{
                fontSize: "3rem",
                fontWeight: 900,
              }}
              className="m-0 align-text-left"
            >
              Tải xuống nội dung để xem ngoại tuyến
            </h2>
            <p
              style={{
                fontSize: "1.5rem",
                margin: "1rem 0 0",
                fontWeight: 400,
              }}
            >
              Lưu lại những nội dung yêu thích một cách dễ dàng và luôn có thứ
              để xem.
            </p>
          </div>
          <div
            style={{
              paddingRight: "0.375rem",
              flexBasis: "50%",
              zIndex: 1,
            }}
            className="p-0 align-text-center"
          >
            <div className="position-relative align-text-center">
              <img
                alt=""
                className="w-100 border-0"
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
              />
              <div
                style={{
                  padding: "0.5rem 0.75rem",
                  left: "50%",
                  bottom: "8%",
                  transform: "translateX(-50%)",
                  margin: "0 auto",
                  background: "rgb(0,0,0)",
                  width: "60%",
                  minWidth: "15rem",
                  border: "2px solid rgba(128, 128, 128, 0.7)",
                  boxShadow: "0 0 2em 0 rgb(0, 0, 0)",
                  borderRadius: "0.75rem",
                  zIndex: 1,
                }}
                className="overflow-hidden position-absolute d-flex align-items-center"
              >
                <div
                  style={{
                    margin: "0 1rem 0 0",
                    flexGrow: 0,
                    flexShrink: 0,
                  }}
                  className="align-text-center"
                >
                  <img
                    style={{
                      height: "4.5rem",
                    }}
                    className="border-0"
                    alt=""
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                  />
                </div>
                <div
                  style={{
                    margin: "0.3rem 0",
                  }}
                  className="text-left flex-grow-1 flex-shrink-1"
                >
                  <div>Cậu bé mất tích</div>
                  <div
                    style={{
                      fontSize: "0.875rem",
                      color: "#0071eb",
                    }}
                  >
                    Đang tải xuống...
                  </div>
                </div>
                <div
                  style={{
                    height: "3.75rem",
                    width: "3rem",
                    outline: "2px solid rgb(0,0,0)",
                    outlineOffset: "-2px",
                    background:
                      "url('https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif') center center no-repeat",
                    backgroundSize: "100%",
                    content: "''",
                    flexGrow: 0,
                    flexShrink: 0,
                  }}
                  className="d-block"
                  aria-hidden="true"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            height: "0.5rem",
            bottom: "-0.5rem",
            backgroundColor: "rgb(35,35,35)",
          }}
          className="w-100 position-absolute"
        ></div>
      </div>
      {/* Xem ở mọi nơi */}
      <div
        style={{
          minHeight: "auto",
          padding: "4.5rem 0",
          color: "rgb(255,255,255)",
        }}
        className=" position-relative d-flex justify-content-center h-100"
      >
        <div className="div-maxWidth d-flex flex-row m-auto align-items-center">
          <div
            style={{
              paddingRight: "0.375rem",
              flexBasis: "50%",
              zIndex: 1,
            }}
            className="text-left w-100"
          >
            <h2
              style={{
                fontSize: "3rem",
                fontWeight: 900,
              }}
              className="m-0 align-text-left"
            >
              Xem ở mọi nơi
            </h2>
            <p
              style={{
                fontSize: "1.5rem",
                margin: "1rem 0 0",
              }}
            >
              Phát trực tuyến không giới hạn phim và chương trình truyền hình
              trên điện thoại, máy tính bảng, máy tính xách tay và TV.
            </p>
          </div>
          <div
            style={{
              paddingLeft: "0.375rem",
              zIndex: 1,
              flexBasis: "50%",
              padding: 0,
              textAlign: "center",
            }}
          >
            <div className="position-relative align-text-center">
              <img
                alt=""
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-vn.png"
                className="w-100 border-0"
              />
              <div
                style={{
                  zIndex: -1,
                  maxWidth: "63%",
                  maxHeight: "47%",
                  top: "34%",
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
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-vn.m4v"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            height: "0.5rem",
            bottom: "-0.5rem",
            backgroundColor: "rgb(35,35,35)",
          }}
          className="w-100 position-absolute"
        ></div>
      </div>
      {/* Tạo hồ sơ cho trẻ em */}
      <div
        style={{
          minHeight: "auto",
          padding: "4.5rem 0",
          color: "rgb(255,255,255)",
        }}
        className=" position-relative d-flex justify-content-center h-100"
      >
        <div className="div-maxWidth d-flex flex-row-reverse m-auto align-items-center">
          <div
            style={{
              paddingLeft: "0.375rem",
              flexBasis: "50%",
              zIndex: 1,
            }}
            className="text-left p-0 w-100"
          >
            <h2
              style={{
                fontSize: "3rem",
                fontWeight: 900,
              }}
              className="m-0 align-text-left"
            >
              Tạo hồ sơ cho trẻ em
            </h2>
            <p
              style={{
                fontSize: "1.5rem",
                margin: "1rem 0 0",
                fontWeight: 400,
              }}
            >
              Đưa các em vào những cuộc phiêu lưu với nhân vật được yêu thích
              trong một không gian riêng. Tính năng này đi kèm miễn phí với tư
              cách thành viên của bạn.
            </p>
            <div
              style={{
                margin: "1.5rem 0 0",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  textAlign: "left",
                }}
              ></div>
            </div>
          </div>
          <div
            style={{
              paddingRight: "0.375rem",
              flexBasis: "50%",
              zIndex: 1,
            }}
            className="p-0"
          >
            <div className="position-relative">
              <img
                alt=""
                className="w-100 border-0"
                src="https://occ-0-395-58.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABZSTDsJQCe6ndkevSo7c_grcr0f2YJ5pimzeSor98ix4Earwyoza7Liyg8OsNpA2cg3HKSF63qppfkKVP8BTEmcVRAkwa2lhcl5S.png?r=d73"
              />
              <div data-uia="nmhp-card-animation-asset-motion">
                <div></div>
                <div
                  data-uia="nmhp-card-animation-asset-custom"
                  aria-hidden="true"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            height: "0.5rem",
            bottom: "-0.5rem",
            backgroundColor: "rgb(35,35,35)",
          }}
          className="w-100 position-absolute"
        ></div>
      </div>
    </>
  );
};

export default CardHome;
