import React from 'react';
import { observer, inject } from 'mobx-react';
import querystring from 'querystring';

import '../styles/rsvp-container.scss'
import RSVPSearch from './rsvp-search.jsx'
import RSVPResultsList from './rsvp-results-list.jsx'

function RSVPContainer() {
  console.log('rendering rsvp-container');

  return (
    <div id="rsvp-container">
      <div className="rsvp-cat-pic"></div>
      <div className="box">
        <div className="title">RSVP</div>
        <RSVPSearch />
        <RSVPResultsList />
      </div>
    </div>
  );
}


export default RSVPContainer;