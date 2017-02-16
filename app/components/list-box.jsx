/**
 * Places element in a narrow box, whose height is expanded to full when selected
 */

import React from 'react';

import '../styles/list-box.scss'

class ListBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      className: 'active'
    };
    this.select = this.select.bind(this);
  }

  select() {
    this.setState({className: 'active'});
    //if(!this.state.className) {
    //  this.setState({className: 'active'});
    //} else {
    //  this.setState({className: ''});
    //}
  }

  render() {
    return (
      <div id="list-box" className={"" + this.state.className} onClick={this.select}>
        {this.props.children}
      </div>
    );
  }
}

export default ListBox;