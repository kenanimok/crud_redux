import React from "react";
import { Routes, Route } from "react-router-dom";
import List_human from "../pages/list_form_human/list_human";
import Login from "../pages/login/login";
import testRoute from "../testRoute";

const NewRoute = () => {
  return (
    <Routes>
      <Route path="/listhuman" element={<List_human />} />
      <Route path="/testroute" element={<testRoute />} />
    </Routes>
  );
};

export default NewRoute;
