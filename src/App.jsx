import React from "react";
import { useEffect, useState } from "react";
import Login from "./pages/login/login";
import "./main.css";
import {
  BrowserRouter,
  Route,
  Routes,
  useNavigate,
  Navigate,
} from "react-router-dom";
import List_human from "./pages/list_form_human/list_human";
import Sider_bar from "./components/layout/side/sider";
import Header_bar from "./components/layout/header/header";
import Corelayout from "./components/layout/corelayout/corelayout";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import * as loginActions from "./action/login.action";
import { rootReducer } from "./reducer";
import CreateHuman from "./pages/list_form_human/create_human";
import Edit_human from "./pages/list_form_human/edit_human";
import PublicRoutes from "./router/public.routes";
import ProtectedRoutes from "./router/protected.routes";
import Flag_ from "./pages/flag/flag_";
import Privateroute from "./router/private.route";
import Allroute from "./router/allroute";
import Side_nav from "./pages/side_nav/side_nav";
import Register from "./pages/Register/Register";

import { ThemeProvider } from "styled-components";

function App() {
  const navigate = useNavigate();
  const Loginuser = useSelector((state) => state.loginActions);

  console.log("Loginuser :>> ", Loginuser);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loginActions.restoreLogin(navigate));
  }, []);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/listhuman" element={<List_human />} />
      <Route path="/create" element={<CreateHuman />} />
      <Route path="/edit/:id" element={<Edit_human />} />
      <Route path="/flag" element={<Flag_ />} />
      <Route path="/nav" element={<Side_nav />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;

//private route
// <Routes>
//   <Route path="/" element={<PublicRoutes />}>
//     <Route path="/login" element={<Login />} />
//     <Route path="/" element={<Navigate to="/login" />} />
//   </Route>

//   <Route path="/" element={<ProtectedRoutes />}>
//     <Route path="/listhuman" element={<List_human />} />
//     <Route path="/create" element={<CreateHuman />} />
//     <Route path="/edit/:id" element={<Edit_human />} />
//     <Route path="/flag" element={<Flag_ />} />
//   </Route>
// </Routes>
