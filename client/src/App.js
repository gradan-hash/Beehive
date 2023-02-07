import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./admin/uploading/dashboard.jsx";

import Home from "./home.jsx";
import Login from "./login.jsx";
import Register from "./register.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
