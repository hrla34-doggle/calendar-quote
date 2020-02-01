import React from 'react';

const TopBar = (props) => (
  <div className="AK-top-bar">
    <img className="AK-logo" src="trafalgar-logo.webp" alt="trafalgar_logo" />
    <img className="AK-phone" src="phone_art.svg" alt="phone_art" />
    <div className="AK-help">
      <div className="AK-help-text">NEED HELP?</div>
      <div className="AK-help-phone">866 513 1995</div>
    </div>
    <div className="AK-header">Dates & Prices</div>
    <div className="AK-return">
      <div className="AK-back-text">BACK</div>
      <img className="AK-X" src="button-X.png" alt="button-X" />
    </div>
  </div>
);

export default TopBar;
