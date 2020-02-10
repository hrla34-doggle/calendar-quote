import React from 'react';

const Month = (props) => {
  const { trip, renderTrailingBlanks, renderLeadingBlanks, dates, days, stringifyPrice, month, dayHeaders, numMonth, handleSummaryandSelect, highlightedDate, highlightedDates, tag } = props;
  const { price, discounted } = trip;

  return (
    <div id={tag} className="AK-container-month1">
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
              return (<div className={highlightedDate[0] === numMonth && highlightedDate[1] === (index + 1) ? "AK-container-date-departure AK-container-date-departure-selected" : "AK-container-date-departure"}
                data-index={index}
                data-nummonth={numMonth}
                onClick={handleSummaryandSelect}>
                <div className="AK-text-date">{day}</div>
                <div className={discounted ? "AK-date-pricing-discounted" : "AK-date-pricing"}>{stringifyPrice(price)}</div>
              </div>
              );
            }
            var highlighted = false;
            highlightedDates.forEach((date) => {
              if (date[0] === numMonth && date[1] === index + 1) {
                highlighted = true;
              }
            });
            return (<div className={highlighted ? "AK-container-date AK-container-date-highlighted" : "AK-container-date"} key={index}>
              <div className="AK-text-date">{day}</div>
            </div>
            );
          })}
          {renderTrailingBlanks()}
        </div>
      </div>
    </div>
  );
};

export default Month;
