import React, { Component } from "react";

class Count extends Component {
  state = {
    count: 0,
  };
  increment = () => {
    const { value } = this.selectNumber;
    const oldCount = this.state.count;
    let newCount = oldCount + value * 1;
    this.setState({
      count: newCount,
    });
  };
  disIncrement = () => {
    const { value } = this.selectNumber;
    const oldCount = this.state.count;
    let newCount = oldCount - value * 1;
    this.setState({
      count: newCount,
    });
  };
  incrementIfOdd = () => {
    const { value } = this.selectNumber;
    const oldCount = this.state.count;
    if (oldCount % 2 === 0) {
      return;
    }
    let newCount = oldCount + value * 1;
    this.setState({
      count: newCount,
    });
  };
  incrementAsync = () => {
    const { value } = this.selectNumber;
    const oldCount = this.state.count;
    let newCount = oldCount + value * 1;
    setTimeout(() => {
      this.setState({
        count: newCount,
      });
    }, 500);
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <h2>当前求和为：{count}</h2>
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
