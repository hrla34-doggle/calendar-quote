import React from 'react';

const RightButton = (props) => (
  <div className={props.hidden ? "AK-container-right-button-hidden AK-container-right-button" : "AK-container-right-button"}>
    <img onClick={props.clickHandler} className="AK-right-button" src="right_button.png" alt="right_button" />
  </div>
);

export default RightButton;
