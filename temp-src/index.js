import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
ReactDom.render(
  /* 此处需要用provider包裹App，目的是让App所有的后代容器组件都能接收到store */
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
// 监测redux中状态的改变，如redux的状态发生改变，重新渲染App组件，用react-redux不用再监测了
// store.subscribe(() => {
//   ReactDom.render(<App />, document.getElementById("root"));
// });
