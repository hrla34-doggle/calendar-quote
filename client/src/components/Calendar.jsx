import React from 'react';
import TopBar from './TopBar';
import ScrollPage from './ScrollPage';

const Calendar = (props) => {
  const { trip, stringifyPrice, homeClickHandler, quoteClickHandler, formatStartDate, appendToDate } = props;
  return (
    <div>
      <TopBar homeClickHandler={homeClickHandler} />
      <ScrollPage stringifyPrice={stringifyPrice} 
                  quoteClickHandler={quoteClickHandler} 
                  trip={trip}
                  formatStartDate={formatStartDate}
                  appendToDate={appendToDate} />
    </div>
  );
};

export default Calendar;
