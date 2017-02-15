import React from 'react';
import { observer, inject } from 'mobx-react';
import querystring from 'querystring';

import '../styles/rsvp-search.scss'

class RSVPSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.store = new this.props.RSVPStore();

    const query = querystring.parse(window.location.search.substr(1));
    // turn off query while designing 2/14
    //if (query.code) {
    //  console.log('code in query:', query);
    //  this.store.setRSVPSearchResults(query.code);
    //}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.store.setRSVPSearchResults(this.state.value);
  }

  render() {
    return (
      <div id="rsvp-search">
          <form className="query" onSubmit={this.handleSubmit}>
            <input
              className="text-input"
              type="text" placeholder="enter code to search for reservation"
              onChange={this.handleChange} /><br/>
            <input type="submit" value="Search" />
          </form>
      </div>
    );
  }
}

export default inject('RSVPStore')(observer(RSVPSearch));