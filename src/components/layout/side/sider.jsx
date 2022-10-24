import React, { useState } from "react";
import { SSidebar, SSidebarButton } from "./sider_style";
import {
  AiOutlineApartment,
  AiOutlineHome,
  AiOutlineLeft,
  AiOutlineSearch,
  AiOutlineSetting,
} from "react-icons/ai";
const Sider_bar = (props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
    </SSidebar>
  );
};

export default Sider_bar;
