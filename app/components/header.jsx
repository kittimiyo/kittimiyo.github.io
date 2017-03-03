import React from "react";

import '../styles/header.scss'

function Header() {
  return (
    <div id="header">
      <div className="names">Sylvie & Eric</div>
      <div className="date">June 24, 2017</div>
      <div className="location">Santa Rosa, CA</div>
    </div>
  );
}

export default Header