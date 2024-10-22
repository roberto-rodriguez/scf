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
    kayak: { name: "Kayak", image: "kayak.png" },
    kiwi: { name: "Kiwi.com", image: "kiwi.png" }
  };

  render() {
    var { sampleSearch } = this.props;

    var {
      departureDateStr,
      arrivalDateStr,
      nights,
      originCode,
      cityCode,
      provider,
      price
    } = sampleSearch;

    var showProviderPrice = !!provider;

    var providerInfo = (provider && this.providers[provider]) || {};

    return (
      <li className="list-item sample-search">
        <div className="list-item-inner">
          <div className="list-item-main">
            <div className="list-item-top">
              <div className="list-item-content sample-search-justify-left">
                {provider ? (
                  <img
                    className="img-responsive center-block thumbnail-img details-city-img hide-for-mobile"
                    style={{ height: 40 }}
                    src={require(`../../images/providers/${
                      providerInfo.image
                    }`)}
                    alt="Provider where this deal was found"
                  />
                ) : (
                  <span className="hide-for-mobile" style={{ height: 40, width: "30%" }}> </span>
                )}

                <div className="list-item-content-left">
                  <div className="text-base font-15">
                    {dates.formatStringDate(departureDateStr, "MMM Do")}
                  </div>
                  <span className="small d-block font-14">
                    {this.getCode(originCode)}
                  </span>
                </div>
                <div className="list-item-content-line-wrapper small">
                  <div className="list-item-content-line-top font-13">
                    {Math.abs(nights)} days
                  </div>
                  <div className="list-item-content-line" />
                </div>
                <div className="list-item-content-right">
                  <div className="text-base black-text font-15">
                    {dates.formatStringDate(arrivalDateStr, "MMM Do")}
                  </div>
                  <span className="small d-block font-14">
                    {this.getCode(cityCode)}
                  </span>
                </div>
              </div>
            </div>
            <hr className="divider divider-wide" />
            <div className="list-item-bottom hide-for-mobile">
              <div className="list-item-content sample-search-justify-left provider-link-list">
                <GoogleLink
                  small
                  sampleSearch={sampleSearch}
                  showProviderPrice={showProviderPrice}
                />
                <SkyLink
                  small
                  sampleSearch={sampleSearch}
                  showProviderPrice={showProviderPrice}
                />
                <MomondoLink
                  small
                  sampleSearch={sampleSearch}
                  showProviderPrice={showProviderPrice}
                />
                {sampleSearch.kiwiPrice ? (
                  <KiwiLink
                    small
                    sampleSearch={sampleSearch}
                    showProviderPrice={showProviderPrice}
                  />
                ) : (
                  <KayakLink
                    small
                    sampleSearch={sampleSearch}
                    showProviderPrice={showProviderPrice}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="list-item-footer">
            <h5 className="text-bold list-item-price font-weight-normal black-text font-18">
              <span className={"icon fa fa-dollar font-18"} />
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

  getCode = code => {
    if (code && code.indexOf("@") >= 0) {
      return code.split("@")[0];
    }
    return code;
  };
}

SampleSearch.propTypes = {
  id: PropTypes.number,
  sampleSearch: PropTypes.object
};

export default SampleSearch;
