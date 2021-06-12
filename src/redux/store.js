import { createStore, applyMiddleware } from "redux";
// import cakeReducer from "./cake/cakeReducer";
import rootReducers from "./rootReducer";
import logger from "redux-logger"

// const store = createStore(cakeReducer)
const store = createStore(rootReducers, applyMiddleware(logger))

export default store