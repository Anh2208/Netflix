import React from "react";
import Home from "./pages/Home/Home.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Profile from "./pages/Profile/Profile.tsx";
import Login from "./pages/login/Login.tsx";
import Register from "./pages/register/Register.tsx";
import Dashboard from "./components/Navbar/Dashboard.tsx";
import UserList from "./components/Navbar/UserList.tsx";
import Categories from "./components/Navbar/Categories.tsx";
import MoviesList from "./components/Navbar/MoviesList.tsx";
import MyList from "./components/Navbar/MyList.tsx";
import AddMovie from "./components/Navbar/AddMovie.tsx";
import ChangePassword from "./components/Navbar/ChangePassword.tsx";
import Layout from "./components/Layout/Layout.tsx";

function App() {
  return (
    <>
      {/* <Router>
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
          <Route path="/changpassword" element={<ChangePassword />} />
        </Routes>
      </Router> */}
      <Layout />
    </>
  );
}

export default App;
