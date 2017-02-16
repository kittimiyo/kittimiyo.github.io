import React from 'react';

import '../styles/loading-svg.scss'

function LoadingSVG() {
  console.log('rendering rsvp-container');

  return (
    <div className="loader loader--style5" title="4">
      <svg>
    <rect x="0" y="0" width="4" height="10" fill="#333">
      <animateTransform attributeType="xml"
        attributeName="transform" type="translate"
        values="0 0; 0 20; 0 0"
        begin="0" dur="0.6s" repeatCount="indefinite" />
    </rect>
    <rect x="10" y="0" width="4" height="10" fill="#333">
      <animateTransform attributeType="xml"
        attributeName="transform" type="translate"
        values="0 0; 0 20; 0 0"
        begin="0.2s" dur="0.6s" repeatCount="indefinite" />
    </rect>
    <rect x="20" y="0" width="4" height="10" fill="#333">
      <animateTransform attributeType="xml"
        attributeName="transform" type="translate"
        values="0 0; 0 20; 0 0"
        begin="0.4s" dur="0.6s" repeatCount="indefinite" />
    </rect>
  </svg>
    </div>
  );
}

export default LoadingSVG;
