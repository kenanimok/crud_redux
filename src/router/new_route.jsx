import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/login/login";
import List_human from "../pages/list_form_human/list_human";

const New_route = () => {
  return (
    <Routes>
      {/* <Route path="/login" element={<Login />} /> */}
      <Route path="/" element={<List_human />} />
    </Routes>
  );
};

export default New_route;
