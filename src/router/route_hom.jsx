import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/login/login";

const Route_hom = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Route_hom;
