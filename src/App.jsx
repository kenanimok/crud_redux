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
import { useDispatch } from "react-redux";
import * as loginActions from "./action/login.action";
import CreateHuman from "./pages/list_form_human/create_human";
import Edit_human from "./pages/list_form_human/edit_human";
import PublicRoutes from "./router/public.routes";
import Flag_ from "./pages/flag/flag_";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loginActions.restoreLogin);
  }, []);
  return (
    <Routes>
      <Route path="/" element={<PublicRoutes />}>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/listhuman" element={<List_human />} />
        <Route path="/create" element={<CreateHuman />} />
        <Route path="/edit/:id" element={<Edit_human />} />
        <Route path="/flag" element={<Flag_ />} />
      </Route>
    </Routes>
  );
}

export default App;
