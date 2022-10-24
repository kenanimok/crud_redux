import React, { useState } from "react";

import { SLayout, SMain } from "./corelayout.stye";
import Sider_bar from "../side/sider";
const Corelayout = ({ children }) => {
  return (
    <SLayout>
      <Sider_bar />
      <SMain>{children}</SMain>
    </SLayout>
  );
};

export default Corelayout;
