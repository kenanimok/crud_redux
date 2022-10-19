import React from "react";
import styled from "styled-components";
import { css } from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Side_nav = () => {
  // const [sidebarOpen, setSidebarOpen] = useState({ islogin: true });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation();

  console.log("sidebarOpen :>> ", sidebarOpen);

  const searchClickHandler = () => {
    if (!sidebarOpen) {
      setSidebarOpen(true);
      searchRef.current.focus();
    } else {
      // search functionality
    }
  };

  return (
    // <Bodycon>
    <SSidebar isOpen={sidebarOpen}>
      {/* <button onClick={searchClickHandler}>click</button> */}

      <SSidebarButton
        isOpen={sidebarOpen}
        onClick={() => setSidebarOpen((p) => !p)}
      >
        <p>icon</p>
      </SSidebarButton>

      <SLogo>
        <img
          src={
            "https://www.edigitalagency.com.au/wp-content/uploads/Twitter-logo-png.png"
          }
          alt="logo"
        />
      </SLogo>
      <SSearch
        onClick={searchClickHandler}
        style={!sidebarOpen ? { width: `fit-content` } : {}}
      >
        {/* <SSearchIcon>
            <AiOutlineSearch />
          </SSearchIcon> */}
        <p>search icon</p>
        {/* <input
            ref={searchRef}
            placeholder="Search"
            style={!sidebarOpen ? { width: 0, padding: 0 } : {}}
          /> */}
      </SSearch>
      <SDivider>
        {linksArray.map(({ label, to }) => (
          <SLinkContainer key={label} isActive={pathname === to}>
            <SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
              <SLinkIcon>{"icon"}</SLinkIcon>
              {sidebarOpen && (
                <>
                  <SLinkLabel>{label}</SLinkLabel>
                  {/* {!!notification && (
                      <SLinkNotification>{notification}</SLinkNotification>
                    )} */}
                </>
              )}
            </SLink>
          </SLinkContainer>
        ))}
      </SDivider>
    </SSidebar>
    // </Bodycon>
  );
};

const linksArray = [
  {
    label: "Home",
    // icon: <AiOutlineHome />,
    to: "/",
    notification: 0,
  },
  {
    label: "listhuman",
    // icon: <MdOutlineAnalytics />,
    to: "/listhuman",
    notification: 3,
  },
  {
    label: "create",
    // icon: <BsPeople />,
    to: "/create",
    notification: 0,
  },
];

export default Side_nav;

export const Bodycon = styled.div`
  background: rgba(235, 19, 19, 0.3);
  /* color: ${({ theme }) => theme.text}; */
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.6px;
`;

export const v = {
  sidebarWidth: `300px`,
  smSpacing: `8px`,
  mdSpacing: `16px`,
  lgSpacing: `24px`,
  xlSpacing: `32px`,
  xxlSpacing: `48px`,
  borderRadius: `6px`,
};

const btnReset = css`
  font-family: inherit;
  outline: none;
  border: none;
  background: none;
  letter-spacing: inherit;
  color: inherit;
  font-size: inherit;
  text-align: inherit;
  padding: 0;
`;

export const theme = {
  bg: "rgb(255,255,255)",
  bgAlpha: "rgba(250,250,250,.3)",
  bg2: "rgb(245,245,245)",
  bg3: "rgb(230,230,230)",
  text: "rgb(45,45,45)",
  primary: "rgb(52, 131, 235)",
};

export const SSidebar = styled.div`
  ${theme};
  ${v};

  width: ${({ isOpen }) => (!isOpen ? `100px` : "300px")};
  background: ${theme.bg};
  height: 100vh;
  padding: ${v.lgSpacing};

  position: relative;
`;

export const SSidebarButton = styled.button`
  ${btnReset};
  position: absolute;
  top: ${v.xxlSpacing};
  right: ${({ isOpen }) => (isOpen ? `-16px` : `-40px`)};
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({ theme }) => theme.bg};
  box-shadow: 0 0 4px ${({ theme }) => theme.bg3},
    0 0 7px ${({ theme }) => theme.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  transform: ${({ isOpen }) => (!isOpen ? `rotate(180deg)` : `initial`)};
`;

export const SSearch = styled.div`
  ${theme};
  ${v};

  background: ${theme.bgAlpha};
  border: 1px solid ${theme.bg3};
  border-radius: ${v.borderRadius};
  input {
    padding: 0 ${v.smSpacing};
    font-family: inherit;
    letter-spacing: inherit;
    font-size: 16px;
    width: 100%;
    outline: none;
    border: none;
    color: inherit;
    background: transparent;
  }
  display: flex;
`;

export const SDivider = styled.div`
  ${theme};
  ${v};
  height: 1px;
  width: 100%;
  background: ${theme.bg3};
  margin: ${v.lgSpacing} 0;
`;

export const SLogo = styled.div`
  ${v};
  width: 52px;

  img {
    max-width: 100%;
    height: auto;
  }
  cursor: pointer;

  margin-bottom: ${v.lgSpacing};
`;

export const SLinkContainer = styled.div`
  ${theme};

  /* background: ${theme.bg3}; */

  background: ${({ theme, isActive }) =>
    !isActive ? `transparent` : theme.bg3};

  border-radius: ${v.borderRadius};
  margin: 8px 0;

  :hover {
    box-shadow: inset 0 0 0 1px ${theme.bg3};
    /* background-color: red; */
  }
`;
export const SLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  font-size: 16px;
  padding: calc(${v.smSpacing} - 2px) 0;
`;

export const SLinkIcon = styled.div`
  ${v};
  padding: ${v.smSpacing} ${v.mdSpacing};
  display: flex;

  svg {
    font-size: 20px;
  }
`;

export const SLinkLabel = styled.span`
  ${v};
  display: block;
  flex: 1;
  margin-left: ${v.smSpacing};
`;
