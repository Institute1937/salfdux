import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header.js';
import Calendar from './Calendar/Calendar.js';
import Event from './Event/Event.js'; 

class Main extends Component {

  constructor() {
    super();
   }

  render() {
    console.log(this) 
    return (
      <div className="App">
        <Header>         
        </Header>
        <div className="site-wrapper">
          <Calendar openEvent={this.openEvent} {...this.props}></Calendar>
          <Event closeEvent={this.props.closeEvent} openState={this.props.openState} event={this.props.event}></Event>
        </div>
      </div>
    );
  }
}

export default Main;
