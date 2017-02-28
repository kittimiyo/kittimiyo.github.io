import React from 'react';
import { observer, inject } from 'mobx-react';

import '../styles/rsvp-container.scss'
import RSVPSearch from './rsvp-search.jsx'
import RSVPResultsList from './rsvp-results-list.jsx'

function RSVPContainer() {
  console.log('rendering rsvp-container', this.props.NavigatorStore.selected);

  if(this.props.NavigatorStore.selected === 'rsvp'){
    return (
      <div id="rsvp-container">
        <div className="title">RSVP</div>
        <RSVPSearch />
        <RSVPResultsList />
      </div>
    );
  }

  return null;
}


export default inject('NavigatorStore')(observer(RSVPContainer));