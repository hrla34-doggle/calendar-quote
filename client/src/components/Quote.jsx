import React from 'react';
import SelectDate from './SelectDate';

const Quote = (props) => {
  const { trip, 
          sortDates, 
          formatStartDate, 
          appendToDate, 
          shrinkHandler, 
          selected, 
          selectPhone, 
          clickAreaCode, 
          areaCode, 
          selectedCountry, 
          selectCountry, 
          onChangeHandler, 
          textArea, 
          isAgent, 
          hasAgent, 
          loyalty, 
          subscribe,
          toggleCheck,
          exitQuoteHandler } = props;
  return (
    <div id="quote" className="AK-quote-invisible">
      <div onClick={exitQuoteHandler} className="AK-opaque-bg-quote"></div>
      <div className="AK-component-container-quote">
        <div className="AK-container-header-quote">
          <div className="AK-text-header-quote">
            <div>Easy Quote</div>
          </div>
          <div onClick={exitQuoteHandler} className="AK-container-exit-quote">
            <img className="AK-button-img-exit-quote" src="https://calendar-trips.s3-us-west-1.amazonaws.com/button-X.png" alt="button-X" />
          </div>
        </div>
        <div className="AK-container-scrollable-quote">
          <div className="AK-container-image-quote">
            <img className="AK-image-quote" src="https://calendar-trips.s3-us-west-1.amazonaws.com/sample-img2-quote.jpg" alt="sample-image-quote" />
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
                  <div id="AK-input1" className="AK-form-labels">First name *</div>
                  <input data-id="AK-input1" onClick={shrinkHandler} onKeyPress={shrinkHandler} className={selected === "AK-input1" ? "AK-input-form AK-input-form-selected" : "AK-input-form"} type="text"></input>
                </div>
                <div className="AK-container-label-input">
                  <div id="AK-input2" className="AK-form-labels">Last name *</div>
                  <input data-id="AK-input2" onClick={shrinkHandler} onKeyPress={shrinkHandler} className={selected === "AK-input2" ? "AK-input-form AK-input-form-selected" : "AK-input-form"} type="text"></input>
                </div>
              </div>
              <div className="AK-form-inputs-row">
                <div className="AK-container-label-input">
                  <div id="AK-input3" className="AK-form-labels">Email address *</div>
                  <input data-id="AK-input3" onClick={shrinkHandler} onKeyPress={shrinkHandler} className={selected === "AK-input3" ? "AK-input-form AK-input-form-selected" : "AK-input-form"} type="email"></input>
                </div>
                <div className="AK-container-label-input-2">
                  <div className="AK-form-labels-phone">Contact number</div>
                  <div id="AK-input4" className={selected === "AK-input4" ? "AK-phone-number-wrapper-row AK-input-form-selected2" : "AK-phone-number-wrapper-row"}>
                    <div className="AK-container-area-code-selector">
                      <div onClick={clickAreaCode} className="AK-area-code-dropdown-selector">
                        <img className="AK-image-country" src={`https://calendar-trips.s3-us-west-1.amazonaws.com/flag${selectedCountry}.png`} alt="flag"></img>
                        <div className="AK-number-country">{selectedCountry}</div>
                        <img className="AK-button-down" src="https://calendar-trips.s3-us-west-1.amazonaws.com/down_button.png" alt="down_button"></img>
                      </div>
                      {areaCode ?
                        <div className="AK-container-dropdown-country">
                          <div onClick={selectCountry} data-country="1" className="AK-container-option-country">
                            <img className="AK-image-country" src="https://calendar-trips.s3-us-west-1.amazonaws.com/flag1.png" alt="US_flag"></img>
                            <div className="AK-number-country">1</div>
                            <div className="AK-text-country">United States</div>
                          </div>
                          <div onClick={selectCountry} data-country="82" className="AK-container-option-country">
                            <img className="AK-image-country" src="https://calendar-trips.s3-us-west-1.amazonaws.com/flag82.png" alt="Best_Korea_flag"></img>
                            <div className="AK-number-country">82</div>
                            <div className="AK-text-country">Korea Republic of</div>
                          </div>
                          <div onClick={selectCountry} data-country="353" className="AK-container-option-country">
                            <img className="AK-image-country" src="https://calendar-trips.s3-us-west-1.amazonaws.com/flag353.png" alt="Best_Korea_flag"></img>
                            <div className="AK-number-country">353</div>
                            <div className="AK-text-country">Ireland</div>
                          </div>
                          <div onClick={selectCountry} data-country="886" className="AK-container-option-country">
                            <img className="AK-image-country" src="https://calendar-trips.s3-us-west-1.amazonaws.com/flag886.png" alt="Taiwan_flag"></img>
                            <div className="AK-number-country">886</div>
                            <div className="AK-text-country">Taiwan</div>
                          </div>
                        </div> : null
                      }
                    </div>
                    <input data-id="AK-input4" onClick={selectPhone} onKeyPress={selectPhone} className="AK-input-form-2" type="number"></input>
                  </div>
                </div>
              </div>
              <div className="AK-container-text-box">
                <div className="AK-header-text-box">{`Additional Information ${textArea.length}/400`}</div>
                <textarea id="AK-input5" onClick={selectPhone} onKeyPress={selectPhone} onChange={onChangeHandler} className={selected === "AK-input5" ? "AK-textarea-text-box AK-input-form-selected" : "AK-textarea-text-box"}
                       placeholder="i.e. Where are you looking to go, what do you want to see, how many days,
                                    number of travelers, etc. Please provide your airport gateway if you'd like
                                    airfare included in your quote."
                       maxLength="400"></textarea>
              </div>
            </div>
            <div className="AK-container-checked-options-quote">
              <div className="AK-row-checked-options-quote">
                <img onClick={toggleCheck} data-box="hasAgent" data-selected={hasAgent} className="AK-img-checked-options-quote" src={ hasAgent ? "https://calendar-trips.s3-us-west-1.amazonaws.com/checkbox_3_selected.png" : "https://calendar-trips.s3-us-west-1.amazonaws.com/checkbox_3_unselected.png"} alt="checkbox-3"></img>
                <div className="AK-txt-checked-options-quote">Working with travel agent</div>
                <img onClick={toggleCheck} data-box="isAgent" data-selected={isAgent} className="AK-img-checked-options-quote" src={ isAgent ? "https://calendar-trips.s3-us-west-1.amazonaws.com/checkbox_3_selected.png" : "https://calendar-trips.s3-us-west-1.amazonaws.com/checkbox_3_unselected.png"} alt="checkbox-3"></img>
                <div className="AK-txt-checked-options-quote">A travel agent</div>
              </div>
              <div className="AK-row-checked-options-quote">
                <img onClick={toggleCheck} data-box="loyalty" data-selected={loyalty} className="AK-img-checked-options-quote" src={ loyalty ? "https://calendar-trips.s3-us-west-1.amazonaws.com/checkbox_3_selected.png" : "https://calendar-trips.s3-us-west-1.amazonaws.com/checkbox_3_unselected.png"} alt="checkbox-3"></img>
                <div className="AK-txt-checked-options-quote">I have traveled with Trafalgar before</div>
              </div>
              <div className="AK-row-checked-options-quote">
                <img onClick={toggleCheck} data-box="subscribe" data-selected={subscribe} className="AK-img-checked-options-quote" src={ subscribe ? "https://calendar-trips.s3-us-west-1.amazonaws.com/checkbox_3_selected.png" : "https://calendar-trips.s3-us-west-1.amazonaws.com/checkbox_3_unselected.png"} alt="checkbox-3"></img>
                <div className="AK-txt-checked-options-quote">Keep me updated on the latest Trafalgar news, deals and latest trips</div>
              </div>
            </div>
            <div className="AK-footer-quote">
              <div className="AK-text-footer-quote">
                Your privacy is important to us. Your information will be used for the purpose of this request only and will not be used for any other purpose.
                If you are a Californian resident and wish to find out more about the CCPA, please visit our CCPA Privacy Policy.
              </div>
              <div className="AK-container-links-footer-quote">
                <u className="AK-link-footer-quote">Privacy Policy</u>
                <u className="AK-link-footer-quote">Cookie Policy</u>
              </div>
            </div>
          </div>
          <div className="AK-container-submit-form">
            <img className="AK-button-submit" src="https://calendar-trips.s3-us-west-1.amazonaws.com/button_red_submit.png" alt="button_submit"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
