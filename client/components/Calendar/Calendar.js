import React, { Component } from 'react';
import '../App.css';
import ListItem from './ListItem/ListItem.js';
import './calendar.css';



class Calendar extends Component {


  render() {

    const openEvent = this.props.openEvent;
    console.log(this)



    return (

      <div className="left-hand-side events-list">

      <h2 className="calender-header">December</h2>
      <ul>    
      {this.props.events.map(function(listValue){
        return <ListItem key={listValue.key} details={listValue} openEvent={openEvent}></ListItem>;
      })}
      </ul>      	

      </div>
      );
  }
}

export default Calendar;


