import React from 'react';

import '../styles/rsvp-result.scss'

class RSVPResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.rsvp
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.className;
    console.log('radio name:', name);
    console.log('radio value:', value);

    this.props.handleChange(this.props.name, event.target.className);
    this.setState({selected: event.target.className});
  }

  render() {
    return (
      <div className="rsvp-result">
        <div className="name">{this.props.name}</div>

        <div className="attending-not-attending">
          <div className="radio">
            <input
              className="attending"
              type="radio"
              name={this.props.name}
              checked={this.state.selected === 'attending'}
              onChange={this.handleChange}
            />
            <div className="option">Attending</div>
          </div>

          <div className="radio">
            <input
              className="not-attending"
              type="radio"
              name={this.props.name}
              checked={this.state.selected === 'not-attending'}
              onChange={this.handleChange}
            />
            <div className="option">Not Attending (with deepest regrets)</div>
          </div>
        </div>

        {this.props.plus1 ?
          <div className="attending-not-attending with-guest">
            <div className="radio">
              <input
                className="attending-with-guest"
                type="radio"
                name={this.props.name}
                checked={this.state.selected === 'attending-with-guest'}
                onChange={this.handleChange}
              />
              <div className="option">Attending with Guest</div>
            </div>
          </div> : null}

      </div>
    );
  }

}

export default RSVPResult;