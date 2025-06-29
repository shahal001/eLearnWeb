import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Signup from "./routes/Signup";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default App;
