import React from 'react';
import SelectDate from './SelectDate';

const Quote = (props) => {
  const { exitQuoteHandler, trip, sortDates, formatStartDate, appendToDate, shrinkLabel, shrink } = props;
  return (
    <div>
      <div onClick={exitQuoteHandler} className="AK-opaque-bg-quote"></div>
      <div className="AK-component-container-quote">
        <div className="AK-container-header-quote">
          <div className="AK-text-header-quote">
            <div>Easy Quote</div>
          </div>
          <div onClick={exitQuoteHandler} className="AK-container-exit-quote">
            <img className="AK-button-img-exit-quote" src="button-X.png" alt="button-X" />
          </div>
        </div>
        <div className="AK-container-scrollable-quote">
          <div className="AK-container-image-quote">
            <img className="AK-image-quote" src="sample-img2-quote.jpg" alt="sample-image-quote" />
            <div className="AK-container-text-image-quote">
              <div className="AK-header-image-quote">{trip.title.toUpperCase()}</div>
              <div className="AK-text-image-quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
            </div>
          </div>
          <div className="AK-container-select-date">
            <div className="AK-header-select-date">Select your preferred travel date</div>
            <SelectDate trip={trip}
              sortDates={sortDates}
              formatStartDate={formatStartDate}
              appendToDate={appendToDate} />
          </div>
          <div className="AK-container-quote-form">
            <div className="AK-header-required">
              <div className="AK-text-required">
                <span>* Required</span>
              </div>
            </div>
            <div className="AK-container-form-inputs">
              <div className="AK-form-inputs-row">
                <div className="AK-container-label-input">
                  <div onClick={shrinkLabel} data-label="firstName" className={shrink === "firstName" ? "AK-form-labels AK-shrink" : "AK-form-labels"}>First name *</div>
                  <input className="AK-input-form" type="text"></input>
                </div>
                <div className="AK-container-label-input">
                  <div className="AK-form-labels">Last name *</div>
                  <input className="AK-input-form" type="text"></input>
                </div>
              </div>
              <div className="AK-form-inputs-row">
                <div className="AK-container-label-input">
                  <div className="AK-form-labels">Email address *</div>
                  <input className="AK-input-form" type="email"></input>
                </div>
                <div className="AK-container-label-input">
                  <div className="AK-form-labels">Phone Number</div>
                  <input className="AK-input-form" type="tel"></input>
                </div>
              </div>
            </div>
          </div>
          <div className="AK-container-submit-form">
            <img className="AK-button-submit" src="button_red_submit.png" alt="button_submit"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
