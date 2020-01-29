import React from 'react';

const Widget = (props) => (
  <div className="widget-box">
    <div className="trip-code">Trip code {props.trip.code}</div>
    <div className="container-pricing">
      <div className="price"></div>
      <div className="msrp"></div>
      <div className="savings"></div>
    </div>
    <div></div>
  </div>
);

export default Widget;
