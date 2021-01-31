import { createStore, applyMiddleware } from "redux";
// 引入redux-thunk支持异步action
import thunk from "redux-thunk";
/* 引入redux-devtools开发者工具 */
import { composeWithDevTools } from "redux-devtools-extension";
/* 引入汇总之后的reducer */
import reducer from './reducers'
export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
