import React from 'react';
import Legend from './Legend';
import Carousel from './Carousel';

const ScrollPage = (props) => (
  <div className="AK-container-scroll">
    <div className="AK-middle-section">
      <div className="AK-step1">STEP 1</div>
      <div className="AK-select-dates-header">Select your dates</div>
    </div>
    <Legend />
    <Carousel />
  </div>
);

export default ScrollPage;
