import axios from "axios";

const HUMAN_FETCHING = "HUMAN_FETCHING";
const HUMAN_FAIL = "HUMAN_FAIL";
const HUMAN_SUCCESS = "HUMAN_SUCCESS";

export const setHumanFetchingToState = () => ({
  type: HUMAN_FETCHING,
});

export const setHumanSuccessToState = (payload) =>
  console.log(
    "action",
    payload
  )({
    type: HUMAN_SUCCESS,
    payload,
  });

export const setHumanFailToState = () => ({
  type: HUMAN_FAIL,
});

export const AddHuman = (data) => {
  console.log("action_____data", data);
  return async (dispatch) => {
    await axios.post("https://www.melivecode.com/api/users/create", data);
    history.back();
  };
};
