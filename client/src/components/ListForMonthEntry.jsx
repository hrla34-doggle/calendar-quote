import React from 'react';

const ListForMonthEntry = (props) => {
  const { date, numMonth, formatDate, trip, stringifyPrice, checkHandler, checkedDate, checkedMonth } = props;
  return (
    <div className={checkedDate === date && checkedMonth === numMonth ?
      "AK-component-container-list-entry AK-checked" : "AK-component-container-list-entry"}
      onClick={checkHandler} data-date={date} data-nummonth={numMonth}>
      <img className="AK-list-checkbox" src={checkedDate === date && checkedMonth === numMonth ? "https://calendar-trips.s3-us-west-1.amazonaws.com/checkbox_selected.png" : "https://calendar-trips.s3-us-west-1.amazonaws.com/checkbox_unselected.png"} alt="checkbox_unselected"></img>
      <div className="AK-text-list">{formatDate(numMonth, date)}</div>
      <div className="AK-price-list">{stringifyPrice(trip.price)}</div>
    </div>
  );
};

export default ListForMonthEntry;
