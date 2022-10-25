import React, { useState, useRef, useContext } from "react";
import {
  SSidebar,
  SSidebarButton,
  SLogo,
  SSearch,
  SSearchIcon,
  SDivider,
  SLinkContainer,
  SLink,
  SLinkLabel,
  SLinkIcon,
  STheme,
  SThemeLabel,
  SThemeToggler,
  SToggleThumb,
} from "./sider_style";
import {
  AiOutlineApartment,
  AiOutlineHome,
  AiOutlineLeft,
  AiOutlineSearch,
  AiOutlineSetting,
} from "react-icons/ai";
import { ThemeContext } from "../../../App";
import { MdLogout, MdOutlineAnalytics } from "react-icons/md";
import { useLocation } from "react-router-dom";

const Sider_bar = (props) => {
  const { setTheme, theme } = useContext(ThemeContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const searchRef = useRef(null);
  const { pathname } = useLocation();

  const searchClickHandler = () => {
    if (!sidebarOpen) {
      setSidebarOpen(true);
      searchRef.current.focus();
    } else {
      // search functionality
    }
  };
  const linksArray = [
    {
      label: "Home",
      icon: <AiOutlineHome />,
      to: "/",
      notification: 0,
    },
    {
      label: "Dashboard",
      icon: <MdOutlineAnalytics />,
      to: "/Dashboard",
      notification: 3,
    },

    {
      label: "Diagrams",
      icon: <AiOutlineApartment />,
      to: "/diagrams",
      notification: 1,
    },
  ];

  const secondaryLinksArray = [
    {
      label: "Settings",
      icon: <AiOutlineSetting />,
    },
    {
      label: "Logout",
      icon: <MdLogout />,
    },
  ];

  return (
    <SSidebar isOpen={sidebarOpen}>
      <>
        <SSidebarButton
          isOpen={sidebarOpen}
          onClick={() => setSidebarOpen((p) => !p)}
        >
          <AiOutlineLeft />
        </SSidebarButton>
      </>

      <SLogo>
        {/* <img
          src={
            "https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo.png"
          }
          alt="logo"
        /> */}
      </SLogo>

      <SSearch
        onClick={searchClickHandler}
        style={!sidebarOpen ? { width: `fit-content` } : {}}
      >
        <SSearchIcon>
          <AiOutlineSearch />
        </SSearchIcon>
        <input
          ref={searchRef}
          placeholder="Search"
          style={!sidebarOpen ? { width: 0, padding: 0 } : {}}
        />
      </SSearch>

      <SDivider />
      {linksArray.map(({ icon, label, notification, to }) => (
        <SLinkContainer key={label} isActive={pathname === to}>
          <SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
            <SLinkIcon>{icon}</SLinkIcon>
            {sidebarOpen && (
              <>
                <SLinkLabel>{label}</SLinkLabel>
                {/* if notifications are at 0 or null, do not display */}
                {/* {!!notification && (
                  <SLinkNotification>{notification}</SLinkNotification>
                )} */}
              </>
            )}
          </SLink>
        </SLinkContainer>
      ))}
      <SDivider />
      {secondaryLinksArray.map(({ icon, label }) => (
        <SLinkContainer key={label}>
          <SLink to="/" style={!sidebarOpen ? { width: `fit-content` } : {}}>
            <SLinkIcon>{icon}</SLinkIcon>
            {sidebarOpen && <SLinkLabel>{label}</SLinkLabel>}
          </SLink>
        </SLinkContainer>
      ))}
      <SDivider />

      <STheme>
        {sidebarOpen && <SThemeLabel>Darkmode </SThemeLabel>}
        <SThemeToggler
          isActive={theme === "dark"}
          onClick={() => setTheme((p) => (p === "light" ? "dark" : "light"))}
        >
          <SToggleThumb style={theme === "dark" ? { right: "1px" } : {}} />
        </SThemeToggler>
      </STheme>
    </SSidebar>
  );
};

export default Sider_bar;
