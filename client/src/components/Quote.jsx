import React from 'react';

const Quote = (props) => {
  const { exitQuoteHandler, trip } = props;
  return (
    <div>
      <div className="AK-opaque-bg-quote"></div>
      <div className="AK-component-container-quote">
        <div className="AK-container-header-quote">
          <div className="AK-text-header-quote">
            <div>Easy Quote</div>
          </div>
          <div onClick={exitQuoteHandler} className="AK-container-exit-quote">
            <img className="AK-button-img-exit-quote" src="button-X.png" alt="button-X" />
          </div>
        </div>
        <div className="AK-container-scrollable-quote">
          <div className="AK-container-image-quote">
            <img className="AK-image-quote" src="sample-img2-quote.jpg" alt="sample-image-quote" />
            <div className="AK-container-text-image-quote">
              <div className="AK-header-image-quote">{trip.title.toUpperCase()}</div>
              <div className="AK-text-image-quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
            </div>
          </div>
          <div className="AK-container-select-date">

          </div>
          <div className="AK-container-quote-form">

          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
