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

  renderSummary() {
    this.setState({
      summaryVisible: true,
    }, () => {
      this.setState({
        clicked: true,
      });
    });
  }

  render() {
    const { trip, stringifyPrice } = this.props;
    const { summaryVisible } = this.state;

    return (
      <div className="AK-container-scroll">
        <div className="AK-middle-section">
          <div className="AK-step1">STEP 1</div>
          <div className="AK-select-dates-header">Select your dates</div>
        </div>
        <Legend />
        <Carousel renderSummary={() => this.renderSummary()} stringifyPrice={stringifyPrice} trip={trip} />
        {summaryVisible ? <Summary ref={this.summaryRef} trip={trip} /> : null}
      </div>
    );
  }
}
