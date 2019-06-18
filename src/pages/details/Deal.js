import React from "react";
import { connect } from "react-redux";
import * as dealActions from "./actions/DealActions";
import "./dealStyles.scss";
import PropTypes from "prop-types";

import { DealHeader, ToolBar, SampleSearchSection, NearbyCities } from "./cmp";

class Deal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sortBy: "price",
      mounted: false,
      triggerUpdate: false
    };
  }

  // componentDidMount() {
  //   var {
  //     post,
  //     match,
  //     loadPost,
  //     loadCityIfNotExist,
  //     setSelectedPostId
  //   } = this.props;
  //   var { postId, sampleSearchCityId } = match && match.params;

  //   if (!post) {
  //     loadPost(postId, sampleSearchCityId);
  //   } else {
  //     //if the post exist, then is comming from home, then store the post id, to scroll to that post when go back home
  //     // setTimeout(() => setSelectedPostId(post.id), 2000);

  //     var sampleSearchCity = post.cityList && post.cityList[sampleSearchCityId];
  //     if (!sampleSearchCity || !sampleSearchCity.loaded) {
  //       loadCityIfNotExist(postId, sampleSearchCityId);
  //     }else{
  //       setSelectedPostId(post.postId);
  //     }
  //   }
  // }

  componentDidMount() {
    console.log("Deal -> componentDidMount");
    this.setState({ triggerUpdate: true });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Deal -> componentDidUpdate");
    var {
      post,
      match,
      loadPost,
      loadCityIfNotExist,
      setSelectedPostId,
      appStarted
    } = this.props;

    var { mounted } = this.state;

    if (appStarted) {
      console.log("Deal -> componentDidUpdate  appStarted");
      if (!mounted) {
        console.log("Deal -> componentDidUpdate  !mounted");
        var { postId, sampleSearchCityId } = match && match.params;

        if (!post) {
          loadPost(postId, sampleSearchCityId);
        } else {
          //if the post exist, then is comming from home, then store the post id, to scroll to that post when go back home
          // setTimeout(() => setSelectedPostId(post.id), 2000);

          var sampleSearchCity =
            post.cityList && post.cityList[sampleSearchCityId];
          if (!sampleSearchCity || !sampleSearchCity.loaded) {
            loadCityIfNotExist(postId, sampleSearchCityId);
          } else {
            setSelectedPostId(post.postId);
          }
        }

        this.setState({ mounted: true });
      }
    }
  }

  render() {
    var props = this.props;

    var appStarted = props.appStarted;

    var { postId, sampleSearchCityId } = props.match && props.match.params;

    var queryData = props.location.query || {};

    var post = this.props.post || {};
    var cityList = post.cityList || {};
    var sampleSearchCity = cityList[sampleSearchCityId] || {};

    var data = sampleSearchCityId == post.cityCode ? post : sampleSearchCity;

    var country = queryData.country || data.country;
    var originCity = queryData.originCity || data.originCity;
    var originCode = queryData.originCode || data.originCode;
    var city = queryData.city || data.city;
    var cityCode = queryData.cityCode || data.cityCode;
    var avg = queryData.avg || data.avg;
    var price = queryData.price || data.price;

    var sampleSearchCityData = sampleSearchCity.data || {};
    var sampleSearchList = sampleSearchCityData.sampleSearchList || [];

    var { startDate, endDate } = sampleSearchCity;

    var hasNearbyCities = Object.keys(cityList).length > 1;

    return (
      <div>
        <DealHeader
          cityCode={cityCode}
          originCity={originCity}
          city={city}
          country={country}
        />

        {appStarted && (
          <section className="section-80 section-lg-30 bg-gray-lighter">
            <div className="container container-wide details-container">
              <div
                className={
                  "row row-50 text-xl-left" +
                  (hasNearbyCities ? "" : "centered")
                }
              >
                <div className="col-xl-9">
                  <div className="inset-xxl-right-80">
                    <ToolBar
                      avg={avg}
                      price={price}
                      startDate={startDate}
                      endDate={endDate}
                      onSortChange={this.onSortChange}
                    />
                    <SampleSearchSection
                      sampleSearchList={sampleSearchList}
                      originCode={originCode}
                      cityCode={cityCode}
                      sortBy={this.state.sortBy}
                    />
                  </div>
                </div>
                <div className="col-xl-3 tickets-aside">
                  {hasNearbyCities && (
                    <NearbyCities
                      postId={postId}
                      sampleSearchCityId={sampleSearchCityId}
                    />
                  )}
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    );
  }

  onSortChange = sortBy => this.setState({ sortBy });
}

Deal.propTypes = {
  loadPost: PropTypes.func,
  loadCityIfNotExist: PropTypes.func,
  setSelectedPostId: PropTypes.func,
  post: PropTypes.object,
  match: PropTypes.object,
  location: PropTypes.object,
  appStarted: PropTypes.bool
};

function mapStateToProps({ postReducer, authReducer }, props) {
  var { postId, sampleSearchCityId } = props.match && props.match.params;

  if (postId && sampleSearchCityId) {
    var post = postReducer.postList[postId];

    if (!post && postReducer.expiredPostList) {
      post = postReducer.expiredPostList[postId];
    }
    return {
      post,
      appStarted: authReducer.appStarted
    };
  }
}

export default connect(
  mapStateToProps,
  dealActions
)(Deal);
