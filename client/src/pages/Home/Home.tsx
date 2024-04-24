import React from "react";
import Header from "../../components/Home/Home.tsx";

const Home = () => {
  return (
    <div className="home_container">
      <div className="netflix-sans-font-loaded">
        <div data-uia="loc" lang="vi" dir="ltr">
          <Header />
        </div>
      </div>
    </div>
  );
};

export default Home;
