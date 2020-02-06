import React from 'react';

export default class SelectDate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: false,
      selected: '',
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
    let dateClass = new Date();
    let currentMonth = dateClass.getMonth() + 1;

    let sorted = [null, [], [], [], [], [], [], [], [], [], [], [], []];
    
    dates.forEach((dateString) => {
      let numMonth = parseInt(dateString.slice(5, 7));
      let date = parseInt(dateString.slice(8, 10));

      if (numMonth >= currentMonth) {
        sorted[numMonth].push(formatStartDate(numMonth, date));  
      }
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
    const { list } = this.state;

    list ? this.setState({ list: false,}) : this.setState({ list: true,})
  }

  render() {
    const { list } = this.state;
    const { trip } = this.props;

    return (
      <div className="AK-container-dropdown-select-date">
        <div className="AK-container-selector-wrapper" onClick={() => this.renderList()}>
          <div className="AK-selector-dropdown-select-date">Select a date</div>
          <img className="AK-button-dropdown-select-date" src={list ? "up-arrow.png" : "down-arrow.png"} alt="down-arrow" />
        </div>
        {list ? <div className="AK-list-dropdown-select-date">
          <div className="AK-container-dropdown-date-entry">
            <img className="AK-button-dropdown-date-entry" src="checkbox_red_unselected.png" alt="checkbox_unselected" />
            <div className="AK-text-dropdown-date-entry">I don't know when I want to travel</div>
          </div>
          {Object.keys(this.state).map((key) => {
            if (key !== 'list' && key !== 'selected' && this.state[key].length !== 0) {
              return (
                <div className="AK-container-month-dropdown">
                  <div className="AK-container-header-month-dropdown">
                    <div className="AK-header-month-dropdown">{key} 2020 DEPARTURES</div>
                  </div>
                  {this.state[key].map((date, index) =>
                      <div className={ index !== this.state[key].length - 1 ? "AK-container-dropdown-date-entry AK-dropdown-border" : "AK-container-dropdown-date-entry"}>
                        <img className="AK-button-dropdown-date-entry" src="checkbox_red_unselected.png" alt="checkbox_unselected" />
                        <div className="AK-text-dropdown-date-entry">{`${date} 2020`}</div>
                  </div>)}
                </div>
              );
            }
          })}
        </div> : null}
      </div>
    );
  }
}