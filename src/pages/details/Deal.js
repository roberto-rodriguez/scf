import React from "react";
import { connect } from "react-redux";
import * as dealActions from "./actions/DealActions";
import "./detailsStyles.scss";
import HomeHeader from "./cmp/DealHeader";
import CityPost from "./cmp/CityPost";
import SampleSearch from "./cmp/SampleSearch";
import PropTypes from "prop-types";

var cityNames = ["rome_s", "venice", "pisa", "milan", "florence"];
class Deal extends React.Component {
  componentDidMount() {
    console.log("componentDidMount");
    var { post, match, loadPost } = this.props;
    var { postId, sampleSearchCityId } = match && match.params;

    if (!post) {
      loadPost(postId, sampleSearchCityId);
    }
  }

  render() {
    var props = this.props;
     
    var { sampleSearchCityId } = props.match && props.match.params;
    var query = props.location.query || {};
    var { origin, city, country, avg, price } = query;

    var post = this.props.post || {};
    var cityList = post.cityList || {};

    var sampleSearchCity = cityList[sampleSearchCityId] || {};

    origin = origin || sampleSearchCity.origin;
    city = city || sampleSearchCity.name;
    country = country || sampleSearchCity.country;
    avg = avg || sampleSearchCity.avg;
    price = price || sampleSearchCity.price;

    var { departureDate, arrivalDate } = sampleSearchCity;

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
                          <h6>
                            {departureDate} — {arrivalDate}
                          </h6>
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

Deal.propTypes = {
  loadCityIfNotExist: PropTypes.func,
  loadPost: PropTypes.func,
  post: PropTypes.object,
  match: PropTypes.object,
  location: PropTypes.object
};

function mapStateToProps({ postReducer }, props) {
  var { postId, sampleSearchCityId } = props.match && props.match.params;

  if (postId && sampleSearchCityId) {
    return { post: postReducer.freePostList[postId] };
  }
}

export default connect(
  mapStateToProps,
  dealActions
)(Deal);
