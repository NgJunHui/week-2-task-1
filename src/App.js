import React, { Component } from 'react'

class App extends Component {

  employeeData = [
    { name: "Jun Hui", age: 26, designation: "Developer", department: "IT" },
    { name: "John", age: 32, designation: "Manager", department: "Finance" },
    { name: "Dominic", age: 35, designation: "Engineer", department: "IT" }
  ];

  state = {
    name: "Jack",
    coffee: "Espresso",
    store: "Starbucks"
  }
  handleClick = () => {
    this.setState({
      coffee: "Latte",
      store: 'Macdonalds'
    });
  }

  render() {
    return (
      <div>
        {this.employeeData.map(({ name, age, designation, department }) => (
          <ul>
            <li>
              <p key={name}>My name is {name}, {age} years old.
                I am a {designation} in the {department} department</p>
            </li>
          </ul>
        ))}
        <p> My name is {this.state.name}, I love to drink {this.state.coffee}, from {this.state.store}</p>
        <button onClick={this.handleClick}>Update</button>
      </div>
    )
  }
}
export default App
