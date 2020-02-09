import React from 'react';
import TopBar from './TopBar';
import ScrollPage from './ScrollPage';

const Calendar = (props) => {
  const { trip, stringifyPrice, homeClickHandler, formatStartDate, appendToDate, fadeInAndRenderQuote } = props;
  return (
    <div id="calendar" className="AK-container-calendar-page">
      <TopBar homeClickHandler={homeClickHandler} />
      <ScrollPage stringifyPrice={stringifyPrice} 
                  trip={trip}
                  formatStartDate={formatStartDate}
                  appendToDate={appendToDate}
                  fadeInAndRenderQuote={fadeInAndRenderQuote}
                  />
    </div>
  );
};

export default Calendar;
