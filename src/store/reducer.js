import { combineReducers } from "redux"

const reducer = (state = { isOpen: false }, action) => {
  switch (action.type) {
    case "isOpen":
      let newState = { ...state }
      newState.isOpen = action.data.somedata
      state = newState
      break
    default:
      return state
  }
  return state
}
const rootReducer = combineReducers({ header: reducer })
export default rootReducer
