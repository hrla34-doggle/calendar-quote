import React from 'react';

export default class Month extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // numDays: days,
      // highlightedMonth1: [],
      // highlightedMonth2: [],
    };

    // this.clickHandler = this.clickHandler.bind(this);
  }

  // clickHandler(event) {
  //   const { numDays } = this.state;
  //   let date = parseInt(event.currentTarget.dataset.index) + 1;
  //   let month = parseInt(event.currentTarget.dataset.nummonth) + 1;
  //   let highlightedMonth1 = [];
  //   let highlightedMonth2 = [];

  //   for (let i = 1; i < numDays; i++) {
  //     let remainder = (counter + i) % 7;
  //     if (remainder === 0) {
  //       highlightedRight.push(i + idx);
  //     } else if (remainder === 1) {
  //       highlightedLeft.push(i + idx);
  //     } else if (i === numDays - 1) {
  //       highlightedRight.push(i + idx);
  //     } else {
  //       highlightedBottomTop.push(i + idx);
  //     }
  //   }

  //   this.setState({
  //     highlightedBottomTop,
  //     highlightedLeft,
  //     highlightedRight,
  //   });
  // }

  render() {
    const { trip, renderTrailingBlanks, renderLeadingBlanks, dates, days, stringifyPrice, month, dayHeaders, numMonth, handleSummaryandSelect, highlightedDate, highlightedDates } = this.props;
    const { price, discounted } = trip;

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
                return (<div className={highlightedDate[0] === numMonth && highlightedDate[1] === (index + 1) ? "AK-container-date-departure AK-container-date-departure-selected" : "AK-container-date-departure"}
                  data-index={index}
                  data-nummonth={numMonth}
                  onClick={handleSummaryandSelect}>
                  <div className="AK-text-date">{day}</div>
                  <div className={discounted ? "AK-date-pricing-discounted" : "AK-date-pricing"}>{stringifyPrice(price)}</div>
                </div>
                );
              }
              // { highlightedDates ?
              //   highlightedDates.forEach((date) => {
              //     if (date[0] === month && date[1] === index + 1) {
              //       return (
              //         <div className="AK-container-date" key={index}>
              //           <div className="AK-text-date">{day}</div>
              //         </div>
              //       );
              //     }
              //   }) :
              //    (
              return (
                <div className="AK-container-date" key={index}>
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
