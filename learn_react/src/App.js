import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import request from 'superagent';

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
  constructor() {
    super();
    this.state = {
      grocerys: []
    }
  }
  handleAdd(event) {
    const grocerysItems = this.state.grocerys;
    grocerysItems.push(this.textbox.value);
    this.setState({
      grocerys: grocerysItems
    })
    this.textbox.value = '';
  }

  handleWithKey(event) {
    if(event.key === 'Enter'){
     this.handleAdd(event);
    }
  }

  handleDelete() {
    var grocerysItems = this.state.grocerys;
    grocerysItems.pop();
    this.setState({
      grocerys: grocerysItems
    })
    this.textbox.value = '';
  }
  handleDeleteSelective(data, event) {
    var grocerysItems = this.state.grocerys;
    var index = grocerysItems.indexOf(data);
    if(index > -1){
      grocerysItems.splice(index, 1);
    }
    this.setState({
      grocerys: grocerysItems
    })
    this.textbox.value = '';
  }

  componentDidMount(){
    this.textbox.focus();
  }
  
  render() {
    return (
      <div>
        <h1>Grocery List</h1>
        <ul>
          {this.state.grocerys.map((grocery, index) => <li key={index}>{grocery} <button onClick= {this.handleDeleteSelective.bind(this, grocery)}>Remove</button></li>)} 
        </ul>
        <hr/>
        <input onKeyPress={this.handleWithKey.bind(this)} type="text" ref={textbox => this.textbox = textbox}/>
        <button onClick= {this.handleAdd.bind(this)}>Add grocery
        </button>
        <button onClick= {this.handleDelete.bind(this)}>Delete</button>
        <hr/>
      </div>
    )
  }
}

class RandomQuote extends Component {
  constructor() {
    super();
    this.state = {
      randomQuote: '',
      author: '',
      cat: ''
    }
  }
  componentDidMount() {
    var path = 'https://talaikis.com/api/quotes/random/';
    request.get(path).end((error, result) => {
      this.setState({
        randomQuote: result.body.quote,
        author: result.body.author,
        cat: result.body.cat
      })
    });
  }
  render() {
    
    return (
      <div>
        <h1>Random Quote</h1>
        <p>{this.state.randomQuote}</p>
        <h2>Author</h2>
        <p>{this.state.author}</p>
        <h3>Category</h3>
        <p>{this.state.cat}</p>
        <hr />
      </div>
    )
  }
}

export default App;