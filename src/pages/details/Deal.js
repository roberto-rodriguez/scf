import React from "react";
import { connect } from "react-redux";
import * as dealActions from "./actions/DealActions";
import "./dealStyles.scss";
import PropTypes from "prop-types";

import { DealHeader, ToolBar, SampleSearchSection, NearbyCities } from "./cmp";

class Deal extends React.Component {
  componentDidMount() {
    var {
      post,
      match,
      loadPost,
      loadCityIfNotExist,
      setSelectedPostId
    } = this.props;
    var { postId, sampleSearchCityId } = match && match.params;

    if (!post) {
      loadPost(postId, sampleSearchCityId);
    } else {
      //if the post exist, then is comming from home, then store the post id, to scroll to that post when go back home
      setSelectedPostId(post.id);

      var sampleSearchCity = post.cityList && post.cityList[sampleSearchCityId];
      if (!sampleSearchCity || !sampleSearchCity.loaded) {
        loadCityIfNotExist(postId, sampleSearchCityId);
      }
    }
  }

  render() {
    var props = this.props;

    var { postId, sampleSearchCityId } = props.match && props.match.params;

    var queryData = props.location.query || {};

    var post = this.props.post || {};
    var cityList = post.cityList || {};
    var sampleSearchCity = cityList[sampleSearchCityId] || {};

    var data = sampleSearchCityId == post.cityCode ? post : sampleSearchCity;

    var country = queryData.country || data.country;
    var originCity = post.originCity;
    var originCode = queryData.originCode || data.originCode;
    var city = queryData.city || data.city;
    var cityCode = queryData.cityCode || data.cityCode;
    var avg = queryData.avg || data.avg;
    var price = queryData.price || data.price;

    var sampleSearchCityData = sampleSearchCity.data || {};
    var sampleSearchList = sampleSearchCityData.sampleSearchList || [];

    var { departureDate, arrivalDate } = sampleSearchCity;

    return (
      <div>
        <DealHeader
          cityCode={cityCode}
          originCity={originCity}
          city={city}
          country={country}
        />
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
                    sampleSearchList={sampleSearchList}
                    originCode={originCode}
                    cityCode={cityCode}
                  />
                </div>
              </div>
              <div className="col-xl-3 tickets-aside">
                <NearbyCities
                  postId={postId}
                  sampleSearchCityId={sampleSearchCityId}
                />
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
  setSelectedPostId: PropTypes.func,
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
