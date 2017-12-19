import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { connect } from 'react-redux';
import MdHighlightOff from 'react-icons/lib/md/highlight-off';
import './CloseIt.css';
import { closeEvent } from '../../actions/event'




class CloseIt extends Component {
  render() {
    console.log(this.props)
  	const closeEvent = this.props.closeEvent;
    return (
    <a id="close-it" className="event-info--close js-close-sidebar" onClick={() => this.props.closeEvent(this.props.history)}>
    	<MdHighlightOff size={40} />
    </a>
    );
  }
}

export default connect(null, {closeEvent})(CloseIt);
