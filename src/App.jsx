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

function App() {
  // const loginReducer = useSelector((state) => state.loginReducer);
  // useEffect(() => {}, []);
  return (
    // <Corelayout>
    //   <Routes>
    //     <Route exact path="listform" element={<List_human />} />
    //     <Route exact path="xxx" element={<Xxx />} />
    //     <Route exact path="/" element={<Login />} />
    //   </Routes>
    // </Corelayout>
    <Routes>
      <Route exact path="listform" element={<List_human />} />
      <Route exact path="xxx" element={<Xxx />} />
      <Route exact path="/" element={<Login />} />
    </Routes>
  );
}

export default App;
