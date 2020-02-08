import React from 'react';
import ReactDOM from 'react-dom';
import Legend from './Legend';
import Carousel from './Carousel';
import Summary from './Summary';
import List from './List';

export default class ScrollPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      months: [null, 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      summaryVisible: false,
      clicked: false,
      day: null,
      monthNum: null,
      date: null,
      carousel: true,
      list: false,
      checkedDate: null,
      checkedMonth: null,
    };

    this.renderSummary = this.renderSummary.bind(this);
    this.summaryRef = React.createRef();
    this.switchToCarousel = this.switchToCarousel.bind(this);
    this.switchToList = this.switchToList.bind(this);
    this.getEndingDate = this.getEndingDate.bind(this);
    this.checkHandler = this.checkHandler.bind(this);
  }

  componentDidUpdate() {
    const { summaryVisible, clicked } = this.state;
    if (summaryVisible && !clicked) {
      ReactDOM.findDOMNode(this.summaryRef.current).scrollIntoView({ behavior: 'smooth' });
    }
  }

  getEndingDate(monthNum, date) {
    const { trip, appendToDate } = this.props;
    const { days } = trip;

    let dateClass = new Date(2020, monthNum - 1, date + days - 1);
    let day = this.state.days[dateClass.getDay()];
    date = dateClass.getDate();
    let month = this.state.months[dateClass.getMonth() + 1];
    return `${day} ${appendToDate(date)} ${month}`;
  }

  checkHandler(event) {
    let date = parseInt(event.target.dataset.date);
    let monthNum = parseInt(event.target.dataset.nummonth);
    let dateClass = new Date(2020, monthNum - 1, date);
    let day = dateClass.getDay();

    this.setState({
      summaryVisible: true,
      day,
      monthNum,
      date,
      checkedDate: date,
      checkedMonth: monthNum,
    }, () => {
      this.setState({
        clicked: true,
      });
    });
  }

  switchToList() {
    const { carousel } = this.state;

    if (carousel) {
      this.setState({
        carousel: false,
        list: true,
      });
    }
  }

  switchToCarousel() {
    const { list } = this.state;

    if (list) {
      this.setState({
        carousel: true,
        list: false,
      });
    }
  }

  renderSummary(event) {
    let date = parseInt(event.target.dataset.index) + 1;
    let monthNum = parseInt(event.target.dataset.nummonth);
    let dateClass = new Date(2020, monthNum - 1, date);
    let day = dateClass.getDay();

    this.setState({
      summaryVisible: true,
      day,
      monthNum,
      date,
      checkedDate: date,
      checkedMonth: monthNum,
    }, () => {
      this.setState({
        clicked: true,
      });
    });
  }

  render() {
    const { trip, stringifyPrice, quoteClickHandler, formatStartDate, appendToDate } = this.props;
    const { summaryVisible, day, monthNum, date, carousel, checkedDate, checkedMonth } = this.state;
    const { dates } = trip;

    return (
      <div className="AK-container-scroll">
        <div className="AK-middle-section">
          <div className="AK-step1">STEP 1</div>
          <div className="AK-select-dates-header">Select your dates</div>
        </div>
        <Legend switchToCarousel={() => this.switchToCarousel()}
          switchToList={() => this.switchToList()} />
        {carousel ? <Carousel renderSummary={() => this.renderSummary(event)}
          stringifyPrice={stringifyPrice}
          trip={trip} /> :
          <List dates={dates}
                formatStartDate={formatStartDate}
                getEndingDate={this.getEndingDate}
                trip={trip}
                stringifyPrice={stringifyPrice}
                checkHandler={() => this.checkHandler(event)}
                checkedDate={checkedDate}
                checkedMonth={checkedMonth} />}
        {summaryVisible ? <Summary ref={this.summaryRef}
          trip={trip}
          day={day}
          monthNum={monthNum}
          date={date}
          days={trip.days}
          getEndingDate={this.getEndingDate}
          appendToDate={appendToDate}
          formatStartDate={formatStartDate}
          stringifyPrice={stringifyPrice}
          quoteClickHandler={quoteClickHandler} /> :
          null}
      </div>
    );
  }
}
