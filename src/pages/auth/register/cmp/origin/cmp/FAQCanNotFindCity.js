import React from "react";
import "../../../../authStyles.scss";

class FAQCanNotFindCity extends React.Component {
  render() {
    var { showCanNotFindCity, onToggleCanNotFindCity } = this.props;

    return (
      <div
        className="responsive-tabs responsive responsive-tabs-classic resp-easy-accordion float-right"
        data-type="accordion"
        style={{ display: "block" }}
      >
        <div className="resp-tabs-container text-md-left tabs-group-default">
          <div
            className="resp-accordion resp-tab-active"
            role="tab"
            aria-controls="tab_item-0"
            onClick={onToggleCanNotFindCity}
          >
            <span className="resp-arrow" />
            Can not find your city?
          </div>
          <div
            className="resp-tab-content resp-tab-content-active"
            aria-labelledby="tab_item-0"
            style={{ display: showCanNotFindCity ? "block" : "none" }}
          >
            <p>We add a new city every 2 weeks.</p>
            <p>
              To be fair to our community, we pick from the waiting list the
              city that has most votes. Add your city to the waiting list and we
              will notify you when is added.
            </p>
            <p>
              <b className="pink-text">TIP</b> You can increase the odds of your
              city being selected inviting your home town friends, is very
              likely they will also vote to add your city.
              <i className="fa fa-smile-o pink-text" />
            </p>

            <div className="form-wrap has-error">
              <label className="form-label-outside" htmlFor="subscribe-email">
                Enter city name here
              </label>
              <input
                className="form-input form-control-has-validation form-control-last-child"
                id="subscribe-email"
              />
            </div>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default FAQCanNotFindCity;
