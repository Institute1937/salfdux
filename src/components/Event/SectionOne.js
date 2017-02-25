import React, { Component } from 'react';
import '../App.css';
import './SectionOne.css'
const classNames = require('classnames');



class SectionOne extends Component {
  render() {
    const info = this.props.info
    const colours = this.props.colours
    const primaryColour =  classNames('event-info--metadata', colours) ;
    return (
      <div className={primaryColour}>
      	<p className="meta-data event-info--user">

      		<span className="js-event-info-date">23.07.16—25.06.17</span>
      	</p>
      	<p className="meta-data event-info--user">
      		<span className="js-event-info-time">10.00—5.00pm</span>
      	</p>
      	<p className="meta-data event-info--user">
      		<span id="football-address" className="js-event-info-venue">{info ? info.address : ""}</span>
      	</p>
      	<p className="meta-data event-info--user">
      		<span id="manager" className="js-event-info-user">{info ? info.themanager : ""}</span>
      	</p>
      </div>
    );
  }
}

export default SectionOne;
