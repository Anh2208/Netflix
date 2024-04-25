import React, { useState } from "react";

const FrequentlyAskedQuestions = () => {
  const [openQuest1, setOpenQuest1] = useState(false);
  const [openQuest2, setOpenQuest2] = useState(false);
  const [openQuest3, setOpenQuest3] = useState(false);
  const [openQuest4, setOpenQuest4] = useState(false);
  const [openQuest5, setOpenQuest5] = useState(false);
  const [openQuest6, setOpenQuest6] = useState(false);
  return (
    <>
      <ul
        style={{
          listStyle: "none",
          fontSize: "1.5rem",
          fontWeight: 400,
        }}
        className="p-0 m-0"
      >
        {/* Netflix là gì? */}
        <li
          onClick={() => setOpenQuest1((preV) => !preV)}
          style={{
            listStyleType: "none",
            textIndent: 0,
            margin: "0 0 0.5rem 0",
          }}
          className="p-0"
        >
          <h3
            style={{
              fontSize: "inherit",
              fontWeight: "inherit",
              marginBottom: "0.0625rem",
              transitionDuration: "250ms",
              transitionTimingFunction: "cubic-bezier(0.9, 0, 0.51, 1)",
            }}
            className=" m-0 d-flex position-relative"
          >
            <button
              style={{
                padding: "1.5rem",
                appearance: "none",
                borderRadius: 0,
                font: "inherit",
                letterSpacing: "inherit",
                lineHeight: "inherit",
                textDecoration: "none",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "inherit",
                width: "100%",
              }}
              className="d-flex flex-row m-0 align-items-center"
              type="button"
            >
              <span
                style={{
                  textAlign: "left",
                }}
                className="col-10"
              >
                Netflix là gì?
              </span>
              <svg
                style={{
                  transform: "rotate(0)",
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                role="img"
                className={`col-3 overflow-hidden flex-shrink-0 ${
                  openQuest1 && "d-none"
                }`}
              >
                <path
                  d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"
                  fill="currentColor"
                ></path>
              </svg>
              <svg
                style={{
                  transform: "rotate(-45deg)",
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                role="img"
                className={`col-3 overflow-hidden ${!openQuest1 && "d-none"}`}
              >
                <path
                  d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </h3>
          <div
            style={{
              maxHeight: "75rem",
              padding: "1.5rem",
              backgroundColor: "rgb(45, 45, 45)",
              marginTop: "1px",
            }}
            className={`overflow-hidden visible text-left ${
              !openQuest1 ? "d-none" : ""
            }`}
          >
            <span>
              Netflix là dịch vụ phát trực tuyến mang đến đa dạng các loại
              chương trình truyền hình, phim, anime, phim tài liệu đoạt giải
              thưởng và nhiều nội dung khác trên hàng nghìn thiết bị có kết nối
              Internet.
              <br />
              <br />
              Bạn có thể xem bao nhiêu tùy thích, bất cứ lúc nào bạn muốn mà
              không gặp phải một quảng cáo nào tất cả chỉ với một mức giá thấp
              hàng tháng. Luôn có những nội dung mới để bạn khám phá và những
              chương trình truyền hình, phim mới được bổ sung mỗi tuần!
            </span>
          </div>
        </li>
        {/* Tôi phải trả bao nhiêu tiền để xem Netflix? */}
        <li
          onClick={() => setOpenQuest2((preV) => !preV)}
          style={{
            listStyleType: "none",
            textIndent: 0,
            margin: "0 0 0.5rem 0",
          }}
          className="p-0"
        >
          <h3
            style={{
              fontSize: "inherit",
              fontWeight: "inherit",
              marginBottom: "0.0625rem",
              transitionDuration: "250ms",
              transitionTimingFunction: "cubic-bezier(0.9, 0, 0.51, 1)",
            }}
            className=" m-0 d-flex position-relative"
          >
            <button
              style={{
                padding: "1.5rem",
                appearance: "none",
                borderRadius: 0,
                font: "inherit",
                letterSpacing: "inherit",
                lineHeight: "inherit",
                textDecoration: "none",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "inherit",
                width: "100%",
              }}
              className="d-flex flex-row m-0 align-items-center"
              type="button"
            >
              <span
                style={{
                  textAlign: "left",
                }}
                className="col-10"
              >
                Tôi phải trả bao nhiêu tiền để xem Netflix?
              </span>
              <svg
                style={{
                  transform: "rotate(0)",
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                role="img"
                className={`col-3 overflow-hidden flex-shrink-0 ${
                  openQuest2 && "d-none"
                }`}
              >
                <path
                  d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"
                  fill="currentColor"
                ></path>
              </svg>
              <svg
                style={{
                  transform: "rotate(-45deg)",
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                role="img"
                className={`col-3 overflow-hidden ${!openQuest2 && "d-none"}`}
              >
                <path
                  d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </h3>
          <div
            style={{
              maxHeight: "75rem",
              padding: "1.5rem",
              backgroundColor: "rgb(45, 45, 45)",
              marginTop: "1px",
            }}
            className={`overflow-hidden visible text-left ${
              openQuest2 ? "" : "d-none"
            }`}
          >
            <span>
              Xem Netflix trên điện thoại thông minh, máy tính bảng, TV thông
              minh, máy tính xách tay hoặc thiết bị phát trực tuyến, chỉ với một
              khoản phí cố định hàng tháng. Các gói dịch vụ với mức giá từ
              70.000 ₫ đến 260.000 ₫ mỗi tháng. Không phụ phí, không hợp đồng.
            </span>
          </div>
        </li>
        {/* Tôi có thể xem ở đâu? */}
        <li
          onClick={() => setOpenQuest3((preV) => !preV)}
          style={{
            listStyleType: "none",
            textIndent: 0,
            margin: "0 0 0.5rem 0",
          }}
          className="p-0"
        >
          <h3
            style={{
              fontSize: "inherit",
              fontWeight: "inherit",
              marginBottom: "0.0625rem",
              transitionDuration: "250ms",
              transitionTimingFunction: "cubic-bezier(0.9, 0, 0.51, 1)",
            }}
            className=" m-0 d-flex position-relative"
          >
            <button
              style={{
                padding: "1.5rem",
                appearance: "none",
                borderRadius: 0,
                font: "inherit",
                letterSpacing: "inherit",
                lineHeight: "inherit",
                textDecoration: "none",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "inherit",
                width: "100%",
              }}
              className="d-flex flex-row m-0 align-items-center"
              type="button"
            >
              <span
                style={{
                  textAlign: "left",
                }}
                className="col-10"
              >
                Tôi có thể xem ở đâu?
              </span>
              <svg
                style={{
                  transform: "rotate(0)",
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                role="img"
                className={`col-3 overflow-hidden flex-shrink-0 ${
                  openQuest3 && "d-none"
                }`}
              >
                <path
                  d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"
                  fill="currentColor"
                ></path>
              </svg>
              <svg
                style={{
                  transform: "rotate(-45deg)",
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                role="img"
                className={`col-3 overflow-hidden ${!openQuest3 && "d-none"}`}
              >
                <path
                  d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </h3>
          <div
            style={{
              maxHeight: "75rem",
              padding: "1.5rem",
              backgroundColor: "rgb(45, 45, 45)",
              marginTop: "1px",
            }}
            className={`overflow-hidden visible text-left ${
              openQuest3 ? "" : "d-none"
            }`}
          >
            <span>
              Xem mọi lúc, mọi nơi. Đăng nhập bằng tài khoản Netflix của bạn để
              xem ngay trên trang web netflix.com từ máy tính cá nhân, hoặc trên
              bất kỳ thiết bị nào có kết nối Internet và có cài đặt ứng dụng
              Netflix, bao gồm TV thông minh, điện thoại thông minh, máy tính
              bảng, thiết bị phát đa phương tiện trực tuyến và máy chơi game.
              <br />
              <br />
              Bạn cũng có thể tải xuống các chương trình yêu thích bằng ứng dụng
              trên iOS, Android hoặc Windows 10. Vào phần nội dung đã tải xuống
              để xem trong khi di chuyển và khi không có kết nối Internet. Mang
              Netflix theo bạn đến mọi nơi.
            </span>
          </div>
        </li>
        {/* Làm thế nào để hủy? */}
        <li
          onClick={() => setOpenQuest4((preV) => !preV)}
          style={{
            listStyleType: "none",
            textIndent: 0,
            margin: "0 0 0.5rem 0",
          }}
          className="p-0"
        >
          <h3
            style={{
              fontSize: "inherit",
              fontWeight: "inherit",
              marginBottom: "0.0625rem",
              transitionDuration: "250ms",
              transitionTimingFunction: "cubic-bezier(0.9, 0, 0.51, 1)",
            }}
            className=" m-0 d-flex position-relative"
          >
            <button
              style={{
                padding: "1.5rem",
                appearance: "none",
                borderRadius: 0,
                font: "inherit",
                letterSpacing: "inherit",
                lineHeight: "inherit",
                textDecoration: "none",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "inherit",
                width: "100%",
              }}
              className="d-flex flex-row m-0 align-items-center"
              type="button"
            >
              <span
                style={{
                  textAlign: "left",
                }}
                className="col-10"
              >
                Làm thế nào để hủy?
              </span>
              <svg
                style={{
                  transform: "rotate(0)",
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                role="img"
                className={`col-3 overflow-hidden flex-shrink-0 ${
                  openQuest4 && "d-none"
                }`}
              >
                <path
                  d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"
                  fill="currentColor"
                ></path>
              </svg>
              <svg
                style={{
                  transform: "rotate(-45deg)",
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                role="img"
                className={`col-3 overflow-hidden ${!openQuest4 && "d-none"}`}
              >
                <path
                  d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </h3>
          <div
            style={{
              maxHeight: "75rem",
              padding: "1.5rem",
              backgroundColor: "rgb(45, 45, 45)",
              marginTop: "1px",
            }}
            className={`overflow-hidden visible text-left ${
              openQuest4 ? "" : "d-none"
            }`}
          >
            <span>
              Netflix rất linh hoạt. Không có hợp đồng phiền toái, không ràng
              buộc. Bạn có thể dễ dàng hủy tài khoản trực tuyến chỉ trong hai cú
              nhấp chuột. Không mất phí hủy – bạn có thể bắt đầu hoặc ngừng tài
              khoản bất cứ lúc nào.
            </span>
          </div>
        </li>
        {/* Tôi có thể xem gì trên Netflix? */}
        <li
          onClick={() => setOpenQuest5((preV) => !preV)}
          style={{
            listStyleType: "none",
            textIndent: 0,
            margin: "0 0 0.5rem 0",
          }}
          className="p-0"
        >
          <h3
            style={{
              fontSize: "inherit",
              fontWeight: "inherit",
              marginBottom: "0.0625rem",
              transitionDuration: "250ms",
              transitionTimingFunction: "cubic-bezier(0.9, 0, 0.51, 1)",
            }}
            className=" m-0 d-flex position-relative"
          >
            <button
              style={{
                padding: "1.5rem",
                appearance: "none",
                borderRadius: 0,
                font: "inherit",
                letterSpacing: "inherit",
                lineHeight: "inherit",
                textDecoration: "none",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "inherit",
                width: "100%",
              }}
              className="d-flex flex-row m-0 align-items-center"
              type="button"
            >
              <span
                style={{
                  textAlign: "left",
                }}
                className="col-10"
              >
                Tôi có thể xem gì trên Netflix?
              </span>
              <svg
                style={{
                  transform: "rotate(0)",
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                role="img"
                className={`col-3 overflow-hidden flex-shrink-0 ${
                  openQuest5 && "d-none"
                }`}
              >
                <path
                  d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"
                  fill="currentColor"
                ></path>
              </svg>
              <svg
                style={{
                  transform: "rotate(-45deg)",
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                role="img"
                className={`col-3 overflow-hidden ${!openQuest5 && "d-none"}`}
              >
                <path
                  d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </h3>
          <div
            style={{
              maxHeight: "75rem",
              padding: "1.5rem",
              backgroundColor: "rgb(45, 45, 45)",
              marginTop: "1px",
            }}
            className={`overflow-hidden visible text-left ${
              openQuest5 ? "" : "d-none"
            }`}
          >
            <span>
              Netflix có một thư viện phong phú gồm các phim truyện, phim tài
              liệu, chương trình truyền hình, anime, tác phẩm giành giải thưởng
              của Netflix và nhiều nội dung khác. Xem không giới hạn bất cứ lúc
              nào bạn muốn.
            </span>
          </div>
        </li>
        {/* Netflix có phù hợp cho trẻ em không? */}
        <li
          onClick={() => setOpenQuest6((preV) => !preV)}
          style={{
            listStyleType: "none",
            textIndent: 0,
            margin: "0 0 0.5rem 0",
          }}
          className="p-0"
        >
          <h3
            style={{
              fontSize: "inherit",
              fontWeight: "inherit",
              marginBottom: "0.0625rem",
              transitionDuration: "250ms",
              transitionTimingFunction: "cubic-bezier(0.9, 0, 0.51, 1)",
            }}
            className=" m-0 d-flex position-relative"
          >
            <button
              style={{
                padding: "1.5rem",
                appearance: "none",
                borderRadius: 0,
                font: "inherit",
                letterSpacing: "inherit",
                lineHeight: "inherit",
                textDecoration: "none",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "inherit",
                width: "100%",
              }}
              className="d-flex flex-row m-0 align-items-center"
              type="button"
            >
              <span
                style={{
                  textAlign: "left",
                }}
                className="col-10"
              >
                Netflix có phù hợp cho trẻ em không?
              </span>
              <svg
                style={{
                  transform: "rotate(0)",
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                role="img"
                className={`col-3 overflow-hidden flex-shrink-0 ${
                  openQuest6 && "d-none"
                }`}
              >
                <path
                  d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"
                  fill="currentColor"
                ></path>
              </svg>
              <svg
                style={{
                  transform: "rotate(-45deg)",
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                role="img"
                className={`col-3 overflow-hidden ${!openQuest6 && "d-none"}`}
              >
                <path
                  d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </h3>
          <div
            style={{
              maxHeight: "75rem",
              padding: "1.5rem",
              backgroundColor: "rgb(45, 45, 45)",
              marginTop: "1px",
            }}
            className={`overflow-hidden visible text-left ${
              openQuest6 ? "" : "d-none"
            }`}
          >
            <span>
              Trải nghiệm Netflix Trẻ em có sẵn trong gói dịch vụ của bạn, trao
              cho phụ huynh quyền kiểm soát trong khi các em có thể thưởng thức
              các bộ phim và chương trình phù hợp cho gia đình tại không gian
              riêng.
              <br />
              <br />
              Hồ sơ Trẻ em đi kèm tính năng kiểm soát của cha mẹ (được bảo vệ
              bằng mã PIN), cho phép bạn giới hạn độ tuổi cho nội dung con mình
              được phép xem, cũng như chặn những phim hoặc chương trình mà bạn
              không muốn các em nhìn thấy.
            </span>
          </div>
        </li>
      </ul>
      
    </>
  );
};

export default FrequentlyAskedQuestions;
