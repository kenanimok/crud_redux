import styled from "styled-components";

import { v } from "../../styles/variable";

export const SLayout = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`;

export const SMain = styled.main`
  padding: calc(${v.smSpacing} * 2);
  width: 100%;

  h1 {
    font-size: 14px;
  }
`;
