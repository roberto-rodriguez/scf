import { combineReducers } from "redux";
import postReducer from "./postReducer";
import configReducer from "./configReducer";
import authReducer from "./authReducer";
import viewReducer from "./viewReducer";

const rootReducer = combineReducers({
  postReducer,
  configReducer,
  authReducer,
  viewReducer
});

export default rootReducer;
