import React from "react";
import { Outlet, Navigate } from "react-router-dom";
const Privateroute = () => {
  const auth = store.getState().loginReducer.result;
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default Privateroute;
