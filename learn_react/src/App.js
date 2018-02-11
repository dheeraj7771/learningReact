import React, { Component } from 'react';
import './App.css';
import RandomQuote from './RandomQuote';
import GroceryList from './GroceryList';
import Biography from './Biography';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: Date.now()
    }
  }
  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    
    return (
      <div className="App">
          <Biography />
          <GroceryList />
          <RandomQuote />
          <p>The date is: {this.state.time}</p>
      </div>
    );
  }
}

export default App;