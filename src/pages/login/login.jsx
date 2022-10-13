// import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
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
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            ></InputCustom>
            <Label>password</Label>

            <InputCustom
              type="submit"
              style={{ background: " #df98fa", color: "white", border: "none" }}
            ></InputCustom>
            {/* <ButtonResgis>kkk</ButtonResgis> */}
          </form>
        </div>
      </Container>
    </Body>
  );
};

export default Login;
