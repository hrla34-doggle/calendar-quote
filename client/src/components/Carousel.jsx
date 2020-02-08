/* eslint-disable class-methods-use-this */
import React from 'react';
import Month from './Month';
import LeftButton from './LeftButton';
import RightButton from './RightButton';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);

    const { trip } = props;
    const { dates } = trip;

    this.state = {
      leftButtonHidden: true,
      rightButtonHidden: false,
      trip,
      dates,
      firstMonth: 1,
      secondMonth: 2,
      months: [null, 'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'],
      dayHeaders: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
      first: [null, 3, 6, 0, 3, 5, 1, 3, 6, 2, 4, 0, 2], // needs to be manually put in. maybe i'll refactor it later to be automatically generated
      JANUARY: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
      FEBRUARY: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
      MARCH: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
      APRIL: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
      MAY: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
      JUNE: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
      JULY: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
      AUGUST: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
      SEPTEMBER: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
      OCTOBER: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
      NOVEMBER: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
      DECEMBER: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
      highlightedDate: [null, null],
      highlightedDates: [],
    };

    this.getDates = this.getDates.bind(this);
    this.returnLeadingEmptyDates = this.returnLeadingEmptyDates.bind(this);
    this.returnTrailingEmptyDates = this.returnTrailingEmptyDates.bind(this);
    this.getNextMonths = this.getNextMonths.bind(this);
    this.getPreviousMonths = this.getPreviousMonths.bind(this);
    this.getDatesForMonth = this.getDatesForMonth.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.handleSummaryandSelect = this.handleSummaryandSelect.bind(this);
  }

  componentDidMount() {
    this.getMonths();
  }

  getDates(numMonth) {
    const { months } = this.state;
    let month = months[numMonth];
    return this.state[month];
  }

  getMonths() {
    const { dates } = this.state;
    let date = new Date();
    let currentMonth = date.getMonth() + 1;
    let renderedFirstMonth = null;
    let renderedSecondMonth = null;

    dates.forEach((date) => {
      let month = parseInt(date.slice(5, 7));
      if (month >= currentMonth && renderedFirstMonth === null) {
        renderedFirstMonth = month;
      }
      if (renderedFirstMonth !== null && month > renderedFirstMonth && renderedSecondMonth === null) {
        renderedSecondMonth = month;
      }
    });

    this.setState({
      firstMonth: renderedFirstMonth,
      secondMonth: renderedSecondMonth,
    });
  }

  getDatesForMonth(month) {
    const { months, dates } = this.state;
    let numMonth = months.indexOf(month);
    let days = [];

    dates.forEach((date) => {
      let day = parseInt(date.slice(8, 10));
      let month = parseInt(date.slice(5, 7));

      if (month === numMonth) {
        days.push(day);
      }
    });

    return days;
  }

  getNextMonths() {
    const { dates, secondMonth } = this.state;
    let renderedFirstMonth = null;
    let renderedSecondMonth = null;
    let rightButtonHidden = false;

    dates.forEach((date, index) => {
      let month = parseInt(date.slice(5, 7));
      if (month > secondMonth && renderedFirstMonth === null) {
        renderedFirstMonth = month;
      }
      if (renderedFirstMonth !== null && month > renderedFirstMonth && renderedSecondMonth === null) {
        renderedSecondMonth = month;
      }
      if (index === dates.length - 1 && renderedSecondMonth === month - 1) {
        rightButtonHidden = true;
      }
      if (index === dates.length - 1 && renderedSecondMonth === month) {
        rightButtonHidden = true;
      }
    });

    if (renderedFirstMonth && renderedSecondMonth) {
      this.setState({
        firstMonth: renderedFirstMonth,
        secondMonth: renderedSecondMonth,
        rightButtonHidden,
        leftButtonHidden: false,
      });
    }
  }

  getPreviousMonths() {
    const { dates, firstMonth } = this.state;
    let renderedFirstMonth = null;
    let renderedSecondMonth = null;
    let leftButtonHidden = false;
    let dates_reversed = dates.slice(0);
    let newDate = new Date();
    let currMonth = newDate.getMonth() + 1;
    dates_reversed.reverse();

    dates_reversed.forEach((date, index) => {
      let month = parseInt(date.slice(5, 7));
      if (month < firstMonth && renderedSecondMonth === null) {
        renderedSecondMonth = month;
      }
      if (renderedSecondMonth !== null && month < renderedSecondMonth && renderedFirstMonth === null) {
        renderedFirstMonth = month;
      }
      if (index === dates_reversed.length - 1 && renderedFirstMonth === month) {
        leftButtonHidden = true;
      }
      if (renderedFirstMonth === currMonth) {
        leftButtonHidden = true;
      }
    });
    if (renderedFirstMonth && renderedSecondMonth) {
      this.setState({
        firstMonth: renderedFirstMonth,
        secondMonth: renderedSecondMonth,
        leftButtonHidden,
        rightButtonHidden: false,
      }, () => console.log(this.state));
    }
  }

  returnLeadingEmptyDates(number) {
    let render = [];
    for (let i = 0; i < number; i++) {
      render.push(null);
    }
    return render.map((x) => <div className="AK-date-blank" />);
  }

  returnTrailingEmptyDates(numLead, numDays) {
    let trailing = 7 - ((numLead + numDays) % 7);

    if (trailing === 7) {
      trailing = 0;
    }

    let render = [];
    for (let i = 0; i < trailing; i++) {
      render.push(null);
    }
    return render.map((x) => <div className="AK-date-blank" />);
  }

  clickHandler(event) {
    const { trip, months, secondMonth } = this.state;
    const { days } = trip;
    let date = parseInt(event.target.dataset.index) + 1;
    let month = parseInt(event.target.dataset.nummonth);
    var highlightedDates = [];

    for (let i = 1; i < days; i++) {
      if (date + i > this.state[months[month]].length) {
        highlightedDates.push([month + 1, date + i - this.state[months[month]].length]);

        if (month + 1 > secondMonth) {
          var first = secondMonth;
          var second = secondMonth + 1;
        }
      } else {
        highlightedDates.push([month, date + i]);
      }
    }

    this.setState({
      highlightedDate: [month, date],
      highlightedDates,
      // firstMonth: first,
      // secondMonth: second,
    });
  }

  handleSummaryandSelect(event) {
    const { renderSummary } = this.props;
    this.clickHandler(event);
    renderSummary(event);
  }

  render() {
    const { trip, dayHeaders, firstMonth, secondMonth, months, first, leftButtonHidden, rightButtonHidden, highlightedDate, highlightedDates } = this.state;
    const { stringifyPrice } = this.props;

    return (
      <div className="AK-container-carousel">
        <LeftButton hidden={leftButtonHidden} clickHandler={() => this.getPreviousMonths()} />
        <Month month={months[firstMonth]}
          numMonth={firstMonth}
          renderLeadingBlanks={() => this.returnLeadingEmptyDates(first[firstMonth])}
          renderTrailingBlanks={() => this.returnTrailingEmptyDates(first[firstMonth], this.getDates(firstMonth).length)}
          days={() => this.getDates(firstMonth)}
          dayHeaders={dayHeaders}
          dates={this.getDatesForMonth(months[firstMonth])}
          trip={trip}
          stringifyPrice={stringifyPrice}
          leadingBlanks={first[firstMonth]}
          handleSummaryandSelect={() => this.handleSummaryandSelect(event)}
          highlightedDate={highlightedDate}
          highlightedDates={highlightedDates}
        />
        <Month month={months[secondMonth]}
          numMonth={secondMonth}
          renderLeadingBlanks={() => this.returnLeadingEmptyDates(first[secondMonth])}
          renderTrailingBlanks={() => this.returnTrailingEmptyDates(first[secondMonth], this.getDates(secondMonth).length)}
          days={() => this.getDates(secondMonth)}
          dayHeaders={dayHeaders}
          dates={this.getDatesForMonth(months[secondMonth])}
          trip={trip}
          stringifyPrice={stringifyPrice}
          leadingBlanks={first[firstMonth]}
          handleSummaryandSelect={() => this.handleSummaryandSelect(event)}
          highlightedDate={highlightedDate}
          highlightedDates={highlightedDates}
        />
        <RightButton hidden={rightButtonHidden} clickHandler={() => this.getNextMonths()} />
      </div>
    );
  }
}
