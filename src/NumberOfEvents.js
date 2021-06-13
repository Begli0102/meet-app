import React, { Component } from 'react';
// import Button from 'react-bootstrap/Button'

class  NumberOfEvents extends Component {
  state = {
    eventValue: 32,
  };
  handleEventInputChanged = (event) => {
    const eventValue = event.target.value;
    this.setState({
      eventValue,
    });
  };
  render() {
    
    return (
      <div className="event-number">
        <h1>Number of Events</h1>
       <input type='number'
          name='numberOfEvent'
          className='event-number-input'
          placeholder="32"
          value={this.state.eventValue}
          onChange={this.handleEventInputChanged}
      />
    </div>
    );
  }
}

export default NumberOfEvents;