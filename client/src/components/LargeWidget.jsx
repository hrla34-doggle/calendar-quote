import React from 'react';

const LargeWidget = (props) => {
  const { trip } = props;
  const { discounted, price, msrp } = trip;

  return (
    <div className="AK-widget-box">
      <div className="AK-large-widget-container-pricing">
        <div className="AK-large-widget-price">
          {discounted ? <div className="AK-large-widget-pricing-text1">Early Payment Discount</div> : null}
          <div className="AK-large-widget-currency1">${price} pp</div>
        </div>
        {discounted ?
          <div className="AK-large-widget-msrp">
            <div className="AK-large-widget-pricing-text2">WAS</div>
            <strike className="AK-large-widget-currency2">${msrp}</strike>
          </div> : null
        }
        {discounted ?
          <div className="AK-large-widget-savings">
            <div className="AK-large-widget-container-img">
              <img src="red-tag.png" alt="tag" className="AK-large-widget-price-tag" />
            </div>
            <div>
              <div className="AK-large-widget-savings-text">SAVE</div>
              <div className="AK-large-widget-currency2">${(msrp - price).toFixed(2)}</div>
            </div>
          </div> : null
        }
      </div>
      <div className="AK-container-buttons">
        <button type="button" className="AK-large-widget-button1">BOOK NOW</button>
        <button type="button" className="AK-large-widget-button2">EASY QUOTE</button>
      </div>
      <div className="AK-container-pitch">
        <div className="AK-container-pitch-text">
          <div>Don't miss out - save your place today</div>
        </div>
        <div className="AK-container-pitch-options">Twinshare option, Land only price, Flights available</div>
        <div className="AK-container-pitch-notes">
          <div className="AK-pitch-text-notes">Please read our <u>trip notes</u> before booking</div>
          <div className="AK-container-call-us">
            <img className="AK-phone-art" src="phone_art.png" alt="phone_art"></img>
            <div className="AK-pitch-text-notes">Call us on <span className="AK-phone-number">866 513 1995</span> or speak to your travel agent</div>
          </div>
          <div className="AK-pitch-text-notes">Travel to Europe often requires an overnight flight. Please arrange your flights to arrive on or before day 1.</div>
        </div>
      </div>
    </div>
  );
};

export default LargeWidget;
