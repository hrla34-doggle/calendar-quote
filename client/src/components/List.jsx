import React from 'react';
import ListForMonth from './ListForMonth';

export default class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      months: [null, 'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
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

    this.formatDate = this.formatDate.bind(this);
  }

  componentDidMount() {
    this.sortDates();
  }

  sortDates() {
    const { dates } = this.props;
    let sorted = [null, [], [], [], [], [], [], [], [], [], [], [], []];

    dates.forEach((dateString) => {
      let numMonth = parseInt(dateString.slice(5, 7));
      let date = parseInt(dateString.slice(8, 10));
      // let dateRange = formatStartDate(numMonth, date) + "- " + getEndingDate(numMonth, date);
      sorted[numMonth].push(date);
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

  formatDate(numMonth, date) {
    const { formatStartDate, getEndingDate } = this.props;
    let dateRange = formatStartDate(numMonth, date) + "- " + getEndingDate(numMonth, date);
    return dateRange;
  }

  render() {
    const { trip, stringifyPrice, checkHandler } = this.props;
    let dateClass = new Date();
    let currentMonth = dateClass.getMonth() + 1;
    return (
      <div className="AK-component-container-list">
        <div className="AK-header-list">
          <div className="AK-text-header-list">DEPARTURES</div>
        </div>
        <div className="AK-scrollable-list">
          {Object.keys(this.state).map((key, index) => {
            if (key !== 'months' && this.state[key].length !== 0 && index >= currentMonth) {
              return <ListForMonth dates={this.state[key]} 
                                   numMonth={index} 
                                   month={key}
                                   formatDate={this.formatDate}
                                   trip={trip}
                                   stringifyPrice={stringifyPrice}
                                   checkHandler={checkHandler} />;
            }
          })}
        </div>
      </div>
    );
  }
}
