import React from 'react';
import DevTools from 'mobx-react-devtools';

import '../styles/app.scss'
import Header from './header.jsx';
import ListBox from './side-menu.jsx';
import RSVPContainer from './rsvp-container.jsx';

const App = React.createClass({
  render: function() {
    return (
      <div id="app">
        <Header/>
        <RSVPContainer />
      </div>
    );
  }
});

export default App;