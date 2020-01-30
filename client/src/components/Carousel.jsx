import React from 'react';
import Legend from './Legend.jsx';

const Carousel = (props) => (
  <div className="AK-container-carousel">
    <div className="AK-middle-section">
      <div className="AK-step1">STEP 1</div>
      <div className="AK-select-dates-header">Select your dates</div>
    </div>
    <Legend />
  </div>
);

export default Carousel;