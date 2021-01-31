import { createStore,applyMiddleware,combineReducers } from "redux";
// 引入为count服务的reducer
import countReducer from "./reducers/count";
import PersonReducer from './reducers/person'
// 引入redux-thunk支持异步action
import thunk from 'redux-thunk'
// 汇总reducer，变为一个总的reducer
const allReducers=combineReducers({
    he:countReducer,
    rens:PersonReducer
})
export default createStore(allReducers,applyMiddleware(thunk));
