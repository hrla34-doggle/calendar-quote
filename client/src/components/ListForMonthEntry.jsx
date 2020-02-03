import React from 'react';

const ListForMonthEntry = (props) => {
  const { date, numMonth, formatDate, trip, stringifyPrice, checkHandler } = props;
  return (
    <div className="AK-component-container-list-entry">
      <img onClick={checkHandler} data-date={date} data-nummonth={numMonth} className="AK-list-checkbox" src="checkbox_unselected.png" alt="checkbox_unselected"></img>
      <div className="AK-text-list">{formatDate(numMonth, date)}</div>
      <div className="AK-price-list">{stringifyPrice(trip.price)}</div>
    </div>
  );
};

export default ListForMonthEntry;
