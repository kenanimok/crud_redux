const initialState = {
  isFetching: false,
  isError: false,
  result: null,
};

export default (state = initialState, { type, payload }) => {
  const HUMAN_FETCHING = "HUMAN_FETCHING";
  const HUMAN_FAIL = "HUMAN_FAIL";
  const HUMAN_SUCCESS = "HUMAN_SUCCESS";

  switch (type) {
    case HUMAN_FETCHING:
      return { ...state, isFetching: true, isError: false, result: null };
    case HUMAN_SUCCESS:
      return { ...state, isFetching: false, isError: false, result: payload };
    case HUMAN_FAIL:
      return { ...state, isFetching: false, isError: true, result: null };
    default:
      return state;
  }
};
