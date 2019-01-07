import { createStore } from "redux";
import CatRootReducer from "./reducers/CatRootReducer";

const store = createStore(CatRootReducer);
export default store;