import { combineReducers } from "redux";
import postReducer from "./postReducer";
import configReducer from "./configReducer";

const rootReducer = combineReducers({
  postReducer,
  configReducer
});

export default rootReducer;
