/* eslint-disable class-methods-use-this */
import React from 'react';
import Month from './Month';
import LeftButton from './LeftButton';
import RightButton from './RightButton';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      leftButtonHidden: true,
      rightButtonHidden: false,
      trip: props.trip,
      dates: props.trip.dates,
      firstMonth: 1,
      secondMonth: 2,
      months: [null, 'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'],
      days: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
      first: [null, 3, 6, 0, 3, 5, 1, 3, 6, 2, 4, 0, 2],
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
    };

    this.getDates = this.getDates.bind(this);
    this.returnLeadingEmptyDates = this.returnLeadingEmptyDates.bind(this);
    this.returnTrailingEmptyDates = this.returnTrailingEmptyDates.bind(this);
    this.getNextMonths = this.getNextMonths.bind(this);
    this.getPreviousMonths = this.getPreviousMonths.bind(this);
  }

  componentDidMount() {
    this.getMonths();
  }

  getDates(numMonth) {
    let month = this.state.months[numMonth];
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
    });

    if (renderedFirstMonth && renderedSecondMonth) {
      this.setState({
        firstMonth: renderedFirstMonth,
        secondMonth: renderedSecondMonth,
        rightButtonHidden: rightButtonHidden,
        leftButtonHidden: false,
      });
    }
  }

  getPreviousMonths() {
    const { dates, firstMonth } = this.state;
    let renderedFirstMonth = null;
    let renderedSecondMonth = null;
    let leftButtonHidden = false;
    const dates_reversed = dates.reverse();

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
    });

    if (renderedFirstMonth && renderedSecondMonth) {
      this.setState({
        firstMonth: renderedFirstMonth,
        secondMonth: renderedSecondMonth,
        leftButtonHidden: leftButtonHidden,
        rightButtonHidden: false,
      });
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

  render() {
    const { days, firstMonth, secondMonth, months, first, leftButtonHidden, rightButtonHidden } = this.state;
    return (
      <div className="AK-container-carousel">
        <LeftButton hidden={leftButtonHidden} clickHandler={() => this.getPreviousMonths()} />
        <Month month={months[firstMonth]}
          renderLeadingBlanks={() => this.returnLeadingEmptyDates(first[firstMonth])}
          renderTrailingBlanks={() => this.returnTrailingEmptyDates(first[firstMonth], this.getDates(firstMonth).length)}
          dates={() => this.getDates(firstMonth)}
          days={days}
        />
        <Month month={months[secondMonth]}
          renderLeadingBlanks={() => this.returnLeadingEmptyDates(first[secondMonth])}
          renderTrailingBlanks={() => this.returnTrailingEmptyDates(first[secondMonth], this.getDates(secondMonth).length)}
          dates={() => this.getDates(secondMonth)}
          days={days}
        />
        <RightButton hidden={rightButtonHidden} clickHandler={() => this.getNextMonths()} />
      </div>
    );
  }
}
