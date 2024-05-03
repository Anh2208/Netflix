import React from "react";
import "./Home.css";
import FrequentlyAskedQuestions from "./frequentlyAskedQuestions.tsx";
import FormInputEmail from "./formInputEmail.tsx";
import FooterHome from "./footerHome.tsx";
import CardHome from "./cardHome.tsx";
import HeaderHome from "./headerHome.tsx";
import PosterHome from "./posterHome.tsx";
const Header = () => {
  return (
    <>
      <div
        style={{ zIndex: 1, height: 0 }}
        className="overflow-visible position-relative"
      >
        <HeaderHome />
      </div>

      {/* main poster */}
      <div>
        {/* poster */}
        <PosterHome />
        <CardHome />
        {/* Câu hỏi thường gặp */}
        <div
          style={{
            minHeight: "auto",
            padding: "4.5rem 0",
            color: "rgb(255,255,255)",
          }}
          className=" position-relative d-flex justify-content-center h-100"
        >
          <div
            style={{
              margin: "auto",
            }}
            className="div-maxWidth d-flex flex-column align-items-center w-100"
          >
            <div
              style={{
                flexBasis: "50%",
                zIndex: 1,
              }}
              className="p-0 w-100"
            >
              <h2
                style={{
                  fontSize: "3rem",
                  fontWeight: 900,
                }}
                className="margin-0 text-center"
              >
                Câu hỏi thường gặp
              </h2>
              <div
                style={{
                  margin: "1.5rem 0 0",
                }}
              >
                <FrequentlyAskedQuestions />
                <div
                  style={{
                    marginTop: "2.85rem",
                  }}
                >
                  <div
                    style={{
                      content: "2",
                      padding: "0 2rem",
                      maxWidth: "61.5rem",
                      margin: "0 auto",
                    }}
                    className="text-center"
                  >
                    <FormInputEmail />
                  </div>
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
      </div>

      {/* footer */}
      <FooterHome />
    </>
  );
};

export default Header;
