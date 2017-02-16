import React from 'react';
import { observer, inject } from 'mobx-react';
import querystring from 'querystring';

import '../styles/rsvp-search.scss'
import SearchMessage from './search-message.jsx'

class RSVPSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.store = this.props.RSVPStore;

    const query = querystring.parse(window.location.search.substr(1));
    // turn off query while designing 2/14
    if (query.code) {
      console.log('code in query:', query);
      this.store.setRSVPSearchResults(query.code);
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetSearch = this.resetSearch.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.store.setRSVPSearchResults(this.state.value);
  }

  resetSearch() {
    this.setState({ value: '' });
    this.store.resetSearch();
  }

  render() {
    return (
      <div id="rsvp-search">
        {this.store.message ?
          <SearchMessage message={this.store.message} /> :
          this.store.results?
          <div className="search-again" onClick={this.resetSearch}>search for another reservation</div> :
          <form className="query" onSubmit={this.handleSubmit}>
            <input
              className="text-input"
              type="text" placeholder="reservation code"
              onChange={this.handleChange}/><br/>
            <input type="submit" value="Search"/>
          </form>}
      </div>
    );
  }
}

export default inject('RSVPStore')(observer(RSVPSearch));