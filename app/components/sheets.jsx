import React from 'react';
import fs from 'fs';
import * as google from 'googleapis';
require('https://apis.google.com/js/api.js');

import '../styles/sheets.scss';


class  Sheets extends React.Component {
  constructor(props) {
    super(props);

    // Client ID and API key from the Developer Console
    const CLIENT_ID = '1056019502803-b53re5cctedpp8kfqp0lmpausqgfaoa3.apps.googleusercontent.com';

    // Array of API discovery doc URLs for APIs used by the quickstart
    const DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];

    // Authorization scopes required by the API; multiple scopes can be
    // included, separated by spaces.
    const SCOPES = "https://www.googleapis.com/auth/spreadsheets";

    this.state = {};


    this.handleLogin = this.handleLogin.bind(this);
    console.log(gapi);
  }

  handleLogin(event) {

  }

  render() {
    return (
      <div id="sheets">
        <p>Write to sheets!!</p>

        {/* Add buttons to initiate auth sequence and sign out */}
        <button id="authorize-button" style="display: none;">Authorize</button>
        <button id="signout-button" style="display: none;">Sign Out</button>
      </div>
    );
  }
}

export default Sheets;