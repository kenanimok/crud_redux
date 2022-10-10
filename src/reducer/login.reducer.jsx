const initialState = {
  isFetching: false,
  isError: false,
  result: null,
};

export default (state = initialState, { type, payload }) => {
  console.log("ttttype", type);
  console.log("pay", payload);
  const LOGIN_FETCHING = "LOGIN_FETCHING";
  const LOGIN_FAILED = "LOGIN_FAILED";
  const LOGIN_SUCCESS = "LOGIN_SUCCESS";
  const LOGOUT = "LOGOUT";

  switch (type) {
    case LOGIN_FETCHING:
      return { ...state, isFetching: true, isError: false, result: null };
    case LOGIN_SUCCESS:
      return { ...state, isFetching: false, isError: false, result: payload };
    case LOGIN_FAILED:
      return { ...state, isFetching: false, isError: true, result: null };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};
