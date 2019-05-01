import { combineReducers } from "redux";
import postReducer from "./postReducer";
import configReducer from "./configReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  postReducer,
  configReducer,
  authReducer
});

export default rootReducer;
