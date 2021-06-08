// src/Event.js

import React, { Component } from "react";

class Event extends Component {
  state = {
    showHideDetails: false,
  };

  handleShowHideButton = () => {
    if (this.state.showHideDetails === true) {
      this.setState({ showHideDetails: false });
    } else {
      this.setState({ showHideDetails: true });
    }
  };

  render()  {
    const { event } = this.props;
   
    return (
      <div className='event-container'>
        <h1 className='summary'>{event.summary}</h1>
        <p className='locations'>{event.location}</p>
        {/* <p className='date'>{event.start.dateTime}</p> */}

        {this.state.showHideDetails && (
          <div className='event-details'>
             <h2>About event</h2>
             <p className='description'>{event.description}</p>
             <a className='link' href={event.link}>See details on Google Calendar</a>
          </div>
        )}

        <button className='show-hide-btn'onClick={() => this.handleShowHideButton()}>
          {!this.state.showHideDetails ? 'show details' : 'hide-details'}
        </button>
      </div>
    );
  }
}
export default Event;