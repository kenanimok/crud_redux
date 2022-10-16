import { combineReducers } from "redux";
import loginReducer from "./login.reducer";
import listhumanReducer from "./listhuman.reducer";
import createhumanReducer from "./createhuman.reducer";

export const rootReducer = combineReducers({
  loginReducer: loginReducer,
  listhumanReducer: listhumanReducer,
  createhumanReducer: createhumanReducer,
});
