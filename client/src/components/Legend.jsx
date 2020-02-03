import React from 'react';
import CalendarIcon from './CalendarIcon';
import ListIcon from './ListIcon';

export default class Legend extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      calendar: true,
      list: false,
    };

    this.switchCalendar = this.switchCalendar.bind(this);
    this.switchList = this.switchList.bind(this);
  }

  switchList() {
    const { calendar } = this.state;
    const { switchToList } = this.props;
    if (calendar) {
      this.setState({
        calendar: false,
        list: true,
      }, () => switchToList());
    }
  }

  switchCalendar() {
    const { list } = this.state;
    const { switchToCarousel } = this.props;
    if (list) {
      this.setState({
        calendar: true,
        list: false,
      }, () => switchToCarousel());
    }
  }

  render() {
    const { calendar, list } = this.state;
    const { switchToList, switchToCarousel } = this.props;
    return (
      <div className="AK-container-legend">
        <div className="AK-key">KEY</div>
        <div className="AK-tooltip1">
          <img className="AK-legend-img" src="limited_availability.png" alt="limited_availability" />
          <div className="AK-legend-txt">Limited Availability</div>
          <span className="AK-tooltiptext1">Hurry, seats are limited on this departure</span>
        </div>
        <div className="AK-tooltip2">
          <img className="AK-legend-img" src="1_seat_left.png" alt="1_seat_left" />
          <div className="AK-legend-txt">One Seat Left</div>
          <span className="AK-tooltiptext2">Don't miss out, only one seat left on this departure</span>
        </div>
        <div className="AK-tooltip3">
          <img className="AK-legend-img" src="definitive_departure.png" alt="definitive_departure" />
          <div className="AK-legend-txt">Definitive Departure</div>
          <span className="AK-tooltiptext3">We guarantee our trips will depart (weather and other conditions dependent, of course) as soon as enough guests are booked</span>
        </div>
        <div className="AK-tooltip4">
          <img className="AK-legend-img" src="deals_available.png" alt="deals_available" />
          <div className="AK-legend-txt">Deals Available</div>
          <span className="AK-tooltiptext4">When you see the price in red, there is a discount applied to the trip</span>
        </div>
        <div className="AK-container-view">
          <div className="AK-view-text">View</div>
          <CalendarIcon selected={calendar} clickHandler={() => this.switchCalendar()} />
          <ListIcon selected={list} clickHandler={() => this.switchList()} />
        </div>
      </div>
    );
  }
}
