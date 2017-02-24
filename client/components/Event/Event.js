import React, { Component } from 'react';
import '../App.css';
import './Event.css';
import CloseIt from './CloseIt.js';
import Title from './Title.js';
import SectionOne from './SectionOne.js';
import SectionTwo from './SectionTwo.js';
import SectionThree from './SectionThree.js';
const classNames = require('classnames');


class Event extends Component {

  
  render() {
    console.log(this)
    const openState = this.props.event.openState;
    const details = this.props.event;
    const closeEvent = this.props.closeEvent;
    const rightHand =  classNames('event-info', 'event-primary-color', 'event-info--open', openState, details.eventColourScheme);

    return (
      <div id="right-hand-side" className={rightHand}>
      	<CloseIt closeEvent={closeEvent}></CloseIt>
      	<Title title={details}> </Title>
      	<br/>
        <SectionOne info={details} colours={details.secondaryColourText}></SectionOne>
      	<SectionTwo blurbOne={details.blurbOne } blurbTwo={details.blurbTwo }></SectionTwo>
      	<SectionThree></SectionThree>
      </div>
    );
  }
}

export default Event;
