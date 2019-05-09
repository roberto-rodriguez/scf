import React from "react";
import { connect } from "react-redux";
import * as dealActions from "./actions/DealActions";
import "./dealStyles.scss";
import PropTypes from "prop-types";

import {
  DealHeader,
  TitleBar,
  ToolBar,
  SampleSearchSection,
  NearbyCities
} from "./cmp";

class Deal extends React.Component {
  componentDidMount() {
    var { post, match, loadPost, loadCityIfNotExist } = this.props;
    var { postId, sampleSearchCityId } = match && match.params;

    if (!post) {
      loadPost(postId, sampleSearchCityId);
    } else {
      var sampleSearchCity = post.cityList && post.cityList[sampleSearchCityId];
      if (!sampleSearchCity || !sampleSearchCity.loaded) {
        loadCityIfNotExist(postId, sampleSearchCityId);
      }
    }
  }

  render() {
    var props = this.props;

    var { postId, sampleSearchCityId } = props.match && props.match.params;
    var query = props.location.query || {};
    var { country, originCity, city, cityCode, avg, price } = query;

    var post = this.props.post || {};
    var cityList = post.cityList || {};

    var sampleSearchCity = cityList[sampleSearchCityId] || {};

    country = country || sampleSearchCity.country;
    originCity = originCity || sampleSearchCity.originCity;
    city = city || sampleSearchCity.city;
    var originCode = sampleSearchCity.originCode;
    cityCode = cityCode || sampleSearchCity.cityCode;
    avg = avg || sampleSearchCity.avg;
    price = price || sampleSearchCity.price; 

    var { departureDate, arrivalDate } = sampleSearchCity;

    // <TitleBar originCity={originCity} city={city} country={country} />
    return (
      <div>
        <DealHeader cityCode={cityCode}  originCity={originCity} city={city} country={country}/>
        <section className="section-80 section-lg-30 bg-gray-lighter">
          <div className="container container-wide details-container">
            <div className="row row-50 text-xl-left">
              <div className="col-xl-9">
                <div className="inset-xxl-right-80">
                 

                  <ToolBar
                    avg={avg}
                    price={price}
                    departureDate={departureDate}
                    arrivalDate={arrivalDate}
                  />
                  <SampleSearchSection
                    postId={postId}
                    sampleSearchCityId={sampleSearchCityId}
                    originCode={originCode}
                    cityCode={cityCode}
                  />
                </div>
              </div>
              <div className="col-xl-3 tickets-aside">
                <NearbyCities postId={postId} sampleSearchCityId={sampleSearchCityId}/>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

Deal.propTypes = {
  loadPost: PropTypes.func,
  loadCityIfNotExist: PropTypes.func,
  post: PropTypes.object,
  match: PropTypes.object,
  location: PropTypes.object
};

function mapStateToProps({ postReducer }, props) {
  var { postId, sampleSearchCityId } = props.match && props.match.params;

  if (postId && sampleSearchCityId) {
    return { post: postReducer.postList[postId] };
  }
}

export default connect(
  mapStateToProps,
  dealActions
)(Deal);
