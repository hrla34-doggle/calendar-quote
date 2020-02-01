/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
import React from 'react';
import axios from 'axios';
import Widget from './Widget';
import Calendar from './Calendar';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      trip: {},
      calendar: false,
    };

    this.calendarClickHandler = this.calendarClickHandler.bind(this);
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
      return <Calendar stringifyPrice={this.stringifyPrice} trip={trip} />;
    }
  }

  render() {
    const { trip } = this.state;
    return (
      <div className="AK-page">
        {this.renderCalendar()}
        <div className="AK-container-main">
          <div className="AK-upper-box">
            {/* <Widget clickHandler={() => this.calendarClickHandler()} trip={trip} priceString={this.stringifyPrice(price)} /> */}
            <Widget clickHandler={() => this.calendarClickHandler()} 
                    trip={trip} 
                    stringifyPrice={this.stringifyPrice} 
            />
          </div>
          <div className="AK-lower-box">Don't miss out - save your place today</div>
        </div>
      </div>
    );
  }
}
