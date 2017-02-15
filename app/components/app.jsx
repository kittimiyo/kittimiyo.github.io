import React from 'react';
import DevTools from 'mobx-react-devtools';

import '../styles/app.scss'
import Header from './header.jsx';
import ListBox from './list-box.jsx';
import ReservationContainer from './reservation-container.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="app">
        <Header/>
        <ListBox>
          <ReservationContainer />
        </ListBox>
      </div>
    );
  }
}

export default App;