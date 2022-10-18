import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, Button } from "antd";
import { useSelector } from "react-redux";
import React, { useState } from "react";
import Flag_ from "../../../pages/flag/flag_";
import { useNavigate, useNavigation } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as loginActions from "../../../action/login.action";
const { Header, Content, Footer, Sider } = Layout;

const Header_bar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const humanlistReducer = useSelector((state) => state.listhumanReducer);
  // console.log("humanlistReducer :>> ", humanlistReducer);

  // useEffect(() => {}, []);

  return (
    <Header
      className="site-layout-background"
      style={{
        padding: 0,
        backgroundColor: "white",
      }}
    >
      {/* <Button onClick={logout}>logou</Button> */}
      {/* <Button onClick={dispatch(loginActions.logout(navigate))}>logout</Button> */}
    </Header>
  );
};

export default Header_bar;
