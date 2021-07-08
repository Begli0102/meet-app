// src/Event.js

import React, { Component} from "react";

class Event extends Component {
  state = {
    event: {},
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
         {/* <h1 className='summary'>{event.summary}</h1>  */}
        <p className='locations'>{event.location}</p>
         <p className='date'>{event.start.dateTime}</p> 
         {/* <p className='time'>{event.start.timeZone}</p> */}
        {this.state.showHideDetails && (
          <div className='event-details'>
             <h2>About event</h2>
             <p className='description'>{event.description}</p>
             
             {/* <button className='' href={event.htmlLink}>See details on Google Calendar</button> */}
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