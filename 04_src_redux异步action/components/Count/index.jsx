import React, { Component } from "react";
// 用于获取react保存的状态
import store from "../../redux/store";
import {
  createDecrementAction,
  createIncrementAction,
  createIncrementAsyncAction
} from "../../redux/count_action";

class Count extends Component {
  state = {
    count: 1,
  };
  /* componentDidMount(){
    store.subscribe(()=>{
      this.setState({})
    })
  } */
  increment = () => {
    const { value } = this.selectNumber;
    store.dispatch(createIncrementAction(value * 1));
  };
  disIncrement = () => {
    const { value } = this.selectNumber;
    store.dispatch(createDecrementAction(value * 1));
  };

  incrementIfOdd = () => {
    const { value } = this.selectNumber;
    const count = store.getState();
    if (count % 2 === 0) {
      return;
    }
    store.dispatch(createIncrementAction(value * 1));
  };
  incrementAsync = () => {
    const { value } = this.selectNumber;
      store.dispatch(createIncrementAsyncAction(value * 1,500));
  };
  render() {
    return (
      <div>
        <h2>当前求和为：{store.getState()}</h2>
        <select ref={(c) => (this.selectNumber = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;&nbsp;
        <button onClick={this.disIncrement}>-</button>&nbsp;&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和结果为基数再加</button>
        &nbsp;&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    );
  }
}

export default Count;
