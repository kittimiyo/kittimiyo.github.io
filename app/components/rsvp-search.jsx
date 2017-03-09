import React from 'react';
import { observer, inject } from 'mobx-react';
import querystring from 'querystring';

import '../styles/rsvp-search.scss';
import LoadingSVG from './loading-svg.jsx';

class RSVPSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.store = this.props.RSVPStore;

    const query = querystring.parse(window.location.search.substr(1));
    if (query.code) {
      console.log('code in query:', query);
      this.store.getRSVP(query.code);
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetSearch = this.resetSearch.bind(this);
    this.queryMessage = this.queryMessage.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.store.getRSVP(this.state.value);
  }

  resetSearch() {
    this.setState({ value: '' });
    this.store.resetSearch();
  }

  queryMessage(message) {
    if(message === 'not found') {
      return <div className="search-message">
        No results found</div>;
    }
    if(message === 'invalid query') {
      return <div className="search-message">
        Please enter the 5-digit code from your invitation</div>;
    } else {
      return null;
    }
  }

  render() {
    return (
      <div id="rsvp-search">
        {this.store.searching ?
          <div className="search-message">
            <div>Searching</div>
            <LoadingSVG />
          </div> :
          this.store.results ?
          <div className="search-again" onClick={this.resetSearch}>reset search</div> :
          <form className="query" onSubmit={this.handleSubmit}>
            <input
              className="text-input"
              type="text" placeholder="  invitation code"
              onChange={this.handleChange}/>
            <i className="material-icons search-arrow" onClick={this.handleSubmit} >&#xE315;</i>
            <input className="search" type="submit" value="search"/>
          </form>}
        {this.queryMessage(this.store.message)}
      </div>
    );
  }
}

export default inject('RSVPStore')(observer(RSVPSearch));