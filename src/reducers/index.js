import { combineReducers } from "redux";
import postReducer from "./postReducer";
import configReducer from "./configReducer";
import authReducer from "./authReducer";
import viewStateReducer from "./viewStateReducer";

const rootReducer = combineReducers({
  postReducer,
  configReducer,
  authReducer,
  viewStateReducer
});

export default rootReducer;
