import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import { useSelector } from "react-redux";
import React, { useState } from "react";
import Flag_ from "../../../pages/flag/flag_";
const { Header, Content, Footer, Sider } = Layout;

const Header_bar = () => {
  const humanlistReducer = useSelector((state) => state.listhumanReducer);

  return (
    <Header
      className="site-layout-background"
      style={{
        padding: 0,
        backgroundColor: "white",
      }}
    >
      <img src={""} alt="" />
    </Header>
  );
};

export default Header_bar;
