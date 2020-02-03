import React from 'react';

export default class Month extends React.Component {
  constructor(props) {
    super(props);

    const { trip } = props;
    const { days } = trip;

    this.state = {
      numDays: days,
      highlightedBottomTop: [],
      highlightedLeft: [],
      highlightedRight: [],
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(event) {
    const { numDays } = this.state;
    const { leadingBlanks } = this.props;
    let idx = parseInt(event.currentTarget.dataset.index) + 1;
    let counter = idx + leadingBlanks;
    let highlightedBottomTop = [];
    let highlightedLeft = [];
    let highlightedRight = [];

    for (let i = 1; i < numDays; i++) {
      let remainder = (counter + i) % 7;
      if (remainder === 0) {
        highlightedRight.push(i + idx);
      } else if (remainder === 1) {
        highlightedLeft.push(i + idx);
      } else if (i === numDays - 1) {
        highlightedRight.push(i + idx);
      } else {
        highlightedBottomTop.push(i + idx);
      }
    }

    this.setState({
      highlightedBottomTop,
      highlightedLeft,
      highlightedRight,
    });
  }

  render() {
    const { trip, renderTrailingBlanks, renderLeadingBlanks, dates, days, stringifyPrice, month, dayHeaders, renderSummary, numMonth } = this.props;
    const { price, discounted } = trip;
    const { highlightedBottomTop, highlightedLeft, highlightedRight } = this.state;

    return (
      <div className="AK-container-month">
        <div className="AK-container-header-month">
          <span className="AK-text-month">{month} 2020</span>
        </div>
        <div className="AK-container-weeks">
          <div className="AK-header-days">
            {dayHeaders.map((day) => <div className="AK-container-day"><div className="AK-day">{day}</div></div>)}
          </div>
          <div className="AK-container-dates">
            {renderLeadingBlanks()}
            {days().map((day, index) => {
              if (dates.indexOf(index + 1) !== -1) {
                return (<div className={"AK-container-date-departure"} 
                data-index={index} 
                data-nummonth={numMonth} 
                onClick={this.clickHandler} 
                onClick={renderSummary}>
                  <div className="AK-text-date">{day}</div>
                  <div className={discounted ? "AK-date-pricing-discounted" : "AK-date-pricing"}>{stringifyPrice(price)}</div>
                </div>
                );
              }
              return (
                <div className={
                  (highlightedBottomTop.indexOf(index + 1) !== -1) ?
                    "AK-container-date AK-container-date-travel-bottom-top" :
                    (highlightedLeft.indexOf(index + 1) !== -1) ?
                      "AK-container-date AK-container-date-travel-left" :
                      (highlightedRight.indexOf(index + 1) !== -1) ?
                        "AK-container-date AK-container-date-travel-right" :
                        "AK-container-date"
                }
                  key={index}>
                  <div className="AK-text-date">{day}</div>
                </div>
              );
            })}
            {renderTrailingBlanks()}
          </div>
        </div>
      </div>
    );
  }
}
