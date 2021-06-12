import { createStore } from "redux";
// import cakeReducer from "./cake/cakeReducer";
import rootReducers from "./rootReducer";

// const store = createStore(cakeReducer)
const store = createStore(rootReducers)

export default store