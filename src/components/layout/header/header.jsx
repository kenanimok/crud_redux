import React, { useState } from "react";
import { Breadcrumb, Layout, Menu, Button } from "antd";
import { useNavigate, useNavigation } from "react-router-dom";
import { useDispatch } from "react-redux";
const { Header, Content, Footer, Sider } = Layout;

const Header_bar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Header
      className="site-layout-background"
      style={{
        padding: 0,
        backgroundColor: "#f0f2f5",
      }}
    ></Header>
  );
};

export default Header_bar;
