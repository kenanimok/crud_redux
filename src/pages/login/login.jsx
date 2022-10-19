// import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Body,
  ButtonResgis,
  Container,
  InputCustom,
  Label,
} from "./login.style";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import * as loginActions from "../../action/login.action";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const jsondata = {
      username: username,
      password: password,
    };

    dispatch(loginActions.loign(jsondata, navigate));
  };

  return (
    <Body>
      <Container>
        <div className="left">
          <h1 className="welcome">Welcome</h1>
        </div>
        <div className="right">
          <h1 className="login">LogIn</h1>

          <form onSubmit={handleSubmit}>
            <InputCustom
              type="text"
              name="username"
              onChange={(e) => setUserName(e.target.value)}
            ></InputCustom>
            <Label>email</Label>

            <InputCustom
              type="text"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            ></InputCustom>
            <Label>password</Label>

            <InputCustom
              type="submit"
              style={{ background: " #3a50e0", color: "white", border: "none" }}
            ></InputCustom>
            <RegisterL
              style={{ background: " #3a50e0", color: "white", border: "none" }}
              to="/register"
            >
              Register
            </RegisterL>
          </form>
        </div>
      </Container>
    </Body>
  );
};

export default Login;
const RegisterL = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  width: 60%;
  height: 50px;
  border: solid #999 1px;
  border-radius: 5px;
  text-indent: 15px;
  transition: all 200ms;
  box-shadow: var(--box-shadow);
  font-size: 18px;
  background-color: " #3a50e0";
  color: "white";

  :focus {
    width: 70%;
  }
`;
