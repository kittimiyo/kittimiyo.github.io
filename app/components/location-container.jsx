import React from 'react';
import { observer, inject } from 'mobx-react';

import '../styles/location-container.scss'

function LocationContainer() {
  if(this.props.NavigatorStore.selected === 'location'){
    return (
      <div id="location-container">
        <div >Coming soon!</div>
      </div>
    );
  }

  return null;
}


export default inject('NavigatorStore')(observer(LocationContainer));