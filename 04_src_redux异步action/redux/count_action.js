/* 
    该文件专门为count组件生成action对象
*/
/* export function createIncrementAction(data){
        return {type:'increment',data}
}
export function createDecrementAction(data){
    return {type:'decrement',data}
} */
import { INCREMENT, DECREMENT } from "./constant";
export const createIncrementAction = (data) => ({ type: INCREMENT, data });
export const createDecrementAction = (data) => ({ type: DECREMENT, data });
// 异步action，指的action的值为函数，函数里面才能开启异步任务,异步action一般都会调用同步action，异步action不是必须要用的
export const createIncrementAsyncAction = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createIncrementAction(data));
    }, time);
  };
};
