import React, { Component } from 'react';
import '../App.css';
import './SectionOne.css'
const classNames = require('classnames');



class SectionOne extends Component {
  render() {
    const event = this.props.event
    const colours = this.props.colours
    const primaryColour =  classNames('event-info--metadata', colours) ;
    return (
      <div className={primaryColour}>
      	<p className="meta-data event-info--user">

      		<span className="js-event-info-date">{event.name}</span>
      	</p>
      	<p className="meta-data event-info--user">
      		<span className="js-event-info-time">{event.date}</span>
      	</p>
      	<p className="meta-data event-info--user">
      		<span id="football-address" className="js-event-info-venue">{event ? event.address : ""}</span>
      	</p>
      	<p className="meta-data event-info--user">
      		<span id="manager" className="js-event-info-user">{event  ? event.themanager : ""}</span>
      	</p>
      </div>
    );
  }
}

export default SectionOne;
