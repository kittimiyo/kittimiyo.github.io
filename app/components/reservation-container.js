import React from 'react';

import '../styles/reservation-container.css'

const ReservationContainer = React.createClass({
  render: function() {
    return (
      <div id="reservation-container">
        <div className="box">
          <div className="title">
            RSVP
          </div>
        </div>
      </div>
    );
  }
});

export default ReservationContainer