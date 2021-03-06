import React from 'react';
import { toJS } from 'mobx';
import { observer, inject } from 'mobx-react';

import '../styles/rsvp-results-list.scss'
import RSVPResult from './rsvp-result.jsx'

class RSVPResultsList extends React.Component {
  constructor(props) {
    super(props);

    this.store = this.props.RSVPStore;

    this.state = {
      names: {},
      email: ''
    };

    this.handleSelectionChange = this.handleSelectionChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSelectionChange(name, selection) {
    console.log('radio name:', name);
    console.log('radio selection:', selection);

    const updatedNames = Object.assign(this.state.names, { [name]: selection });

    this.setState({
      names: updatedNames
    })
  }

  handleChange(event) {
    this.setState({email: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('state results:', this.state);

    let newValues = Object.assign({}, this.store.results);
    console.log('in handleSubmit, this.store.results:', newValues);
    let totalPeople = 0;

    newValues.names.forEach((value, index) => {
      const rsvp = this.state.names[value.name] || newValues.names[index].rsvp;
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
    if(this.state.email) newValues.email = this.state.email;

    newValues = toJS(newValues);
    newValues.names = toJS(newValues.names);

    console.log('saving new values:', newValues);

    this.store.setRSVP(newValues);
  }


  render() {
    console.log('rendering results list, state:', this.state);
    const results = this.store.results;

    if (results) {
      return (
        <div id="rsvp-results-list">
          {
            this.store.saved ?
              <div className="saved-message">Thanks! Your RSVP info has
                been {this.store.update ? 'updated!' : 'saved!'}</div> :

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
                <input
                  className="email-input"
                  type="email"
                  placeholder={ results.email ? ("  " + results.email) : "  email address (optional)" }
                  onChange={this.handleChange}/>
                <input type="submit" className="submit-rsvp" value="save"/>
              </form>
          }
        </div>
      )
    }
    return null;
  }
}

export default inject('RSVPStore')(observer(RSVPResultsList));