import React, { Component } from 'react';
import '../App.css';



class SectionTwo extends Component {
  render() {
    return (
      <div className="body-copy">
      	<p></p>
      	<p id="emi1" className="emi">{this.props.blurbOne}</p>

      	<p id="emi2" className="emi">{this.props.blurbTwo}</p>
      	<p></p>
      </div>
    );
  }
}

export default SectionTwo;
