import React from "react";
import PropTypes from "prop-types";
import CityPost from "./CityPost";
import { connect } from "react-redux";

class NearbyCities extends React.Component {
  render() {
    var { postId, cityListIds } = this.props;
  
    return (
      <div>
        <h5 className="hr-title" style={{ marginTop: 5 }}>
          Nearby cities
        </h5>

        <div className="row row-30">
          {cityListIds.map((sampleSearchCityId, i) => (
            <CityPost key={i} postId={postId + ''} sampleSearchCityId={sampleSearchCityId} />
          ))}
        </div>
      </div>
    );
  }
}

NearbyCities.propTypes = {
  postId: PropTypes.string,
  sampleSearchCityId: PropTypes.string,
  cityListIds: PropTypes.any
};

function mapStateToProps({ postReducer }, props) {
  var { postId, sampleSearchCityId } = props;
  var post = postReducer.postList[postId] || {};
  var cityList = post.cityList || {};

  return { cityListIds: Object.keys(cityList).filter(id => id != sampleSearchCityId) };
}

export default connect(mapStateToProps)(NearbyCities);
