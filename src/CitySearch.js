// src/CitySearch.js
import React, { Component } from 'react';
import { InfoAlert } from './Alert';

class CitySearch extends Component {
  state = {
    query: '',
    suggestions: [],
    showSuggestions: false,
    infoText:''
  }
  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ showSuggestions: true });
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    if (suggestions.length === 0) {
      this.setState({
        query: value,
        infoText: 'Can not find the city. Please try another city',
        suggestions: []
      });
    }else{ 
    return this.setState({
      query: value,
      suggestions,
      infoText:''
    });
  }
  };

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      showSuggestions: false,
       infoText: ''
    });
    this.props.updateEvents(suggestion);
  };
  render() {
    return (
      // <container>
      <div className="CitySearch">
        <h4 className='search'>Search your city</h4>
        <input
        type="text"
        className="city"
        placeholder='Type the city you want'
        value={this.state.query}
        onChange={this.handleInputChanged}
        onFocus={() => { this.setState({ showSuggestions: true }) }}  
      />
        {/* </div>
 <div> */}
      <ul className="suggestions" style={this.state.showSuggestions ? {display:'flex'}: { display: 'none' }}>

      {this.state.suggestions.map((suggestion) => (
      <li key={suggestion} onClick={() => this.handleItemClicked(suggestion)}>{suggestion}</li>
      ))}
      <li key={'all'} onClick={() => this.handleItemClicked("all")}>
      <b className='suggest'>See all cities</b>
      </li>
    
      </ul>
      <InfoAlert text={this.state.infoText} />
      </div>
      // </container>
    );
  }
}

export default CitySearch;