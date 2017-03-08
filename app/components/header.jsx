import React from "react";

import '../styles/header.scss'

function Header() {
  return (
    <div id="header">
      <div className="header-center">
        <div className="names">Sylvie & Eric</div>
        <div className="info">
          June 24, 2017
          <span>|</span>
          Santa Rosa, CA
        </div>
        {/*<div className="location">Santa Rosa, CA</div>*/}
      </div>
    </div>
  );
}

export default Header