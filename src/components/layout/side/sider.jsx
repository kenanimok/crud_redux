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
import { Link } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

function getItem(key, label, icon) {
  return {
    key,
    label,
    icon,
  };
}

const items = [
  getItem(
    "listhuman",
    <Link to="/listhuman">listhuman</Link>,
    <PieChartOutlined />
  ),
  getItem("flag", <Link to="/flag">Flag</Link>, <PieChartOutlined />),
];

const Sider_bar = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className="logo" />
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={items}
      />
    </Sider>
  );
};

export default Sider_bar;
