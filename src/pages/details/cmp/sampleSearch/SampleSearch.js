import React from "react";
import PropTypes from "prop-types";
import ProviderLink from "./providers/ProviderLink";
import GoogleLink from "./providers/GoogleLink";
import "./sampleSearchStyles.scss";
import moment from "moment";
import {
  Button,
  UncontrolledPopover,
  PopoverHeader,
  PopoverBody
} from "reactstrap";

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
    var { id, sampleSearch } = this.props;

    var {
      departureDate,
      arrivalDate,
      nights,
      originCode,
      cityCode,
      provider,
      price,
      googlePrice,
      skyPrice,
      momondoPrice,
      kiwiPrice,
      isKiwiSearch,
      skyLink,
      kiwiLink
    } = sampleSearch;

    sampleSearch["formattedDepartureDate"] = this.formatDate(departureDate);
    sampleSearch["formattedArrivalDate"] = this.formatDate(arrivalDate);

    var providerInfo = (provider && this.providers[provider]) || {};

    var providerNames = ["Sky Scanner", "Momondo", "Google Flights", "Kayak"];
    var providersLinks = [];

    for (var i = 0; i < providerNames.length; i++) {
      providersLinks.push(<ProviderLink key={i} provider={providerNames[i]} />);
    }

    return (
      <li className="list-item">
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
                    alt=""
                  />
                ) : (
                  <span style={{ height: 40, width: "30%" }}> </span>
                )}

                <div className="list-item-content-left">
                  <div className="text-bold text-base">{departureDate}</div>
                  <span className="small d-block">{originCode}</span>
                </div>
                <div className="list-item-content-line-wrapper small">
                  <div className="list-item-content-line-top">
                    {nights} nights
                  </div>
                  <div className="list-item-content-line" />
                </div>
                <div className="list-item-content-right">
                  <div className="text-bold text-base">{arrivalDate}</div>
                  <span className="small d-block">{cityCode}</span>
                </div>
              </div>
            </div>
            <hr className="divider divider-wide" />
            <div className="list-item-bottom">
              <div className="list-item-content sample-search-justify-left provider-link-list">
                {providerNames.map((p, i) => (
                  <ProviderLink key={i} provider={p} small />
                ))}
              </div>
            </div>
          </div>
          <div className="list-item-footer">
            <h5 className="text-bold list-item-price">
              <span className={"icon fa fa-dollar black-bold-text"} />
              {price}
            </h5>

            {provider ? (
              <a
                className="button button-primary button-xs button-no-shadow"
                href="#"
              >
                View Deal
              </a>
            ) : (
              <div>
                <Button
                  id={`PopoverFocus-${id}`}
                  type="button"
                  color="link"
                  style={{ padding: 0 }}
                >
                  <span
                    className="button button-default button-no-shadow"
                    href="#"
                    onClick={this.toggle}
                    id={"Popover-1"}
                  >
                    View Deal
                  </span>
                </Button>
                <UncontrolledPopover
                  trigger="focus"
                  placement="top"
                  target={`PopoverFocus-${id}`}
                >
                  <PopoverHeader>Providers</PopoverHeader>
                  <PopoverBody>
                    <table width="300" cellSpacing="20" cellPadding="10">
                      <tbody>
                        <tr>
                          <td width="50%">
                            <a
                              className="provider-link"
                              href="http://google.com"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Sky Scanner{" "}
                              <span className="icon fa fa-external-link" />
                            </a>
                          </td>
                          <td width="50%">
                            <a
                              className="provider-link"
                              href="http://google.com"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Momondo{" "}
                              <span className="icon fa fa-external-link" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td width="50%">
                            <GoogleLink sampleSearch={sampleSearch} />
                          </td>
                          <td width="50%">
                            <a
                              className="provider-link"
                              href="http://google.com"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <div className="list-item-content-left provider-link">
                                <span>
                                  {"Kayak "}
                                  {!price && (
                                    <span
                                      className={"icon fa fa-dollar blue-text"}
                                      style={{
                                        fontWeight: "bold",
                                        marginRight: 4,
                                        color: "green"
                                      }}
                                    >
                                      {price}
                                    </span>
                                  )}
                                  <span className="icon fa fa-external-link" />
                                </span>
                              </div>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </PopoverBody>
                  <PopoverHeader>
                    <a
                      className="provider-link"
                      href="http://google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open All <span className="icon fa fa-external-link" />
                    </a>
                  </PopoverHeader>
                </UncontrolledPopover>
              </div>
            )}

            <br />
            <span className="small">{providerInfo.name}</span>
          </div>
        </div>
      </li>
    );
  }

  formatDate(d) {
    d += new Date().getTimezoneOffset() * 60000;
    return moment(d).format("YYYY-MM-DD");
  }
}

SampleSearch.propTypes = {
  id: PropTypes.number,
  sampleSearch: PropTypes.object
};

export default SampleSearch;
