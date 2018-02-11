import React, { Component } from 'react';
import logo from './logo.svg';
export default class Biography extends Component {
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