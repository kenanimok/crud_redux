import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
  getItem(
    "summaryuser",
    <Link to="/summaryuser">summaryuser</Link>,
    <PieChartOutlined />
  ),
];

const Sider_bar = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className="logo" />

      <MenuCustom>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </MenuCustom>
    </Sider>
  );
};

export default Sider_bar;

const MenuCustom = styled.div`
  .ant-menu-dark.ant-menu-inline .ant-menu-item {
    left: 0;
    margin-left: 0;
    border-right: 0;
    height: 70px;
  }
  .ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal)
    .ant-menu-item-selected {
    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.2);
    /* border-radius: 16px; */
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
`;
