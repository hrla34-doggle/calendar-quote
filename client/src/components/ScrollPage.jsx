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
      summaryVisible: false,
      clicked: false,
      day: null,
      monthNum: null,
      date: null,
      carousel: true,
      list: false,
    };

    this.renderSummary = this.renderSummary.bind(this);
    this.summaryRef = React.createRef();
    this.switchToCarousel = this.switchToCarousel.bind(this);
    this.switchToList = this.switchToList.bind(this);
  }

  componentDidUpdate() {
    const { summaryVisible, clicked } = this.state;
    if (summaryVisible && !clicked) {
      ReactDOM.findDOMNode(this.summaryRef.current).scrollIntoView({ behavior: 'smooth' });
    }
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
    }, () => {
      this.setState({
        clicked: true,
      });
    });
  }

  render() {
    const { trip, stringifyPrice } = this.props;
    const { summaryVisible, day, monthNum, date, carousel, list } = this.state;

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
                    <List /> }
        {summaryVisible ? <Summary ref={this.summaryRef} 
                                   trip={trip} 
                                   day={day} 
                                   monthNum={monthNum} 
                                   date={date} 
                                   days={trip.days} /> : 
                          null}
      </div>
    );
  }
}
