import axios from "axios";

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

export const loign = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoginFetchingToState());
      const result = await axios.post("/");
    } catch {}
  };
};
