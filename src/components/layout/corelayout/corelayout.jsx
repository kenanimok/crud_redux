import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import React, { useState } from "react";
import Header_bar from "../header/header";
import Sider_bar from "../side/sider";
import { Link } from "react-router-dom";
import Side_nav from "../../../pages/side_nav/side_nav";
const { Header, Content, Footer, Sider } = Layout;

const Corelayout = (props) => {
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      {/* <Side_nav /> */}
      <Sider_bar />

      <Layout className="site-layout">
        <Header_bar />
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Corelayout;
