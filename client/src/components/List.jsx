import React from 'react';

export default class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="AK-component-container-list">
        <div className="AK-header-list">
          <div className="AK-text-header-list">DEPARTURES</div>
        </div>
        <div className="AK-scrollable-list">
          {props.dates.map((date) => (
            <div>{date}</div>
          ))}
        </div>
      </div>
    );
  }
}
