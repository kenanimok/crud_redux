import { combineReducers } from "redux";
import loginReducer from "./login.reducer";
import listhumanReducer from "./listhuman.reducer";
import createhumanReducer from "./createhuman.reducer";
import edithumanReducer from "./edithuman.reducer";

export const rootReducer = combineReducers({
  loginReducer: loginReducer,
  listhumanReducer: listhumanReducer,
  createhumanReducer: createhumanReducer,
  edithumanReducer: edithumanReducer,
});
