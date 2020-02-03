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
      trip: {},
      calendar: false,
      quote: false,
    };

    this.calendarClickHandler = this.calendarClickHandler.bind(this);
    this.quoteClickHandler = this.quoteClickHandler.bind(this);
    this.homeClickHandler = this.homeClickHandler.bind(this);
    this.stringifyPrice = this.stringifyPrice.bind(this);
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
    const { calendar, trip, quote } = this.state;
    if (calendar) {
      return <Calendar className="AK-component-calendar-hidden" 
                       stringifyPrice={this.stringifyPrice} 
                       trip={trip}
                       homeClickHandler={() => this.homeClickHandler()}
                       quoteClickHandler={() => this.quoteClickHandler()} />;
    }
  }

  renderQuote() {
    const { quote } = this.state;
    if (quote) {
      return <Quote />;
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
