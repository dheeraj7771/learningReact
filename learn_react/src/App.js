import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Biography />
          <GroceryList />
      </div>
    );
  }
}

class Biography extends Component {
  render() {
    return(
      <div>
          <img src={logo} className="App-logo" alt="logo" />
          <p>Dheeraj Mendiratta</p>
          <p>Skill:- node, react</p>
          <hr/>
      </div>
    )
  }
}

class GroceryList extends Component {
  render() {
    return (
      <div>
        <p>Grocery List</p>
        <ul>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul>
        <hr/>
      </div>
    )
  }
}

export default App;
