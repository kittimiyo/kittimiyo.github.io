import React from "react";

import '../styles/header.scss'

const Header = React.createClass({
  render: function() {
    return (
      <div id="header">
        <div className="join">Join us</div>
        <div className="date">June 24, 2017</div>
        <div className="names">Eric & Sylvie</div>
      </div>
    );
  }
});

export default Header