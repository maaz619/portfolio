require("./src/styles/global.css")
// const React = require("react")
// const { Provider } = require("react-redux")

// const store = require("./src/store/store")

// exports.wrapRootElement = ({ element }) => {
//   return <Provider store={store}>{element}</Provider>
// }
export { default as wrapRootElement } from "./src/store/store"
