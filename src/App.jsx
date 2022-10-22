import React from "react";
import { useEffect, useState, createContext } from "react";

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

import Flag_ from "./pages/flag/flag_";
import Side_nav from "./pages/side_nav/side_nav";
import Register from "./pages/Register/Register";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/styles/theme";
import { GlobalStyle } from "./components/styles/globalStyle";
import NewRoute from "./router/newrout";
import Route_hom from "./router/route_hom";
import TestRoute from "./testRoute";
export const ThemeContext = createContext();

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [token, setToken] = useState(localStorage.getItem("token"));
  console.log("checkToken :>> ", token);

  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? lightTheme : darkTheme;

  useEffect(() => {
    // dispatch(loginActions.restoreLogin(navigate));
    ken();
  }, []);

  const ken = () => {
    if (token !== undefined || token !== null) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      {ken ? (
        <Routes>
          <Route path="/xxx" element={<TestRoute />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      )}
    </>
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
