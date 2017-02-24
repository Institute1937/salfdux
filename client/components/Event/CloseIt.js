import React, { Component } from 'react';
import '../App.css';
import MdHighlightOff from 'react-icons/lib/md/highlight-off';
import './CloseIt.css';




class CloseIt extends Component {
  render() {
    console.log(this.props)
  	const closeEvent = this.props.closeEvent;
    return (
    <a href="#" id="close-it" className="event-info--close js-close-sidebar" onClick={() => closeEvent()}>
    	<MdHighlightOff size={40} />
    </a>
    );
  }
}

export default CloseIt;
