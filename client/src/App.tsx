import React from "react";
import Home from "./pages/Home/Home.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Profile from "./pages/Profile/Profile.tsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
