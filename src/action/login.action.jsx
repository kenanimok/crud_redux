import axios from "axios";
import { useDispatch } from "react-redux";

const LOGIN_FETCHING = "LOGIN_FETCHING";
const LOGIN_FAILED = "LOGIN_FAILED";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";

export const setLoginFetchingToState = () => ({
  type: LOGIN_FETCHING,
});

export const setLoginSuccessToState = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const setLoginFailedToState = () => ({
  type: LOGIN_FAILED,
});

export const setLogoutToState = () => ({
  type: LOGOUT,
});

export const loign = (user, navigate) => {
  // console.log("use", user);

  return (dispatch) => {
    axios.post("https://www.melivecode.com/api/login", user).then((res) => {
      console.log("rerserse", res.data);
      dispatch(setLoginSuccessToState(res.data));
      if (res.data.status === "ok") {
        navigate("/xxx");
        localStorage.setItem("token", res.data.acceessToken);
      }
    });
  };
};

export const restore = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(
        setLoginSuccessToState({
          result: "ok",
          token,
          message: "Login successfully",
        })
      );
    }
  };
};
