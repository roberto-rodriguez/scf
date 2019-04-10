import React from "react";

import "./detailsStyles.scss";
import HomeHeader from "./cmp/DealHeader";
import CityPost from "./cmp/CityPost";
import SampleSearch from "./cmp/SampleSearch";

var cityNames = ["rome_s", "venice", "pisa", "milan", "florence"];
class Deal extends React.Component {
  render() {
    var props = this.props;
    var query = props.location.query || {};
    var { origin, city, country, avg, price } = query;

    var cityPosts = [];
    for (var i = 0; i < 4; i++) {
      cityPosts.push(<CityPost key={i} imgName={cityNames[i]} />);
    }

    return (
      <div>
        <HomeHeader />
        <section className="section-80 section-lg-60 bg-gray-lighter">
          <div className="container container-wide details-container">
            <div className="row row-50 text-xl-left">
              <div className="col-xl-9">
                <div className="inset-xxl-right-80">
                  <span
                    className="small text-gray  list-item-subtitle"
                    style={{ float: "right" }}
                  >
                    (*) All flights are round trip
                  </span>
                  <h3 className="blue-text  hr-title">
                    {origin} — {city}
                    <span style={{ color: "grey", fontSize: 20 }}>
                      {" "}
                      ({country})
                    </span>
                  </h3>

                  <table style={{ width: "100%" }}>
                    <tbody>
                      <tr>
                        <td style={{ textAlign: "left" }}>
                          <h5 style={{ color: "#ba0e6f" }}>
                            <span
                              style={{ fontSize: 18 }}
                              className="icon fa fa-dollar"
                            />
                            <span>{price}</span>{" "}
                            <span style={{ color: "grey", fontSize: 18 }}>
                              (Regular +${avg})
                            </span>
                          </h5>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <h6>From May — Jun</h6>
                        </td>
                        <td>
                          <div style={{ float: "right", maxWidth: 180 }}>
                            <select
                              className="form-input select-filter"
                              data-placeholder="Select an option"
                              data-minimum-results-for-search="Infinity"
                              data-constraints="@Required"
                            >
                              <option>Sort by Price</option>
                              <option value="2">Sort by Date</option>
                              <option value="3">Sort by Nights</option>
                            </select>
                          </div>

                          <div
                            style={{
                              float: "right",
                              maxWidth: 180,
                              marginRight: 10
                            }}
                          >
                            <span
                              className="filter-button button button-icon button-icon-left button-no-shadow  button-sm"
                              href="#"
                            >
                              <span className="icon fa fa-filter" />
                              <span>Filter</span>
                            </span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <ul className="list-tickets">
                    <SampleSearch />
                    <SampleSearch />
                    <SampleSearch />
                    <SampleSearch />
                    <SampleSearch />
                    <SampleSearch />
                    <SampleSearch />
                    <SampleSearch />
                    <SampleSearch />
                    <SampleSearch />
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 tickets-aside">
                <h5 className="text-bold hr-title" style={{ marginTop: 18 }}>
                  Nearby cities
                </h5>

                <div className="row row-30">{cityPosts}</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Deal;
