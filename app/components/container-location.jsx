import React from 'react';
import { observer, inject } from 'mobx-react';
import Iframe from 'react-iframe';
import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react';
//import { GoogleApiWrapper } from 'GoogleMapsReactComponent';

import '../styles/container-location.scss'

class LocationContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfoWindow: false,
      selectedPlace: {},
      activeMarker: {},
      directions: 'https://www.google.com/maps/dir//Luther+Burbank+Center+for+the+Arts,+Mark+West+Springs+Rd,+Santa+Rosa,+CA/@38.4929328,-122.7843132,13z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x808438c59cd66501:0x997384afcf9a4ae8!2m2!1d-122.749294!2d38.492938'
    };

    this.onMarkerClick = this.onMarkerClick.bind(this);
  }

  onMarkerClick(props, marker) {
    if (this.state.showInfoWindow) {
      this.setState({
        showInfoWindow: false
      });
    } else {
      this.setState({
        showInfoWindow: true,
        selectedPlace: props.name,
        activeMarker: marker
      });
    }
  }

  render() {
    if(this.props.NavigatorStore.selected === 'location'){
      return (
        <div id="container-location" className="container">
          <div className="title">Location</div>
          <div className='info'><strong>Luther Burbank Center for the Arts, Carston Cabaret Room<br/></strong>
            50 Mark West Springs Road,
            Santa Rosa, CA 95403</div>

          <Map
            style={{ borderRadius: '4px' }}
            containerStyle={{width: '80%', height: '450px', position: 'relative'}}
            className="google-map"
            initialCenter={{lat: 38.49293797963511, lng: -122.7514826846615}}
            google={this.props.google}
            zoom={13}>

            <Marker
              name={'Sylvie & Eric Wedding Location'}
              onClick={this.onMarkerClick}
              position={{lat: 38.49293797963511, lng: -122.7514826846615}} />

            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showInfoWindow}>
              <div className="info-window">
                <div className="name">Sylvie & Eric Wedding Location</div>
                <div className="center-name">Luther Burbank Center for the Arts</div>
                <a
                  className="directions"
                  href={this.state.directions}
                  target="_blank"
                >Get Directions</a>
              </div>
            </InfoWindow>

          </Map>
        </div>
      );
    }

    return null;
  }


}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyBvhEx4PWpKihF7oEpUxRh_MjmQ542AzM8'
})(inject('NavigatorStore')(observer(LocationContainer)));