import React from 'react';
import Legend from './Legend';
import Carousel from './Carousel';
import Summary from './Summary';

export default class ScrollPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      summaryVisible: false,
    };

    this.renderSummary = this.renderSummary.bind(this);
  }

  renderSummary() {
    this.setState({
      summaryVisible: true,
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
        {summaryVisible ? <Summary trip={trip} /> : null}
      </div>
    );
  }
}
