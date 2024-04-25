import React from "react";

const FooterHome = () => {
  return (
    <>
      <footer
        style={{
          paddingLeft: "2rem",
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
            ></div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterHome;
