/* 
    该文件专门为count组件生成action对象
*/
/* export function createIncrementAction(data){
        return {type:'increment',data}
}
export function createDecrementAction(data){
    return {type:'decrement',data}
} */
import {INCREMENT,DECREMENT} from './constant'
export const createIncrementAction=data=>({type:INCREMENT,data})
export const createDecrementAction=data=>({type:DECREMENT,data})