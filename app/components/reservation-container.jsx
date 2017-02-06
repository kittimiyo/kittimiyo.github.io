import React from 'react';
import { observer, inject } from 'mobx-react';

import '../styles/reservation-container.scss'

class ReservationContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.store = new this.props.RSVPStore();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.buildSearchResults = this.buildSearchResults.bind(this);
    this.buildPlus1Results = this.buildPlus1Results.bind(this);

    // for debugging:
    //this.store.getRSVPSearchResults('100');
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.store.getRSVPSearchResults(this.state.value);
  }

  buildSearchResults(results) {
    if (results) {
      if(results === 'not found') {
        return <div>No results found for code</div>;
      }
      if(results === 'searching') {
        return <div>Searching for invite</div>;
      }
      if(results === 'invalid query') {
        return <div>Invalid query</div>;
      }

      return(
        <form className="results">
          Reservation:
          {results.names.map((value, index) => {
            console.log('in buildSearchResults, value:', value);
            return (
              <div className="results-single" key={'results' + index}>
                <div className="rsvp-name">
                  <div className="name">{value.name}</div>
                  <div className="rsvp-q">Attending</div><input type="checkbox" />
                </div>
                {this.buildPlus1Results(value.plus1)}
              </div>);
          })}
        </form>
      )
    }
    return null;
  }

  buildPlus1Results(value) {
    if(value) {
      return <div>
        {value.map((plus, ind) => {
          return (
            <div>
              <div
                className="plus1-title"
                key={'results_plus1' + ind}>
                <div>Plus 1{value.length > 1 ? ` (${ind + 1})`: ''}</div>
              </div>
              <div className="plus1-input">
                <div>Name:</div>
                <input
                  type="text" />
              </div>
              <div>(leave blank if not attending)</div>
            </div>
          );
        })}
      </div>
    }
    return null;
  }

  render() {
    console.log('rerendering:', this.store.results);
    const gotResults = this.buildSearchResults(this.store.results);

    return (
      <div id="reservation-container">
        <div className="box">
          <div className="title">RSVP</div>
          <form className="query" onSubmit={this.handleSubmit}>
            <input
              className="text-input"
              type="text" placeholder="Code"
              onChange={this.handleChange} /><br/>
            <input type="submit" value="Search" />
          </form>
          {gotResults}
        </div>
      </div>
    );
  }
}

export default inject('RSVPStore')(observer(ReservationContainer));