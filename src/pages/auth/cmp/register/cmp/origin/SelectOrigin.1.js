import React from "react";
import { connect } from "react-redux";
import "../../../../authStyles.scss";

class SelectOrigin extends React.Component {
  render() {
    return (
      <div className="row row-offset-1 justify-content-sm-center">
        <div className="col-lg-8">
          <div
            className="responsive-tabs responsive responsive-tabs-classic vertical"
            data-type="vertical"
            style={{ display: "block", width: "100%" }}
          >
            <ul className="resp-tabs-list tabs-1 text-center tabs-group-default">
              <li
                className="resp-tab-item resp-tab-active"
                aria-controls="tab_item-0"
                role="tab"
              >
                All Offers
              </li>
              <li
                className="resp-tab-item"
                aria-controls="tab_item-1"
                role="tab"
              >
                Europe
              </li>
              <li
                className="resp-tab-item"
                aria-controls="tab_item-2"
                role="tab"
              >
                North America
              </li>
              <li
                className="resp-tab-item"
                aria-controls="tab_item-3"
                role="tab"
              >
                Asia
              </li>
              <li
                className="resp-tab-item"
                aria-controls="tab_item-4"
                role="tab"
              >
                Australia
              </li>
            </ul>
            <div className="resp-tabs-container text-md-left tabs-group-default">
              <div
                className="resp-accordion"
                role="tab"
                aria-controls="tab_item-0"
              >
                <span className="resp-arrow" />
                All Offers
              </div>
              <div
                className="resp-tab-content resp-tab-content-active resp-accordion-closed"
                aria-labelledby="tab_item-0"
              >
                <p>Welcome to our wonderful world. </p>
              </div>
              <div
                className="resp-accordion"
                role="tab"
                aria-controls="tab_item-1"
              >
                <span className="resp-arrow" />
                Europe
              </div>
              <div className="resp-tab-content" aria-labelledby="tab_item-1">
                <p>Site navigation is extremely intuitive and user-friendly.</p>
              </div>
              <div
                className="resp-accordion"
                role="tab"
                aria-controls="tab_item-2"
              >
                <span className="resp-arrow" />
                North America
              </div>
              <div className="resp-tab-content" aria-labelledby="tab_item-2">
                <p>Welcome to our wonderful world.</p>
              </div>
              <div
                className="resp-accordion"
                role="tab"
                aria-controls="tab_item-3"
              >
                <span className="resp-arrow" />
                Asia
              </div>
              <div className="resp-tab-content" aria-labelledby="tab_item-3">
                <p>Site navigation is extremely intuitive and user-friendly.</p>
              </div>
              <div
                className="resp-accordion"
                role="tab"
                aria-controls="tab_item-4"
              >
                <span className="resp-arrow" />
                Australia
              </div>
              <div className="resp-tab-content" aria-labelledby="tab_item-4">
                <p>Welcome to our wonderful world.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(SelectOrigin);
