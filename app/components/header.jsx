import React from "react";

import '../styles/header.css'

const Header = React.createClass({
  render: function() {
    return (
      <div id="header">
        <h1>Welcome</h1>
        <h3>
          Sylvie & Eric<br/>
          June 24, 2017<br/>
          <br/>
          Luther Burbank Center for the Arts<br/>
          Santa Rosa
        </h3>
      </div>
    );
  }
});

export default Header