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
  return (
    <Header
      className="site-layout-background"
      style={{
        padding: 0,
        backgroundColor: "white",
      }}
    ></Header>
  );
};

export default Header_bar;
