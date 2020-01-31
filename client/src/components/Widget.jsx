import React from 'react';

const Widget = (props) => (
  <div className="AK-widget-box">
    <div className="AK-trip-code">Trip code {props.trip.code}</div>
    <div className="AK-container-pricing">
      <div className="AK-price">
        <div className="AK-pricing-text">FROM</div>
        <div className="currency">${props.trip.price}</div>
      </div>
      <div className="AK-msrp">
        <div className="AK-pricing-text">WAS</div>
        <strike className="currency2">${props.trip.msrp}</strike>
      </div>
      <div className="AK-savings">
        <div className="container-img">
          <img src="red-tag.svg" alt="tag" className="price-tag" />
        </div>
        <div>
          <div className="AK-savings-text">Save</div>
          <div className="currency2">${(props.trip.msrp - props.trip.price).toFixed(2)}</div>
        </div>
      </div>
    </div>
    <div className="AK-reviews">
      0 reviews
    </div>
    <div className="AK-buttons">
      <button type="button" onClick={props.clickHandler} className="AK-button1">AVAILABLE DATES</button>
      <button type="button" className="AK-button2">EASY QUOTE</button>
    </div>
  </div>
);

export default Widget;
