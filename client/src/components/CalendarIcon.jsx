import React from 'react';

const CalendarIcon = (props) => (
  <div className={props.selected ? "AK-calendar-selected AK-container-calendar-icon" : "AK-container-calendar-icon"} onClick={props.clickHandler}>
    {props.selected ? <img className="AK-view-icon" src="calendar_selected.png" alt="calendar_selected" /> : <img className="AK-view-icon" src="calendar_unselected.png" alt="calendar_unselected" />}
  </div>
);

export default CalendarIcon;
