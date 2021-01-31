/* 汇总reducer */
import { combineReducers } from "redux";
// 引入为count服务的reducer
import count from "./count";
/* 引入person服务的reducer */
import persons from "./person";
// 汇总reducer，变为一个总的reducer
export default combineReducers({
  count,
  persons,
});
