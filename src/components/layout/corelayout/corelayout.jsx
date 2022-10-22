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
import { SLayout, SMain } from "./corelayout.stye";

const Corelayout = ({ children }) => {
  return (
    <SLayout>
      {/* <Sidebar /> */}
      <SMain>{children}</SMain>
    </SLayout>
  );
};

export default Corelayout;
