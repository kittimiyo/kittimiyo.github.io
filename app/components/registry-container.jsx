import React from 'react';
import { observer, inject } from 'mobx-react';

import '../styles/registry-container.scss'

function RegistryContainer() {
  if(this.props.NavigatorStore.selected === 'registry'){
    return (
      <div id="registry-container">
        <div className="title">Registry</div>
        <div >Coming soon!</div>
      </div>
    );
  }

  return null;
}


export default inject('NavigatorStore')(observer(RegistryContainer));