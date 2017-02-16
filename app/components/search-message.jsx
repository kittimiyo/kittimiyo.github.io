import React from 'react';

import '../styles/search-message.scss'
import LoadingSVG from './loading-svg.jsx'

function SearchMessage(props) {
  if(props.message === 'not found') {
    return <div id="search-message">
      No results found for code</div>;
  }
  if(props.message === 'searching') {
    return <div id="search-message">
      <div>Searching for invite</div>
      <LoadingSVG />
    </div>;
  }
  if(props.message === 'invalid query') {
    return <div id="search-message">
      Please enter your 5-digit reservation code</div>;
  }
}

export default SearchMessage;