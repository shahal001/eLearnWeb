import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import CourseDetail from "./routes/CourseDetail";
import Search from "./routes/Search";
import AdminDashBoard from "./routes/Admin/AdminDashBoard";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/courseDetail" element={<CourseDetail />} />
      <Route path="/search" element={<Search />} />
      <Route path="/admin" element={<AdminDashBoard />} />
    </Routes>
  );
};

export default App;
