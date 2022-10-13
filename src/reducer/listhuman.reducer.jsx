const initialState = {
  isFetching: false,
  isError: false,
  result: null,
};

export default (state = initialState, { type, payload }) => {
  const LIST_FETCHING = "LIST_FETCHING";
  const LIST_SUCCESS = "LIST_SUCCESS";
  const LIST_FAIL = "LIST_FAIL";

  switch (type) {
    case LIST_FETCHING:
      return { ...state, isFetching: true, isError: false, result: null };
    case LIST_SUCCESS:
      return { ...state, isFetching: false, isError: false, result: payload };
    case LIST_FAIL:
      return { ...state, isFetching: false, isError: true, result: null };
    default:
      return state;
  }
};
