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
const { Header, Content, Footer, Sider } = Layout;

// function getItem(key, label, icon) {
//   return {
//     key,
//     label,
//     icon,
//   };
// }

// const items = [
//   getItem("xxx", <Link to="/vv" />, <PieChartOutlined />),
//   getItem("Option 2", "2", <DesktopOutlined />),
//   getItem("User", "sub1", <UserOutlined />, [
//     getItem("Tom", "3"),
//     getItem("Bill", "4"),
//     getItem("Alex", "5"),
//   ]),
//   getItem("Team", "sub2", <TeamOutlined />, [
//     getItem("Team 1", "6"),
//     getItem("Team 2", "8"),
//   ]),
//   getItem("Files", "9", <FileOutlined />),
// ];

const Corelayout = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
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
