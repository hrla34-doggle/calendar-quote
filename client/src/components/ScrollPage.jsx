import React from 'react';
import Legend from './Legend';
import Carousel from './Carousel';
import Summary from './Summary';

const ScrollPage = (props) => {
  const { trip, stringifyPrice } = props;

  return (
    <div className="AK-container-scroll">
      <div className="AK-middle-section">
        <div className="AK-step1">STEP 1</div>
        <div className="AK-select-dates-header">Select your dates</div>
      </div>
      <Legend />
      <Carousel stringifyPrice={stringifyPrice} trip={trip} />
      <Summary trip={trip} />
    </div>
  );
};

export default ScrollPage;
