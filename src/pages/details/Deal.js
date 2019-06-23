import React from "react";
import { connect } from "react-redux";
import * as dealActions from "./actions/DealActions";
import "./dealStyles.scss";
import PropTypes from "prop-types";

import {
  DealHeader,
  ToolBar,
  SampleSearchSection,
  NearbyCities,
  ExpiredDealNotice
} from "./cmp";

class Deal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sortBy: "price",
      mounted: false,
      triggerUpdate: false
    };
  }

  componentDidMount() {
    this.setState({ triggerUpdate: true });
  }

  componentDidUpdate( ) {
    var {
      post,
      match,
      loadPost,
      loadCityIfNotExist,
      setSelectedPostId,
      appStarted,
      postListName
    } = this.props;

    var { mounted } = this.state;

    if (appStarted) {
      if (!mounted) {
        window.scrollTo(0, 0);
        var { postId, sampleSearchCityId } = match && match.params;

        if (!post) {
          loadPost(postId, sampleSearchCityId);
        } else { 
          
          var sampleSearchCity =
            post.cityList && post.cityList[sampleSearchCityId];
          if (!sampleSearchCity || !sampleSearchCity.loaded) {
            loadCityIfNotExist(postId, sampleSearchCityId, postListName);
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

                    {post.status == 0 && <ExpiredDealNotice />}
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
                      postListName={this.props.postListName}
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
  appStarted: PropTypes.bool,
  postListName: PropTypes.string
};

function mapStateToProps({ postReducer, authReducer }, props) {
  var { postId, sampleSearchCityId } = props.match && props.match.params;
  var postListName = 'postList';

  if (postId && sampleSearchCityId) {
    var post = postReducer.postList[postId];

    if (!post && postReducer.expiredPostList) {
      post = postReducer.expiredPostList[postId];
      postListName = 'expiredPostList';
    }
    return {
      post,
      appStarted: authReducer.appStarted,
      postListName
    };
  }
}

export default connect(
  mapStateToProps,
  dealActions
)(Deal);
