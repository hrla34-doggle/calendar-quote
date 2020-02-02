import React from 'react';
import TopBar from './TopBar';
import ScrollPage from './ScrollPage';

const Calendar = (props) => {
  const { trip, stringifyPrice, homeClickHandler } = props;
  return (
    <div>
      <TopBar homeClickHandler={homeClickHandler} />
      <ScrollPage stringifyPrice={stringifyPrice} trip={trip} />
    </div>
  );
};

export default Calendar;
