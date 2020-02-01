import React from 'react';
import Legend from './Legend';
import Carousel from './Carousel';

const ScrollPage = (props) => {
  const { trip } = props;
  return (
    <div className="AK-container-scroll">
      <div className="AK-middle-section">
        <div className="AK-step1">STEP 1</div>
        <div className="AK-select-dates-header">Select your dates</div>
      </div>
      <Legend />
      <Carousel trip={trip} />
    </div>
  );
};

export default ScrollPage;
