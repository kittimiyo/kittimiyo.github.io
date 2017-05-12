import React from "react";

import '../styles/header.scss'

function Header() {
  return (
    <div id="header">
      <div className="header-center">
        <div className="names">Sylvie <span>&</span> Eric</div>
        <div className="info">
          June 24, 2017
          <span>|</span>
          4:30pm
          <span>|</span>
          Santa Rosa, CA
        </div>
      </div>
    </div>
  );
}

export default Header