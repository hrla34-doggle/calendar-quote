import React from 'react';
import ReactDOM from 'react-dom';
import Legend from './Legend';
import Carousel from './Carousel';
import Summary from './Summary';

export default class ScrollPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      summaryVisible: false,
      clicked: false,
      day: null,
      monthNum: null,
      date: null
    };

    this.renderSummary = this.renderSummary.bind(this);
    this.summaryRef = React.createRef();
  }

  componentDidUpdate() {
    const { summaryVisible, clicked } = this.state;
    if (summaryVisible && !clicked) {
      ReactDOM.findDOMNode(this.summaryRef.current).scrollIntoView({ behavior: 'smooth' });
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
    }, () => {
      this.setState({
        clicked: true,
      });
    });
  }

  render() {
    const { trip, stringifyPrice } = this.props;
    const { summaryVisible, day, monthNum, date } = this.state;

    return (
      <div className="AK-container-scroll">
        <div className="AK-middle-section">
          <div className="AK-step1">STEP 1</div>
          <div className="AK-select-dates-header">Select your dates</div>
        </div>
        <Legend />
        <Carousel renderSummary={() => this.renderSummary(event)} stringifyPrice={stringifyPrice} trip={trip} />
        {summaryVisible ? <Summary ref={this.summaryRef} trip={trip} day={day} monthNum={monthNum} date={date} days={trip.days} /> : null}
      </div>
    );
  }
}
