import './nprogress.css';
import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents.js';
import { getEvents,extractLocations } from './api';
// import './nprogress.css'

class App extends Component {

  state = {
    events: [],
    locations: [],
  //  numberOfEvents:8,
   eventValue:32, 
   currentLocation: 'all',
  
  }

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all')
  
      ? events
        :events.filter((event) => event.location === location);
         const { eventValue } = this.state;
         if (this.mounted) {
      this.setState({
        events: locationEvents.slice(0,eventValue),
        currentLocation: location,  
      });
    }
    });
  }

  eventCount = (eventCount) => {
    const { currentLocation } = this.state;
    this.setState({
      eventValue: eventCount
    });
    this.updateEvents(currentLocation);
  }

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length
      const city = location.split(' ').shift()
      return { city, number };
    })
    return data;
  };


  componentDidMount() {
    const { eventValue } = this.state;
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events:events.slice(0,eventValue),
           locations: extractLocations(events),
         
        });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }

render(){ 
  return (
    <div className="App">
      <CitySearch locations={this.state.locations} updateEvents={this.updateEvents}/> 
      <EventList events={this.state.events} />
      <NumberOfEvents numberOfEvents={this.state.numberOfEvents} eventCount={this.eventCount} />
    </div>
  );
}
}

export default App;
