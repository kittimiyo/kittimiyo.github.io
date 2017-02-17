import React from 'react';
import { toJS } from 'mobx';
import { observer, inject } from 'mobx-react';

import '../styles/rsvp-results-list.scss'
import RSVPResult from './rsvp-result.jsx'

class RSVPResultsList extends React.Component {
  constructor(props) {
    super(props);

    this.store = this.props.RSVPStore;

    this.state = {};

    this.handleSelectionChange = this.handleSelectionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSelectionChange(name, selection) {
    console.log('radio name:', name);
    console.log('radio selection:', selection);

    this.setState({
      [name]: selection
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('state results:', this.state);

    let newValues = Object.assign({}, this.store.results);
    let totalPeople = 0;

    newValues.names.forEach((value, index) => {
      const rsvp = this.state[value.name];
      if (rsvp) {
        newValues.names[index].rsvp = rsvp;

        if (rsvp === 'attending') {
          totalPeople++;
        } else if (rsvp === 'attending-with-guest') {
          totalPeople += 2;
        }
      }
    });

    newValues.totalPeople = totalPeople;

    newValues = toJS(newValues);
    newValues.names = toJS(newValues.names);

    console.log('new built results:', newValues);

    this.store.setRSVP(newValues);
  }


  render() {
    console.log('rendering results list, state:', this.state);
    console.log('rendering results list, store:', this.store);
    const results = this.store.results;

    if (results) {
      return(
        <div id="rsvp-results-list">
          {
            this.store.saved ?
            <div className="saved-message">Thanks! Your RSVP info has been {this.store.update ? 'updated!': 'saved!'}</div> :

            <form onSubmit={this.handleSubmit}>
              <div className="family-name">{results.family}</div>
              {results.names.map((value, index) => {
                return (
                  <RSVPResult
                    key={"rsvp-result" + index}
                    name={value.name}
                    plus1={value.plus1}
                    rsvp={value.rsvp}
                    handleChange={this.handleSelectionChange}
                  />
                );
              })}
              <input type="submit" className="submit-rsvp" value="Save"/>
            </form>
          }
        </div>
      )
    }
    return null;
  }
}

export default inject('RSVPStore')(observer(RSVPResultsList));