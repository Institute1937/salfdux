import React from 'react';
import { connect } from 'react-redux';
import ListItem from './ListItem/ListItem';
import styles from './Calendar.css';
const classNames = require('classnames');


class Calendar extends React.Component  {
  

  render (){ 

    const events = this.props.events
    const leftHand = classNames(styles.leftHandSide, styles.eventsList)
    return (
      <div className={leftHand}>
        <h2 className={styles.calenderHeader}>
          
        </h2>
        <ul>    
          {this.props.events ? 
            events.map((event, index) => 
              <ListItem
                event={event}
                key={index}
                history={this.props.history}

          />
          ) : null}
        </ul>       
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
      events: state.events,
    })
}

export default connect(mapStateToProps,  null)(Calendar);
