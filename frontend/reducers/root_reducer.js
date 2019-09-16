import { combineReducers } from "redux";
import cats from "./cats_reducer";
import errors from "./errors_reducer";

const RootReducer = combineReducers({
  cats,
  errors
});

export default RootReducer;
