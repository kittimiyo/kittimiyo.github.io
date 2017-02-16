import React from 'react';

import '../styles/rsvp-result.scss'

function RSVPResult(props) {
  return (
    <div id="rsvp-result">
      <div className="name">{props.name}</div>
      <div className="attending-not-attending">
        <div className="radio">
          <input type="radio" />
          <div className="option">Attending</div>
        </div>
        <div className="radio">
          <input type="radio" />
          <div className="option">Not Attending (with deepest regrets)</div>
        </div>
      </div>
      {props.plus1 ?
        <div className="attending-not-attending with-guest">
          <div className="radio">
            <input type="radio" />
            <div className="option">Attending with Guest</div>
          </div>
        </div> : null}
    </div>
  );
}

export default RSVPResult;