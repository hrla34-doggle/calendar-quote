import React from 'react';

const Quote = (props) => (
  <div>
    <div className="AK-opaque-bg-quote"></div>
    <div className="AK-component-container-quote">
      <div className="AK-container-header-quote">
        <div className="AK-text-header-quote">
          <div>Easy Quote</div>
        </div>
        <div className="AK-container-exit-quote">
          <img className="AK-button-img-exit-quote" src="button-X.png" alt="button-X" />
        </div>
      </div>
      <div className="AK-container-scrollable-quote">
        <div className="AK-container-image-quote">
          <img className="AK-image-quote"></img>
          <div className="AK-container-text-image-quote">
            <div className="AK-header-image-quote"></div>
            <div className="AK-text-image-quote"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Quote;
