import React from 'react';

export default class SelectDate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: false,
      JANUARY: [],
      FEBRUARY: [],
      MARCH: [],
      APRIL: [],
      MAY: [],
      JUNE: [],
      JULY: [],
      AUGUST: [],
      SEPTEMBER: [],
      OCTOBER: [],
      NOVEMBER: [],
      DECEMBER: [],
    };
  }

  componentDidMount() {
    this.sortDates();
  }

  sortDates() {
    const { trip, formatStartDate, appendToDate } = this.props;
    const { dates } = trip;

    let sorted = [null, [], [], [], [], [], [], [], [], [], [], [], []];

    dates.forEach((dateString) => {
      let numMonth = parseInt(dateString.slice(5, 7));
      let date = parseInt(dateString.slice(8, 10));

      sorted[numMonth].push(formatStartDate(numMonth, date));
    });

    this.setState({
      JANUARY: sorted[1],
      FEBRUARY: sorted[2],
      MARCH: sorted[3],
      APRIL: sorted[4],
      MAY: sorted[5],
      JUNE: sorted[6],
      JULY: sorted[7],
      AUGUST: sorted[8],
      SEPTEMBER: sorted[9],
      OCTOBER: sorted[10],
      NOVEMBER: sorted[11],
      DECEMBER: sorted[12],
    });
  }

  renderList() {
    this.setState({
      list: true,
    });
  }

  render() {
    const { list } = this.state;
    const { trip } = this.props;

    return (
      <div onClick={() => this.renderList()} className="AK-container-dropdown-select-date">
        <div className="AK-selector-dropdown-select-date">Select a date</div>
        <img className="AK-button-dropdown-select-date" src="down-arrow.png" alt="down-arrow" />
        {list ? <div className="AK-list-dropdown-select-date">
          {Object.keys(this.state).map((key) => {
            if (key !== 'list') {
              return (
                <div className="AK-container-month-dropdown">
                  <div className="AK-header-month-dropdown">{key} 2020 DEPARTURES</div>
                  {this.state[key].map((date) => {
                    return (
                      <div className="AK-container-dropdown-date-entry">
                        <img className="AK-button-dropdown-date-entry" src="checkbox_red_unselected.png" alt="checkbox_unselected" />
                        <div className="AK-text-dropdown-date-entry">{`${date} 2020`}</div>
                      </div>
                    );
                  })}
                </div>
              );
            }
          })}
        </div> : null}
      </div>
    );
  }
}
