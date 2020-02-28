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
      trip: {},
      calendar: false,
      quote: false,
      selected: null,
      areaCode: false,
      selectedCountry: 886,
      textArea: '',
      hasAgent: false,
      isAgent: false,
      loyalty: false,
      subscribe: true,
    };

    this.calendarClickHandler = this.calendarClickHandler.bind(this);
    this.quoteClickHandler = this.quoteClickHandler.bind(this);
    this.homeClickHandler = this.homeClickHandler.bind(this);
    this.stringifyPrice = this.stringifyPrice.bind(this);
    this.exitQuoteHandler = this.exitQuoteHandler.bind(this);
    this.formatStartDate = this.formatStartDate.bind(this);
    this.appendToDate = this.appendToDate.bind(this);
    this.shrinkHandler = this.shrinkHandler.bind(this);
    this.selectPhone = this.selectPhone.bind(this);
    this.clickAreaCode = this.clickAreaCode.bind(this);
    this.selectCountry = this.selectCountry.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.toggleCheck = this.toggleCheck.bind(this);
    this.calendarFadeIn = this.calendarFadeIn.bind(this);
    this.fadeInAndRenderCalendar = this.fadeInAndRenderCalendar.bind(this);
    this.quoteFadeIn = this.quoteFadeIn.bind(this);
    this.fadeInAndRenderQuote = this.fadeInAndRenderQuote.bind(this);
    this.calendarFadeOut = this.calendarFadeOut.bind(this);
    this.quoteFadeOut = this.quoteFadeOut.bind(this);
  }

  componentDidMount() {
    let URL = window.location.href;
    let array = URL.split('/');
    let id = array[array.length - 1];
    this.getOneTrip(id);
  }

  getOneTrip(id) {
    axios
      .get(`/api/calendar/9999999`)
      .then((response) => {
        this.setState({
          trip: response.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

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

  onChangeHandler(event) {
    let textArea = event.target.value;

    this.setState({
      textArea,
    });
  }

  toggleCheck(event) {
    let box = event.target.dataset.box;
    let selected = event.target.dataset.selected;
    if (selected === "false") {
      selected = false;
    } else {
      selected = true;
    }
    this.setState({
      [box]: !selected,
    }, () => console.log(this.state));
  }

  homeClickHandler() {
    this.calendarFadeOut();
    setTimeout(() => {
      this.setState({
        calendar: false,
      });
    }, 1000);
    document.body.style.overflow = 'auto';
  }

  exitQuoteHandler() {
    this.quoteFadeOut();
    setTimeout(() => {
      this.setState({
        quote: false,
      });
    }, 1000);
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

  shrinkHandler(event) {
    let id = event.target.dataset.id;

    document.getElementById(id).style.top = 0;
    if (id === 'AK-input3') {
      document.getElementById(id).style.marginLeft = '-4.9%';
    } else {
      document.getElementById(id).style.marginLeft = '-3.5%';
    }
    document.getElementById(id).style.transform = 'scale(0.7, 0.7)';

    this.setState({
      selected: id,
    });
  }

  selectPhone(event) {
    console.log(event.target.dataset.id);
    let id = event.target.dataset.id;

    this.setState({
      selected: id,
    });
  }

  clickAreaCode() {
    const { areaCode } = this.state;

    if (!areaCode) {
      this.setState({
        areaCode: true,
      });
    } else {
      this.setState({
        areaCode: false,
      }, () => this.renderQuote());
    }
  }

  selectCountry(event) {
    console.log(event.target.dataset.country);
    let selectedCountry = parseInt(event.target.dataset.country);

    this.setState({
      selectedCountry,
    }, () => {
      this.setState({
        areaCode: false,
      });
    });
  }

  calendarFadeIn() {
    setTimeout(() => document.getElementById('calendar').className="AK-container-calendar-page AK-fade-in", 5);
  }

  quoteFadeIn() {
    setTimeout(() => document.getElementById('quote').className="AK-quote-invisible AK-quote-visible", 5);
  }

  calendarFadeOut() {
    document.getElementById('calendar').className="AK-container-calendar-page AK-fade-out";
  }

  quoteFadeOut() {
    document.getElementById('quote').className="AK-quote-invisible";
  }

  fadeInAndRenderCalendar() {
    this.calendarClickHandler();
    this.calendarFadeIn();
  }

  fadeInAndRenderQuote() {
    this.quoteClickHandler();
    this.quoteFadeIn();
  }

  renderCalendar() {
    const { calendar, trip } = this.state;

    if (calendar) {
      return <Calendar stringifyPrice={this.stringifyPrice} 
                       trip={trip}
                       formatStartDate={this.formatStartDate}
                       appendToDate={this.appendToDate}
                       fadeInAndRenderQuote={this.fadeInAndRenderQuote}
                       homeClickHandler={this.homeClickHandler}
             />;
    }
  }

  renderQuote() {
    const { quote, trip, selected, areaCode, selectedCountry, textArea, isAgent, hasAgent, loyalty, subscribe } = this.state;
    if (quote) {
      return <Quote trip={trip}
                    formatStartDate={this.formatStartDate}
                    appendToDate={this.appendToDate}
                    shrinkHandler={() => this.shrinkHandler(event)}
                    selected={selected}
                    selectPhone={() => this.selectPhone(event)}
                    clickAreaCode={() => this.clickAreaCode()}
                    areaCode={areaCode}
                    selectedCountry={selectedCountry}
                    selectCountry={() => this.selectCountry(event)}
                    onChangeHandler={() => this.onChangeHandler(event)}
                    textArea={textArea}
                    isAgent={isAgent}
                    hasAgent={hasAgent}
                    loyalty={loyalty}
                    subscribe={subscribe}
                    toggleCheck={() => this.toggleCheck(event)}
                    exitQuoteHandler={this.exitQuoteHandler}
             />;
    }
  }

  render() {
    console.log(this.state.trip);
    const { trip } = this.state;
    return (
      <div className="AK-page">
        {this.renderCalendar()}
        {this.renderQuote()}
        <div className="AK-container-main">
          <div className="AK-upper-box">
            <Widget trip={trip} 
                    stringifyPrice={this.stringifyPrice} 
                    // quoteClickHandler={() => this.quoteClickHandler()}
                    fadeInAndRenderCalendar={() => this.fadeInAndRenderCalendar()}
                    fadeInAndRenderQuote={() => this.fadeInAndRenderQuote()}
            />
          </div>
          <div className="AK-lower-box">Don't miss out - save your place today</div>
        </div>
      </div>
    );
  }
}
