import React from 'react';

const Widget = (props) => (
  <div className="widget-box">
    <div className="trip-code">Trip code {props.trip.code}</div>
    <div className="container-pricing">
      <div className="price">
        <div className="pricing-text">FROM</div>
        <div className="currency">${props.trip.price}</div>
      </div>
      <div className="msrp">
        <div className="pricing-text">WAS</div>
        <strike className="currency2">${props.trip.msrp}</strike>
      </div>
      <div className="savings">
        <div className="container-img">
          <img src="red-tag.svg" alt="tag" className="price-tag" />
        </div>
        <div>
          <div className="savings-text">Save</div>
          <div className="currency2">${(props.trip.msrp - props.trip.price).toFixed(2)}</div>
        </div>
      </div>
    </div>
    <div className="AK-reviews">
      0 reviews
    </div>
    <div className="AK-buttons">
      <button className="AK-button1">AVAILABLE DATES</button>
      <button className="AK-button2">EASY QUOTE</button>
    </div>
  </div>
);

export default Widget;
