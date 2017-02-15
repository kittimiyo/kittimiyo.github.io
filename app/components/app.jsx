import React from 'react';
import DevTools from 'mobx-react-devtools';

import '../styles/app.scss'
import Header from './header.jsx';
import ReservationContainer from './reservation-container.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="app">
        <Header/>
        <ReservationContainer />
      </div>
    );
  }
}

export default App;