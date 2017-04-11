import React from 'react';
import { observer, inject } from 'mobx-react';

import '../styles/side-menu.scss'

class SideMenu extends React.Component {
  constructor(props) {
    super(props);

    this.store = this.props.NavigatorStore;
    this.state = {
      selected: 'rsvp'
    };

    this.select = this.select.bind(this);
  }

  select(event) {
    this.setState({selected: event.target.id});
    this.store.setSelected(event.target.id);
  }

  render() {
    return (
      <div id="side-menu" >
        <div className="background-container">
          <div className="background"></div>
        </div>
        <div className="side-menu-center">
          <div
            id="rsvp"
            className={this.state.selected === 'rsvp' ? 'selected' : ''}
            onClick={this.select}>RSVP</div>
          <div
            id="location"
            className={this.state.selected === 'location' ? 'selected' : ''}
            onClick={this.select}>LOCATION</div>
          <div
            id="schedule"
            className={this.state.selected === 'schedule' ? 'selected' : ''}
            onClick={this.select}>SCHEDULE</div>
          <a
            id="registry"
            className={this.state.selected === 'registry' ? 'selected' : ''}
            href="http://www.honeyfund.com/wedding/BowdenPetersen2017"
            target="_blank"
            className="honeyfund">REGISTRY</a>
        </div>
        <div className="updated">
          <div className="location"></div>
          <div className="schedule"></div>
          <div className="registry">updated!</div>
        </div>
      </div>
    );
  }
}

export default inject('NavigatorStore')(observer(SideMenu));