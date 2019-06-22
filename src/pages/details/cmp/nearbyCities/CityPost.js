import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as dealActions from "../../actions/DealActions";
import * as Constants from "../../../../constants/Constants";
class CityPost extends React.Component {
  onCLick = () => {
    var {
      postId,
      sampleSearchCityId,
      sampleSearchCity,
      loadCityIfNotExist,
      postStatus,
      postListName
    } = this.props;

    if (!sampleSearchCity || !sampleSearchCity.loaded) {
      loadCityIfNotExist(postId, sampleSearchCityId, postStatus, postListName);
    }
  };

  render() {
    var { sampleSearchCity, postId, sampleSearchCityId } = this.props;
    var {
      originCity,
      city,
      image,
      price,
      avg,
      cityCode,
      country
    } = sampleSearchCity;

    return (
      <Link
        onClick={this.onCLick}
        to={{
          pathname: "/deal/" + postId + "/" + sampleSearchCityId,
          query: {
            originCity,
            city,
            price,
            avg,
            country,
            image
          }
        }}
      >
        <div className="col-xl-12 col-md-6">
          <div className="thumbnail-btn details-city-thumbnail">
            <div className="post-price yellow-text bold-text icon" style={{top:0}}>
              ${price} <span className="regular-price white-text">${avg}</span>
            </div>
            <div className="nearby-city-post-badge" >
              {city}
            </div>
            <img
              className="img-responsive center-block thumbnail-img details-city-img"
              src={`http://res.cloudinary.com/fsc/image/upload/c_scale,w_360/v${
                Constants.TIMESTAMP
              }/${cityCode}.jpg`}
            />
            <div className="caption datails-city-caption">
              <span
                className="button button-primary button-xs"
                href="blog-single-post.html"
              >
                explore
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

CityPost.propTypes = {
  sampleSearchCity: PropTypes.object,
  sampleSearchCityId: PropTypes.string,
  postListName: PropTypes.string,
  postId: PropTypes.string,
  loadCityIfNotExist: PropTypes.func,
  postStatus: PropTypes.number
};

function mapStateToProps({ postReducer }, props) {
  var { postId, sampleSearchCityId, postListName } = props;
  var post = postReducer[postListName][postId] || {}; 
  var cityList = post.cityList || {};
  var sampleSearchCity = cityList[sampleSearchCityId] || {};

  return { sampleSearchCity, postStatus: post.status };
}

export default connect(
  mapStateToProps,
  dealActions
)(CityPost);
