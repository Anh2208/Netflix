import React from "react";
import FormInputEmail from "./formInputEmail.tsx";

const PosterHome = () => {
  return (
    <>
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
                <FormInputEmail />
              </div>
              <div className="center-pixel default-ltr-cache-1qms9jn ekwtkbw0"></div>
            </div>
          </div>
          <div className="default-ltr-cache-vgp0nn e9eyrqp3"></div>
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

export default PosterHome;
