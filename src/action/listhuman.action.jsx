import React from "react";
import axios from "axios";
import { Card } from "antd";

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

export const getDataList = (current) => {
  // console.log("current :>> ", current);
  return async (dispatch) => {
    // const result = await axios.get("https://www.melivecode.com/api/users");
    const result = await axios.get(
      `      https://www.melivecode.com/api/users?page=${current}&per_page=5  
      `
    );

    try {
      dispatch(setListSuccessToState(result.data));
    } catch (error) {
      dispatch(setListFailToState);
    }
  };
};

// export const deleteData = (data) => {
//   console.log("delte_para", data);
//   return async (dispatch) => {
//     await axios.delete("https://www.melivecode.com/api/users/delete", data);
//     // await getDataList(dispatch);
//   };
// };
