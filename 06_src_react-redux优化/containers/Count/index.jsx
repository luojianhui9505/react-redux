import React, { Component } from "react";
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from "../../redux/count_action";
// 引入connect用于链接容器组件与UI组件
import { connect } from "react-redux";
// mapStateToProps函数的返回的对象中的key就作为传递给了UI组件props的key，value就作为传递给UI组件的value----状态
/* function mapStateToProps(state) {
  return { count: state };
} */
// mapDispatchToProps函数的返回的对象中的key就作为传递给了UI组件props的key，value就作为传递给UI组件的value----操作状态的方法
/* function mapDispatchToProps(dispatch) {
  return {
    jia: (data) => {
      //  通知redux执行加法
      dispatch(createIncrementAction(data));
    },
    jian: (data) => {
      dispatch(createDecrementAction(data));
    },
    jiaAsync: (data, time) => {
      dispatch(createIncrementAsyncAction(data, time));
    },
  };
} */
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
        <h2>当前求和为：{this.props.count}</h2>
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
// 创建count的容器组件
const countContainer = connect(
  (state) => ({ count: state }),
  //   mapDispatchToProps的简写方式
  /* (dispatch) => ({
    jia: (data) => {
      //  通知redux执行加法
      dispatch(createIncrementAction(data));
    },
    jian: (data) => {
      dispatch(createDecrementAction(data));
    },
    jiaAsync: (data, time) => {
      dispatch(createIncrementAsyncAction(data, time));
    },
  }) */
  {
    jia: createIncrementAction,
    jian: createDecrementAction,
    jiaAsync: createIncrementAsyncAction,
  }
)(Count);

export default countContainer;
