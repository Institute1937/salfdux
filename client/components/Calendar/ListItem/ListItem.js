import React, { Component } from 'react';
import '../../App.css';

import './ListItem.css';

class ListItem extends Component {

    render() {

    const a = this.props.details;
    const openEvent = this.props.openEvent;

    return (
      <li id={a.name} className="calender-event">
      	<a href="#" onClick={() => openEvent(a)}>
      		<div className="calender-event-item-date">
      			<span className="meta-data">{a.date}</span>
      		</div>
      		<div className="calender-event-item-title">
      			<div className="calender-event-item-inner">
      				<h3>{a.name}</h3>
      			</div>
      		</div>
      	</a>
      </li>
    );
  }
}

export default ListItem;
