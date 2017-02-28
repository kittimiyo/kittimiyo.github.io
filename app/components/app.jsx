import React from 'react';
import DevTools from 'mobx-react-devtools';

import '../styles/app.scss'
import Header from './header.jsx';
import SideMenu from './side-menu.jsx';
import RSVPContainer from './rsvp-container.jsx';
import LocationContainer from './location-container.jsx';
import ScheduleContainer from './schedule-container.jsx';
import RegistryContainer from './registry-container.jsx';

const App = React.createClass({
  render: function() {
    return (
      <div id="app">
        <Header/>
        <div id="sub-contents">
          <SideMenu />
          <RSVPContainer />
          <LocationContainer />
          <ScheduleContainer />
          <RegistryContainer />
        </div>
      </div>
    );
  }
});

export default App;