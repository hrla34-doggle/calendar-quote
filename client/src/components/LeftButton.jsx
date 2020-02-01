import React from 'react';

const LeftButton = (props) => (
  <div className={props.hidden ? "AK-container-left-button-hidden AK-container-left-button" : "AK-container-left-button"}>
    <img onClick={props.clickHandler} className="AK-left-button" src="left_button.png" alt="left_button" />
  </div>
);

export default LeftButton;
