/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
import React from 'react';
import axios from 'axios';
import Widget from './Widget';
import Calendar from './Calendar';
import Quote from './Quote';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      months: [null, 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      // JANUARY: [],
      // FEBRUARY: [],
      // MARCH: [],
      // APRIL: [],
      // MAY: [],
      // JUNE: [],
      // JULY: [],
      // AUGUST: [],
      // SEPTEMBER: [],
      // OCTOBER: [],
      // NOVEMBER: [],
      // DECEMBER: [],
      trip: {},
      calendar: false,
      quote: false,
    };

    this.calendarClickHandler = this.calendarClickHandler.bind(this);
    this.quoteClickHandler = this.quoteClickHandler.bind(this);
    this.homeClickHandler = this.homeClickHandler.bind(this);
    this.stringifyPrice = this.stringifyPrice.bind(this);
    this.exitQuoteHandler = this.exitQuoteHandler.bind(this);
    this.formatStartDate = this.formatStartDate.bind(this);
    this.appendToDate = this.appendToDate.bind(this);
    // this.sortDates = this.sortDates.bind(this);
  }

  componentDidMount() {
    const { id } = this.props;
    this.getOneTrip(id);
  }

  getOneTrip(id) {
    axios
      .get(`/api/calendar/${id}`)
      .then((response) => {
        this.setState({
          trip: response.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  // sortDates() {
  //   const { trip } = this.state;
  //   const { dates } = trip;

  //   let sorted = [null, [], [], [], [], [], [], [], [], [], [], [], []];

  //   dates.forEach((dateString) => {
  //     let numMonth = parseInt(dateString.slice(5, 7));
  //     let date = parseInt(dateString.slice(8, 10));

  //     sorted[numMonth].push(this.formatStartDate(numMonth, date));
  //   });

  //   this.setState({
  //     JANUARY: sorted[1],
  //     FEBRUARY: sorted[2],
  //     MARCH: sorted[3],
  //     APRIL: sorted[4],
  //     MAY: sorted[5],
  //     JUNE: sorted[6],
  //     JULY: sorted[7],
  //     AUGUST: sorted[8],
  //     SEPTEMBER: sorted[9],
  //     OCTOBER: sorted[10],
  //     NOVEMBER: sorted[11],
  //     DECEMBER: sorted[12],
  //   });
  // }

  formatStartDate(monthNum, date) {
    const { days, months } = this.state;

    let dateClass = new Date(2020, monthNum - 1, date);
    let day = days[dateClass.getDay()];
    let month = months[monthNum];
    return `${day} ${this.appendToDate(date)} ${month} `;
  }

  appendToDate(number) {
    let st = [1, 21, 31];
    let nd = [2, 22];
    let rd = [3, 23];

    if (st.indexOf(number) !== -1) {
      return number.toString() + 'st';
    }
    if (nd.indexOf(number) !== -1) {
      return number.toString() + 'nd';
    }
    if (rd.indexOf(number) !== -1) {
      return number.toString() + 'rd';
    }
    return number.toString() + 'th';
  }

  calendarClickHandler() {
    this.setState({
      calendar: true,
    });
  }

  quoteClickHandler() {
    this.setState({
      quote: true,
    });
    document.body.style.overflow = 'hidden';
  }

  homeClickHandler() {
    this.setState({
      calendar: false,
    });
  }

  exitQuoteHandler() {
    this.setState({
      quote: false,
    });
    document.body.style.overflow = 'auto';
  }

  stringifyPrice(number) {
    let priceString = '$';
    let numString = number.toString();

    if (number > 1000) {
      let thousands = numString.slice(0, 1);
      priceString += thousands + ',';
    }

    let rest = numString.slice(1);
    priceString += rest;

    return priceString;
  }

  renderCalendar() {
    const { calendar, trip } = this.state;
    if (calendar) {
      return <Calendar className="AK-component-calendar-hidden" 
                       stringifyPrice={this.stringifyPrice} 
                       trip={trip}
                       homeClickHandler={() => this.homeClickHandler()}
                       quoteClickHandler={() => this.quoteClickHandler()}
                       formatStartDate={this.formatStartDate}
                       appendToDate={this.appendToDate} />;
    }
  }

  renderQuote() {
    const { quote, trip } = this.state;
    if (quote) {
      return <Quote exitQuoteHandler={() => this.exitQuoteHandler()} 
                    trip={trip}
                    formatStartDate={this.formatStartDate}
                    appendToDate={this.appendToDate} />;
    }
  }

  render() {
    const { trip } = this.state;
    return (
      <div className="AK-page">
        {this.renderCalendar()}
        {this.renderQuote()}
        <div className="AK-container-main">
          <div className="AK-upper-box">
            <Widget clickHandler={() => this.calendarClickHandler()} 
                    trip={trip} 
                    stringifyPrice={this.stringifyPrice} 
                    quoteClickHandler={() => this.quoteClickHandler()}
            />
          </div>
          <div className="AK-lower-box">Don't miss out - save your place today</div>
        </div>
      </div>
    );
  }
}
