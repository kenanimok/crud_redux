import axios from "axios";

const HUMAN_FETCHING = "HUMAN_FETCHING";
const HUMAN_FAIL = "HUMAN_FAIL";
const HUMAN_SUCCESS = "HUMAN_SUCCESS";

export const setStockFetchingToState = () => ({
  type: HUMAN_FETCHING,
});

export const setStockSuccessToState = (payload) => ({
  type: HUMAN_SUCCESS,
  payload,
});

export const setStockFailedToState = () => ({
  type: HUMAN_FAIL,
});

//   export const updateProduct = (formData) => {
//     return async (dispatch) => {
//       await httpClient.put(server.PRODUCT_URL, formData);
//     };
//   };

export const getProductById = (id) => {
  return async (dispatch) => {
    try {
      dispatch(setStockFetchingToState());
      let result = await axios.get(
        `https://www.melivecode.com/api/users/${id}`
      );
      dispatch(setStockSuccessToState(result.data));
    } catch (error) {
      alert(JSON.stringify(error));
      dispatch(setStockFailedToState());
    }
  };
};
