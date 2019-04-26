import React from "react";
import PropTypes from "prop-types";
import {
  GoogleLink,
  SkyLink,
  MomondoLink,
  KayakLink,
  KiwiLink
} from "./providers/";
import "./sampleSearchStyles.scss";
import * as dates from "../../../../utils/dates";
import ViewDealButton from "./ViewDealButton";

class SampleSearch extends React.Component {
  providers = {
    google: { name: "Google Flights", image: "google.png" },
    sky: { name: "Sky Scanner", image: "skyscanner.jpg" },
    momondo: { name: "Momondo", image: "momondo.png" },
    kayak: { name: "Kayak" },
    kiwi: { name: "Kiwi.com", image: "kiwi.png" }
  };

  state = {
    popoverOpen: false
  };

  toggle = () => this.setState({ popoverOpen: !this.state.popoverOpen });

  render() {
    var { sampleSearch } = this.props;

    var {
      departureDate,
      arrivalDate,
      nights,
      originCode,
      cityCode,
      provider,
      price
    } = sampleSearch;

    sampleSearch["formattedDepartureDate"] = dates.formatWithTimezone(
      departureDate
    );
    sampleSearch["formattedArrivalDate"] = dates.formatWithTimezone(
      arrivalDate
    );

    var providerInfo = (provider && this.providers[provider]) || {};

    return (
      <li className="list-item sample-search">
        <div className="list-item-inner">
          <div className="list-item-main">
            <div className="list-item-top">
              <div className="list-item-content sample-search-justify-left">
                {provider ? (
                  <img
                    className="img-responsive center-block thumbnail-img details-city-img"
                    style={{ height: 40 }}
                    src={require(`../../images/providers/${
                      providerInfo.image
                    }`)}
                    alt="Provider where this deal was found"
                  />
                ) : (
                  <span style={{ height: 40, width: "30%" }}> </span>
                )}

                <div className="list-item-content-left">
                  <div className="text-bold text-base">
                    {dates.format(departureDate, "MMM Do")}
                  </div>
                  <span className="small d-block">{originCode}</span>
                </div>
                <div className="list-item-content-line-wrapper small">
                  <div className="list-item-content-line-top">
                    {nights} nights
                  </div>
                  <div className="list-item-content-line" />
                </div>
                <div className="list-item-content-right">
                  <div className="text-bold text-base">
                    {dates.format(arrivalDate, "MMM Do")}
                  </div>
                  <span className="small d-block">{cityCode}</span>
                </div>
              </div>
            </div>
            <hr className="divider divider-wide" />
            <div className="list-item-bottom">
              <div className="list-item-content sample-search-justify-left provider-link-list">
                <GoogleLink small sampleSearch={sampleSearch} />
                <SkyLink small sampleSearch={sampleSearch} />
                <MomondoLink small sampleSearch={sampleSearch} />
                {sampleSearch.kiwiPrice ? (
                  <KiwiLink small sampleSearch={sampleSearch} />
                ) : (
                  <KayakLink small sampleSearch={sampleSearch} />
                )}
              </div>
            </div>
          </div>
          <div className="list-item-footer">
            <h5 className="text-bold list-item-price">
              <span className={"icon fa fa-dollar black-bold-text"} />
              {price}
            </h5>
            <ViewDealButton sampleSearch={sampleSearch} />
            <br />
            <span className="small">{providerInfo.name}</span>
          </div>
        </div>
      </li>
    );
  }
}

SampleSearch.propTypes = {
  id: PropTypes.number,
  sampleSearch: PropTypes.object
};

export default SampleSearch;