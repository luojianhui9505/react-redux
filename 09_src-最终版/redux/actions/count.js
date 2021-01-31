
import { INCREMENT, DECREMENT } from "../constant";
export const increment = (data) => ({ type: INCREMENT, data });
export const decrement = (data) => ({ type: DECREMENT, data });
// 异步action，指的action的值为函数，函数里面才能开启异步任务,异步action一般都会调用同步action，异步action不是必须要用的
export const incrementAsync = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment(data));
    }, time);
  };
};
