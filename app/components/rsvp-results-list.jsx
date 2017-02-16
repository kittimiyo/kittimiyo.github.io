import React from 'react';
import { observer, inject } from 'mobx-react';

import '../styles/rsvp-results-list.scss'
import RSVPResult from './rsvp-result.jsx'

class RSVPResultsList extends React.Component {
  constructor(props) {
    super(props);
    this.store = this.props.RSVPStore;
  }

  render() {
    console.log('rendering results list:', this.store.results);
    const results = this.store.results;

    if (results) {
      return(
        <div id="rsvp-results-list">
          <div className="family-name">{results.family}</div>
          {results.names.map((value, index) => {
            return (
              <RSVPResult
                key={"rsvp-result" + index}
                name={value.name}
                plus1={value.plus1}
              />
            );
          })}
        </div>
      )
    }
    return null;
  }
}

export default inject('RSVPStore')(observer(RSVPResultsList));