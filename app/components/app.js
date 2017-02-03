import React from 'react';

import '../styles/app.css'
import Header from './header';
import ReservationContainer from './reservation-container';

const App = React.createClass({
  render: function() {
    return (
      <div id="app">
        <Header/>
        <ReservationContainer/>
      </div>
    );
  }
});

export default App