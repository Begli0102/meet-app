import React, { Component } from 'react';

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