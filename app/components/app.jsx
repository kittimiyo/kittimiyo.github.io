import React from 'react';
import DevTools from 'mobx-react-devtools';

import '../styles/app.scss'
import Header from './header.jsx';
import SideMenu from './side-menu.jsx';
import RSVPContainer from './container-rsvp.jsx';
import LocationContainer from './container-location.jsx';
import ScheduleContainer from './container-schedule.jsx';
import RegistryContainer from './container-registry.jsx';

function App() {
    return (
      <div id="app">
        <div id="top">
          <SideMenu />
          <Header />
        </div>
        <div id="sub-contents">
          <RSVPContainer />
          <LocationContainer />
          <ScheduleContainer />
          <RegistryContainer />
        </div>
      </div>
    );
}

export default App;