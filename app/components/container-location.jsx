import React from 'react';
import { observer, inject } from 'mobx-react';
import Iframe from 'react-iframe';

import '../styles/container-location.scss'

function LocationContainer() {
  if(this.props.NavigatorStore.selected === 'location'){
    return (
      <div id="container-location" className="container">
        <div className="title">Location</div>
        <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3122.77047034644!2d-122.7514826846615!3d38.49293797963511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808438c59cd66501%3A0x997384afcf9a4ae8!2sLuther+Burbank+Center+for+the+Arts!5e0!3m2!1sen!2sus!4v1490737665781" width="600px" height="450px" frameborder="0" style={{border:0}} allowfullscreen></Iframe>
      </div>
    );
  }

  return null;
}


export default inject('NavigatorStore')(observer(LocationContainer));