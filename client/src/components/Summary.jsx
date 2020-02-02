import React from 'react';
import LargeWidget from './LargeWidget';

export default class Summary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      months: [null, 'January', 'February', 'March', 'April', 'May', 'June', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    };
  }

  appendToDate(number) {
    let st = [1, 21, 31];
    let nd = [2, 22];
    let rd = [3, 23];

    if (st.indexOf(number) !== -1) {
      return number.toString() + 'st';
    }
    if (nd.indexOf(number) !== -1) {
      return number.toString() + 'nd';
    }
    if (rd.indexOf(number) !== -1) {
      return number.toString() + 'rd';
    }
    return number.toString() + 'th';
  }
  
  getEndingDate(monthNum, date) {
    const { days } = this.props;

    let dateClass = new Date(2020, monthNum - 1, date + days - 2);
    let day = this.state.days[dateClass.getDay()];
    date = dateClass.getDate() + 1;
    let month = this.state.months[dateClass.getMonth() + 1];
    return `${day} ${this.appendToDate(date)} ${month}`;
  }

  render() {
    const { trip, day, monthNum, date } = this.props;
    const { title, city } = trip;
    const { months, days } = this.state;

    return (
      <div className="AK-container-summary">
        <div className="AK-container-header-summary">
          <div className="AK-header-summary">
            <div className="AK-text1-summary">Step 2</div>
            <div className="AK-text2-summary">Your trip summary</div>
          </div>
        </div>
        <div className="AK-container-content-summary">
          <div className="AK-container-start-end">
            <div className="AK-header-start-end">{title}</div>
            <div className="AK-container-inner-start-end">
              <img className="AK-icon-start-end" src="start-end-icon.png" alt="start-end-icon" />
              <div className="AK-container-text-start-end">
                <div className="AK-text1-start-end">START</div>
                <div className="AK-text2-start-end">
                  {`${days[day]} `}
                  {`${this.appendToDate(date)} `}
                  {`${months[monthNum]} `}
                  {'2020, '} 
                  {city}</div>
                <div className="AK-text1-start-end">END</div>
                <div className="AK-text2-start-end">{this.getEndingDate(monthNum, date)} {'2020, '} {city}</div>
              </div>
            </div>
          </div>
          <div className="AK-container-payment">
            <LargeWidget trip={trip} />
          </div>
        </div>
      </div>
    );
  }
}
