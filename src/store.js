import { createStore } from "redux";
import CatRootReducer from "./reducers/CatRootReducer";

// Creates the redux store from the root reducer
const store = createStore(CatRootReducer);
export default store;