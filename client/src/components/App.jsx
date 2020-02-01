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

  renderCalendar() {
    const { calendar, trip } = this.state;
    if (calendar) {
      return <Calendar trip={trip} />;
    }
  }

  render() {
    const { trip } = this.state;
    return (
      <div className="AK-page">
        {this.renderCalendar()}
        <div className="AK-container-main">
          <div className="AK-upper-box">
            <Widget clickHandler={() => this.calendarClickHandler()} trip={trip} />
          </div>
          <div className="AK-lower-box">Don't miss out - save your place today</div>
        </div>
      </div>
    );
  }
}
