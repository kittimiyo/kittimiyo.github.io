import React from 'react';

import '../styles/side-menu.scss'

class SideMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: ''
    };

    this.select = this.select.bind(this);
  }

  select(event) {
    this.setState({selected: event.name});
  }

  render() {
    return (
      <div id="side-menu" className={"" + this.state.className} onClick={this.select}>
        {this.props.children}
      </div>
    );
  }
}

export default SideMenu;