import React from 'react';
import TopBar from './TopBar';
import ScrollPage from './ScrollPage';

const Calendar = (props) => {
  const { trip } = props;
  return (
    <div>
      <TopBar />
      <ScrollPage trip={trip} />
    </div>
  );
};

export default Calendar;
