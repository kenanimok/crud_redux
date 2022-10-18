import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/login/login";
import Privateroute from "./private.route";
import List_human from "../pages/list_form_human/list_human";

const Allroute = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Privateroute path="/listhuman" element={<List_human />} />
    </Routes>
  );
};

export default Allroute;
