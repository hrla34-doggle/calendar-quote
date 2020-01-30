/* eslint-disable no-console */
import React from 'react';
import axios from 'axios';
import Widget from './Widget.jsx';
import Calendar from './Calendar.jsx';

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
    if (this.state.calendar) {
      return <Calendar />;
    }
  }

  render() {
    return (
      <div className="AK-page">
        {this.renderCalendar()}
        <div className="container">
          <div className="upper-box">
            <Widget clickHandler={() => this.calendarClickHandler()} trip={this.state.trip} />
          </div>
          <div className="lower-box">Don't miss out - save your place today</div>
        </div>
      </div>

    );
  }
}
