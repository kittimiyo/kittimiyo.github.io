import React from 'react';
import { observer, inject } from 'mobx-react';

import '../styles/container-registry.scss'

function RegistryContainer() {
  if(this.props.NavigatorStore.selected === 'registry'){
    return (
      <div id="container-registry" className="container">
        <div className="title">Registry</div>
        <div className="registry-link">
          <a
            href="http://www.honeyfund.com/wedding/BowdenPetersen2017"
            target="_blank"
            className="honeyfund" />
        </div>
      </div>
    );
  }

  return null;
}


export default inject('NavigatorStore')(observer(RegistryContainer));