import React, { Component } from "react";
/* 引入Count的容器组件 */
import Count from "./containers/Count";
import Person from './containers/Person'
class App extends Component {
  render() {
    return (
      <div>
        {/* 给容器组件传递store */}
        <Count />
        <hr />
        <Person />
      </div>
    );
  }
}

export default App;
