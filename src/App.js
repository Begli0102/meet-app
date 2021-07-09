import React, { Component } from 'react';
import './App.css';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents.js';
import { getEvents,extractLocations,checkToken, getAccessToken  } from './api';
import { WarningAlert } from './Alert';
import Logo from './meet-app-192.png';
import WelcomeScreen from './WelcomeScreen';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid,
   Tooltip, ResponsiveContainer} from 'recharts';
   import EventGenre from './EventGenre';
 

class App extends Component {

  state = {
    events: [],
    locations: [],
  //  numberOfEvents:8,
   eventValue:32, 
   currentLocation: 'all',
   showWelcomeScreen:undefined,
   warningText:''

  
  }

  updateEvents = (location) => {
    console.log('location',location)
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
      const city = location.split(', ').shift()
      return { city, number };
    })

    return data
  };

  
  async componentDidMount() {
    const { eventValue } = this.state;
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    // console.log('code ', code)
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if (!navigator.onLine) {
      this.setState({
        warningText:
          'The app is run offline. Events may be out of date.',
      });
    } else {
      this.setState({
        warningText: '',
      });
    }
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({
            events: events.slice(0, eventValue),
            locations: extractLocations(events),
          });
        }
      });
    } else {
      // Function below is used to test on local machine(when code is null and isTokenValid is false )
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ events: events.slice(0, eventValue), locations: extractLocations(events) });
        }
      });
    }
  }

 
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
      <WarningAlert text={this.state.warningText} />
      <NumberOfEvents numberOfEvents={this.state.numberOfEvents} eventCount={this.eventCount} />
      <CitySearch locations={this.state.locations} updateEvents={this.updateEvents}/> 
      </div>
      <h4>Events in each city</h4>
      <div className="data-vis-wrapper">
            <EventGenre events={this.state.events} />
      <ResponsiveContainer height={400} >
          <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid />
            <XAxis type="category" dataKey="city" name="City" />
            <YAxis
              allowDecimals={false}
              type="number"
              dataKey="number"
              name="Number of events"
            />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Scatter data={this.getData()} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>
        </div>
      {/* <div className='Alert'> */}
      <EventList events={this.state.events} />
      {/* </div> */}
      {/* <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen}
        getAccessToken={() => { getAccessToken() }} /> */}
    </div>
  );
}
}

export default App;
