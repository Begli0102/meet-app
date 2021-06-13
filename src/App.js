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
   numberOfEvents:8,
   
  
  }

  updateEvents = (location,eventCount) => {
    
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents,
        numberOfEvents: eventCount
       
      });
    });
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events),
         
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
      <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateEvents={this.updateEvents} />
    </div>
  );
}
}

export default App;
