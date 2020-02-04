import React from 'react';

export default class SelectDate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="AK-container-dropdown-select-date">
        <div className="AK-selector-dropdown-select-date">Select a date</div>
        <img className="AK-button-dropdown-select-date" src="down-arrow.png" alt="down-arrow" />
      </div>
    );
  }
}
