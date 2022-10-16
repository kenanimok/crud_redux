import { useEffect } from "react";
import Login from "./pages/login/login";
import "./main.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
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
function App() {
  // const dispatch = useDispatch();
  // const loginReducer = useSelector((state) => state.loginReducer);
  // useEffect(() => {
  //   dispatch(loginActions.restore);
  // }, []);
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/listhuman" element={<List_human />} />
      <Route path="/create" element={<CreateHuman />} />
      <Route path="/edit/:id" element={<Edit_human />} />
    </Routes>
  );
}

export default App;
