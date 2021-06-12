import { combineReducers } from "redux";
import iceCreamReducer from "./IceCream/IceCreamReducer";
import cakeReducer from "./cake/cakeReducer";

const rootReducers = combineReducers({
  cake: cakeReducer,
  IceCream: iceCreamReducer
})

export default rootReducers