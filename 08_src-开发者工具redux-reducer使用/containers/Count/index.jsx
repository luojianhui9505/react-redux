import React, { Component } from "react";
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from "../../redux/actions/count";
import { connect } from "react-redux";
class Count extends Component {
  state = {
    count: 1,
  };
  increment = () => {
    const { value } = this.selectNumber;
    this.props.jia(value * 1);
  };
  disIncrement = () => {
    const { value } = this.selectNumber;
    this.props.jian(value * 1);
  };

  incrementIfOdd = () => {
    const { value } = this.selectNumber;
    if (this.props.count % 2 === 0) {
      return;
    }
    this.props.jia(value * 1);
  };
  incrementAsync = () => {
    const { value } = this.selectNumber;
    this.props.jiaAsync(value * 1, 500);
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>当前求和为：{this.props.count},下方组件的总人数为：{this.props.renshu}</h2>
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
const countContainer = connect(
  (state) => ({ count: state.he,renshu:state.rens.length }),
  {
    jia: createIncrementAction,
    jian: createDecrementAction,
    jiaAsync: createIncrementAsyncAction,
  }
)(Count);

export default countContainer;
