import React from 'react';
import ListForMonthEntry from './ListForMonthEntry';

const ListForMonth = (props) => {
  const { dates, formatDate, numMonth, month, trip, stringifyPrice, checkHandler, checkedDate, checkedMonth } = props;
  return (
    <div className="AK-component-container-list-for-month">
      <div className="AK-header-list-for-month">
        {month} 2020
      </div>
      <div>
        {dates.map((date) => (
          <ListForMonthEntry date={date} 
                             numMonth={numMonth} 
                             formatDate={formatDate} 
                             trip={trip} 
                             stringifyPrice={stringifyPrice}
                             checkHandler={checkHandler}
                             checkedDate={checkedDate}
                             checkedMonth={checkedMonth} />
        ))}
      </div>
    </div>
  );
};

export default ListForMonth;