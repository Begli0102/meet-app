import React from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents.js';

function App() {
  return (
    <div className="App">
      <CitySearch />  //add here the component as well
      <EventList />
      <NumberOfEvents />
    </div>
  );
}

export default App;
