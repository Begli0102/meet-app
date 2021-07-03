import './nprogress.css';
import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents.js';
import { getEvents,extractLocations,checkToken, getAccessToken  } from './api';
// import './nprogress.css'
import Logo from './meet-app-192.png';
import WelcomeScreen from './WelcomeScreen';

 

class App extends Component {

  state = {
    events: [],
    locations: [],
  //  numberOfEvents:8,
   eventValue:32, 
   currentLocation: 'all',
   showWelcomeScreen:undefined
  
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


  async componentDidMount() {
    const { eventValue } = this.state;
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false :
     true;
     const searchParams = new URLSearchParams(window.location.search);
     const code = searchParams.get("code");
     this.setState({ showWelcomeScreen: !(code || isTokenValid) });
     if ((code || isTokenValid) && this.mounted) {
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events:events.slice(0,eventValue),
           locations: extractLocations(events),
        });
      }
    });
 }
  }

  // async componentDidMount() {
  //   this.mounted = true;
  //   
  //   getEvents().then((events) => {
    
  //   if (this.mounted) {
  //   this.setState({ events, locations: extractLocations(events) });
  //   }
  //   });
  //   }
  //   }

  componentWillUnmount(){
    this.mounted = false;
  }

render(){ 
  if (this.state.showWelcomeScreen === undefined) return <div className="App" />
  return (
    <div className="App">
      <img src={Logo}alt='logo' className='logo'></img>
      <h1 className='header'>Meet-app</h1>
      <div className='search-container'>
      <CitySearch locations={this.state.locations} updateEvents={this.updateEvents}/> 
      <NumberOfEvents numberOfEvents={this.state.numberOfEvents} eventCount={this.eventCount} />
      
      </div>
      <div className='Alert'>
      <EventList events={this.state.events} />
      </div>
      <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen}
getAccessToken={() => { getAccessToken() }} />
    </div>
  );
}
}

export default App;
