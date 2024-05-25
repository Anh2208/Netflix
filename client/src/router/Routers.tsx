import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home.tsx";
import Profile from "../pages/Profile/Profile.tsx";
import Login from "../pages/login/Login.tsx";
import Register from "../pages/register/Register.tsx";
import Dashboard from "../components/Navbar/Dashboard.tsx";
import UserList from "../components/Navbar/UserList.tsx";
import Categories from "../components/Navbar/Categories.tsx";
import MoviesList from "../components/Navbar/MoviesList.tsx";
import AddMovie from "../components/Navbar/AddMovie.tsx";
import MyList from "../components/Navbar/MyList.tsx";
import ChangePassword from "../components/Navbar/ChangePassword.tsx";

const Routers = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/userlist" element={<UserList />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/movielist" element={<MoviesList />} />
          <Route path="/addmovie" element={<AddMovie />} />
          <Route path="/mylist" element={<MyList />} />
          <Route path="/changepassword" element={<ChangePassword />} />
        </Routes>
      </Router>
    </>
  );
};

export default Routers;
