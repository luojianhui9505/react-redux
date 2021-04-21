import React, { Component } from "react";
import { nanoid } from "nanoid";
import { connect } from "react-redux";
import { addPerson } from "../../redux/actions/person";
class Person extends Component {
  addPerson = () => {
    //   将value重命名为name和age
    const { value: name } = this.nameNode;
    const { value: age } = this.ageNode;
    if(!name.trim()||!age.trim()){
        alert('姓名或年龄不能为空')
        return;
    }
    const personObj = { id: nanoid(), name, age };
    this.props.addPerson(personObj);
    this.nameNode.value = this.ageNode.value = "";
  };
  render() {
    return (
      <div>
        <h2>我是Person组件,上放组件求和为：{this.props.count}</h2>
        <input
          ref={(c) => (this.nameNode = c)}
          type="text"
          placeholder="输入名字"
        />
        <input
          ref={(c) => (this.ageNode = c)}
          type="text"
          placeholder="输入年龄"
        />
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {this.props.personArr.map((person) => {
            return (
              <li key={person.id}>
                {person.name}--{person.age}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default connect(
  (state) => ({ personArr: state.persons, count: state.count }),
  {
    addPerson,
  }
)(Person);
