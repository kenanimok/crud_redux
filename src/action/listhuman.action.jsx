import axios from "axios";

const LIST_FETCHING = "LIST_FETCHING";
const LIST_SUCCESS = "LIST_SUCCESS";
const LIST_FAIL = "LIST_FAIL";

export const setListFetchingToState = () => ({
  type: LIST_FETCHING,
});
export const setListSuccessToState = (payload) => ({
  type: LIST_SUCCESS,
  payload,
});

export const setListFailToState = () => ({
  type: LIST_FAIL,
});

export const getDataList = () => {
  return async (dispatch) => {
    const result = await axios.get("https://www.melivecode.com/api/users");
    try {
      dispatch(setListSuccessToState(result.data));
    } catch (error) {
      dispatch(setListFailToState);
    }
  };
};
