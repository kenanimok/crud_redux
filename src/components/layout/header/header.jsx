import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import React, { useState } from "react";
const { Header, Content, Footer, Sider } = Layout;

const Header_bar = () => {
  return (
    <Header
      className="site-layout-background"
      style={{
        padding: 0,
        backgroundColor: "white",
      }}
    >
      Header
    </Header>
  );
};

export default Header_bar;
