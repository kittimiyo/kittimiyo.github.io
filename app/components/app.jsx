import React from 'react';
import DevTools from 'mobx-react-devtools';

import '../styles/app.scss'
import Header from './header.jsx';
import ListBox from './list-box.jsx';
import RSVPContainer from './rsvp-container.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="app">
        <Header/>
        <ListBox>
          <RSVPContainer />
        </ListBox>
      </div>
    );
  }
}

export default App;