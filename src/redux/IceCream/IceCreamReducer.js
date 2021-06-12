import { BUY_ICECREAAM } from "./IceCreamTypes"

const initialState = {
  numOfIceCreams: 20
}

const iceCreamReducer = (state = initialState, action ) => {
  switch(action.type) {
    case BUY_ICECREAAM: return {
      ...state,
      numOfIceCreams: state.numOfIceCreams - 1
    }
    default: return state
  }
}

export default iceCreamReducer