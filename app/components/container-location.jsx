import React from 'react';
import { observer, inject } from 'mobx-react';

import '../styles/container-location.scss'

function LocationContainer() {
  if(this.props.NavigatorStore.selected === 'location'){
    return (
      <div id="container-location" className="container">
        <div className="title">Location</div>
        <div >Coming soon!</div>
      </div>
    );
  }

  return null;
}


export default inject('NavigatorStore')(observer(LocationContainer));