import { useEffect } from "react";
import Login from "./pages/login/login";
import "./main.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import List_human from "./pages/list_form_human/list_human";
import Sider_bar from "./components/layout/side/sider";
import Header_bar from "./components/layout/header/header";
import Corelayout from "./components/layout/corelayout/corelayout";
import { useSelector } from "react-redux";
import Xxx from "./pages/xxx";
import PublicRoutes from "./router/public.routes";
import ProtectedRoutes from "./router/protected.routes";
import { useDispatch } from "react-redux";
import * as loginActions from "./action/login.action";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loginActions.restore);
  }, []);
  return (
    <Routes>
      <Route path="/" element={<PublicRoutes />}>
        <Route exact path="/" element={<Login />} />
      </Route>

      <Route path="/" element={<ProtectedRoutes />}>
        <Route exact path="xxx" element={<Xxx />} />
      </Route>
    </Routes>
  );
}

export default App;
