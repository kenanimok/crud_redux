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
  console.log("use", user);

  return (dispatch) => {
    axios.post("https://www.melivecode.com/api/login", user).then((res) => {
      // console.log("rerserse", res.data.accessToken);
      dispatch(setLoginSuccessToState(res.data));
      if (res.data.status === "ok") {
        localStorage.setItem("token", res.data.accessToken);

        navigate("/listhuman");
      }
    });
  };
};

export const restoreLogin = (navigate) => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    console.log("tttt", token);
    if (token) {
      dispatch(
        setLoginSuccessToState({
          result: "ok",
          token,
          message: "Login successfully",
        })
      );
    } else {
      navigate("/login");
    }
  };
};

export const logout = (navigate) => {
  return (dispatch) => {
    localStorage.removeItem("token");
    dispatch(setLogoutToState());
    alert("Logout successfully");
    navigate("/login");
  };
};
