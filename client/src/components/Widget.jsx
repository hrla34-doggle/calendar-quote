import React from 'react';

const Widget = (props) => {
  const { clickHandler, trip, stringifyPrice, quoteClickHandler } = props;
  const { code, price, msrp, reviews, discounted } = trip;

  if (price) {
    var priceString = stringifyPrice(price);
    var msrpString = stringifyPrice(msrp);
  }

  return (
    <div className="AK-widget-box">
      <div className="AK-trip-code">Trip code {code}</div>
      <div className="AK-container-pricing">
        <div className="AK-price">
          {discounted ? <div className="AK-pricing-text">FROM</div> : null}
          {discounted ? <div className="AK-currency1">{priceString}</div> : <div className="AK-currency1">{priceString} pp</div>}
        </div>
        {discounted ?
        <div className="AK-msrp">
          <div className="AK-pricing-text">WAS</div>
          <strike className="AK-currency2">{msrpString}</strike>
        </div> : null
        }
        {discounted ?
        <div className="AK-savings">
          <div className="AK-container-img">
            <img src="red-tag.png" alt="tag" className="AK-price-tag" />
          </div>
          <div>
            <div className="AK-savings-text">Save</div>
            <div className="AK-currency2">${(msrp - price).toFixed(2)}</div>
          </div>
        </div> : null
        }
      </div>
      <div className="AK-container-reviews">
        {reviews === 1 ? <span className="AK-reviews">{reviews + " review"}</span> : <span className="AK-reviews">{reviews + " reviews"}</span>}
      </div>
      <div className="AK-container-buttons">
        <button type="button" onClick={clickHandler} className="AK-button1">AVAILABLE DATES</button>
        <button type="button" onClick={quoteClickHandler} className="AK-button2">EASY QUOTE</button>
      </div>
    </div>
  );
};

export default Widget;
