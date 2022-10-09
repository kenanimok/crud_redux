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

const Login = () => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const jsondata = {
      username: username,
      password: password,
    };
    axios.post(`https://www.melivecode.com/api/login`, jsondata).then((res) => {
      // console.log("object :>> ", res.data.accessToken);

      if (res.status === 200) {
        localStorage.setItem("token", res.data.accessToken);
        // console.log("tototototo", localStorage.getItem("token"));
        Swal.fire("Good job!", "You clicked the button!", "success");
        navigate("/listform");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="">Why do I have this issue?</a>',
        });
      }
    });
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
