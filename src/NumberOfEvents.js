import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

// import Button from 'react-bootstrap/Button'

class NumberOfEvents extends Component {
  state = {
    eventValue: 32,
    // value:[]
    errorText: "",
  };

  handleEventInputChanged = (event) => {
    const number = event.target.value;
    if (number < 1 || number > 32) {
      return this.setState({
        eventValue: number,
        errorText: "Choose the number between 1 and 32",
      });
    } else {
      this.setState({
        eventValue: number,
        errorText: "",
      });
    }
    this.props.eventCount(number);
  };

  render() {
    return (
      // <container>
      <div className="event-number">
        <h4 className="text-events">Number of Events</h4>
        <ErrorAlert text={this.state.errorText} />
        <input
          type="number"
          name="numberOfEvent"
          className="event-number-input"
          placeholder="32"
          value={this.state.eventValue}
          onChange={this.handleEventInputChanged}
        />
      </div>

      // </container>
    );
  }
}

export default NumberOfEvents;
