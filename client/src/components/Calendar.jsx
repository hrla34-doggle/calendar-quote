import React from 'react';
import TopBar from './TopBar';
import ScrollPage from './ScrollPage';

const Calendar = (props) => {
  const { trip, stringifyPrice } = props;
  return (
    <div>
      <TopBar />
      <ScrollPage stringifyPrice={stringifyPrice} trip={trip} />
    </div>
  );
};

export default Calendar;
