import React from "react"
import { createStore } from "redux"
import rootReducer from "./reducer"
import { Provider } from "react-redux"
import { composeWithDevTools } from "redux-devtools-extension"

const Store = createStore(rootReducer, composeWithDevTools())

export default ({ element }) => <Provider store={Store}>{element}</Provider>
