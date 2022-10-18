import { useEffect } from "react";
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
import Filter_flag from "./pages/flag/fil_flag";
import Flag_ from "./pages/flag/flag_";
function App() {
  // const dispatch = useDispatch();
  // const loginReducer = useSelector((state) => state.loginReducer);
  // useEffect(() => {
  //   dispatch(loginActions.restore);
  // }, []);
  return (
    <Routes>
      <Route path="/" element={<PublicRoutes />}>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Route>

      <Route path="/" element={<ProtectedRoutes />}>
        <Route path="/listhuman" element={<List_human />} />
        <Route path="/create" element={<CreateHuman />} />
        <Route path="/edit/:id" element={<Edit_human />} />
        <Route path="/flag" element={<Flag_ />} />
      </Route>
    </Routes>
  );
}

export default App;
