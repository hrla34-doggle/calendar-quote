import React from 'react';

export default class Month extends React.Component {
  constructor(props) {
    super(props);

    const { trip } = props;
    const { days } = trip;

    this.state = {
      numDays: days,
    };
  }

  render() {
    const { trip, renderTrailingBlanks, renderLeadingBlanks, dates, days, stringifyPrice, month, dayHeaders } = this.props;
    const { price } = trip;

    return (
      <div className="AK-container-month">
        <div className="AK-container-header-month">
          <span className="AK-text-month">{month} 2020</span>
        </div>
        <div className="AK-container-weeks">
          <div className="AK-header-days">
            {dayHeaders.map((day) => <div className="AK-container-day"><div className="AK-day">{day}</div></div>)}
          </div>
          <div className="AK-container-dates">
            {renderLeadingBlanks()}
            {days().map((day, index) => {
              if (dates.indexOf(index + 1) !== -1) {
                return <div className="AK-container-date-departure" key={index}>
                  <div className="AK-text-date">{day}</div>
                  <div className="AK-date-pricing">{stringifyPrice(price)}</div>
                </div>
              }
              return (
                <div className="AK-container-date" key={index}><div className="AK-text-date">{day}</div></div>
              );
            })}
            {renderTrailingBlanks()}
          </div>
        </div>
      </div>
    );
  }
}
