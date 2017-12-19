import React from 'react'
const classNames = require('classnames');

import Title from './Event/Title.js';
import CloseIt from './Event/CloseIt.js';
import SectionOne from './Event/SectionOne.js';


export const EventShow = ({event,history}) => {

  let openState
  if (event.eventColourScheme && event.openState){
    openState = "show-it"
  } else {
    openState = ''
  }
  const rightHand =  classNames(openState, event.eventColourScheme);
  console.log(18)
  console.log(event)
  return (
    <div className={rightHand}>
      <CloseIt history={history} event={event}/>
      <Title title={event.name}> </Title>
      <SectionOne event={event}/>
    </div>
  )

}

