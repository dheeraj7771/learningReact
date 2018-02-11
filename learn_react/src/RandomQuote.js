import React, { Component } from 'react';
import request from 'superagent';

export default class RandomQuote extends Component {
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
      request.get(path).then((result) => {
        this.setState({
          randomQuote: result.body.quote,
          author: result.body.author,
          cat: result.body.cat
        })
      })
      .catch((error) => {
          console.log(error);
      })
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