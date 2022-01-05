import { combineReducers } from "redux";
import app from "../reducers/appReducer";

const rootReducers = combineReducers({
  app,
});

export default rootReducers;
