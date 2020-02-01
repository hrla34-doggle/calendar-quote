import React from 'react';

const Summary = (props) => {
  const { trip } = props;
  const { title } = trip;
  return (
    <div className="AK-container-summary">
      <div className="AK-container-header-summary">
        <div className="AK-header-summary">
          <div className="AK-text1-summary">Step 2</div>
          <div className="AK-text2-summary">Your trip summary</div>
        </div>
      </div>
      <div className="AK-container-content-summary">
        <div className="AK-container-start-end">
          <div className="AK-header-start-end">{title}</div>
          <div className="AK-container-inner-start-end">
            <img className="AK-icon-start-end" src="start-end-icon.png" alt="start-end-icon" />
            <div className="AK-container-text-start-end">
              <div className="AK-text1-start-end">START</div>
              <div className="AK-text2-start-end"></div>
              <div className="AK-text1-start-end">END</div>
              <div className="AK-text2-start-end"></div>
            </div>
          </div>
        </div>
        <div className="AK-container-payment"></div>
      </div>
    </div>
  )
}

export default Summary;