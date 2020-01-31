import React from 'react';

const ListIcon = (props) => (
  <div className={props.selected ? "AK-container-list-icon AK-list-selected" : "AK-container-list-icon"} onClick={props.clickHandler}>
    {props.selected ? <img className="AK-view-icon" src="list_selected.png" alt="list_selected" /> : <img className="AK-view-icon" src="list_unselected.png" alt="list_unselected" />}
  </div>
);

export default ListIcon;
