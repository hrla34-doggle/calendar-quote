/* eslint-disable class-methods-use-this */
import React from 'react';
import Month from './Month';
import LeftButton from './LeftButton';
import RightButton from './RightButton';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentMonth: 1,
      months: [null, 'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'],
      days: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
      first: [null, 5, 1, 1, 4, 6, 2, 4, 0, 3, 5, 1, 3],
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
    // this.returnCurrentMonth = this.returnCurrentMonth.bind(this);
    this.returnLeadingEmptyDates = this.returnLeadingEmptyDates.bind(this);
    this.returnTrailingEmptyDates = this.returnTrailingEmptyDates.bind(this);
  }

  componentDidMount() {
    this.getCurrentMonth();
  }

  getDates(numMonth) {
    let month = this.state.months[numMonth];
    return this.state[month];
  }

  getCurrentMonth() {
    let date = new Date();
    let month = date.getMonth() + 1;
    this.setState({
      currentMonth: month,
    });
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
    let render = [];
    for (let i = 0; i < trailing; i++) {
      render.push(null);
    }
    return render.map((x) => <div className="AK-date-blank" />);
  }

  render() {
    const { days, currentMonth, months, first } = this.state;
    return (
      <div className="AK-container-carousel">
        <LeftButton />
        {/* <Month month={months[currentMonth]} dates={() => this.getDates(this.returnCurrentMonth())} days={days} /> */}
        <Month month={months[currentMonth]} renderLeadingBlanks={() => this.returnLeadingEmptyDates(first[currentMonth])} renderTrailingBlanks={() => this.returnTrailingEmptyDates(first[currentMonth], this.getDates(currentMonth).length)} dates={() => this.getDates(currentMonth)} days={days} />
        <Month month={months[currentMonth + 1]} renderLeadingBlanks={() => this.returnLeadingEmptyDates(first[currentMonth + 1])} renderTrailingBlanks={() => this.returnTrailingEmptyDates(first[currentMonth + 1], this.getDates(currentMonth + 1).length)} dates={() => this.getDates(currentMonth + 1)} days={days} />
        <RightButton />
      </div>
    );
  }
}
