import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { store } from "../main";

const ProtectedRoutes = () => {
  const auth = store.getState().loginReducer.result;
  console.log("auththth", auth);

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
