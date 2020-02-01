import React from 'react';

const Month = (props) => (
  <div className="AK-container-month">
    <div className="AK-container-header-month">
      <span className="AK-text-month">{props.month} 2020</span>
    </div>
    <div className="AK-container-weeks">
      <div className="AK-header-days">
        {props.days.map((day) => <div className="AK-container-day"><div className="AK-day">{day}</div></div>)}
      </div>
      <div className="AK-container-dates">
        {props.renderLeadingBlanks()}
        {props.dates().map((date, index) => <div className="AK-date" key={index}><div className="AK-text-date">{date}</div></div>)}
        {props.renderTrailingBlanks()}
      </div>
      {/* <div className="AK-week1">

      </div>
      <div className="AK-week2">

      </div>
      <div className="AK-week3">

      </div>
      <div className="AK-week4">

      </div> */}
    </div>
  </div>
);

export default Month;
