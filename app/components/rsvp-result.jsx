import React from 'react';

import '../styles/rsvp-result.scss'

function RSVPResult(props) {
  return (
    <div id="rsvp-result">
      <div className="name">{props.name}</div><br/>
      <input type="radio" />
      <div className="option">Attending</div>
    </div>
  );
}

export default RSVPResult;