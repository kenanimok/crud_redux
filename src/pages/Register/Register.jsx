import React from "react";
import styled from "styled-components";
const Register = () => {
  return (
    <Container>
      <div className="left">asd</div>
      <div className="right">asda</div>
    </Container>
  );
};

export default Register;
const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr, 50%;
  height: 100vh;

  .left {
    background-color: red;
  }

  .right {
    background-color: blue;
  }
`;
