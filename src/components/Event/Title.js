import React, { Component } from 'react';
import '../App.css';
import './Title.css';



class Title extends Component {
  render() {
    console.log('eee')
  	const title = this.props.title.name
    return (
      <h2 id="non-league-football" className="event-info--title">{title ? title : ""}</h2>
    );
  }
}

export default Title;
