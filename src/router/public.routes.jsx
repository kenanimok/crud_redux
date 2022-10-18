import React from "react";
import { store } from "../main";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
  const auth = store.getState().loginReducer.result;
  console.log("auth_public", auth);
  return auth ? <Navigate to="/listhuman" /> : <Outlet />;
};

export default PublicRoutes;
