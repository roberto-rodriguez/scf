import React from "react";
import PropTypes from "prop-types";
import SampleSearch from "./SampleSearch";
import { connect } from "react-redux";
import * as dealActions from "../../actions/DealActions";

class SampleSearchSection extends React.Component {
  providers = {
    google: { name: "Google Flights", image: "google.png" },
    sky: { name: "Sky Scanner", image: "skyscanner.jpg" },
    momondo: { name: "Momondo", image: "momondo.png" },
    kayak: { name: "Kayak" },
    kiwi: { name: "Kiwi.com", image: "kiwi.png" }
  };

  // componentDidMount() {
  //   var {
  //     sampleSearchList,
  //     sampleSearchCityId,
  //     postId,
  //     loadCityIfNotExist
  //   } = this.props;

  //   if (!sampleSearchList) {
  //     loadCityIfNotExist(postId, sampleSearchCityId);
  //   }
  // }

  render() {
    var sampleSearchList = this.props.sampleSearchList || [];

    return (
      <ul className="list-tickets">
        {sampleSearchList.map((s, i) => (
          <SampleSearch sampleSearch={Object.assign({}, s)} id={i} key={i} />
        ))}
      </ul>
    );
  }
}

SampleSearchSection.propTypes = {
  sampleSearchCityId: PropTypes.string,
  postId: PropTypes.any,
  sampleSearchList: PropTypes.any,
  loadCityIfNotExist: PropTypes.func
};

function mapStateToProps({ postReducer }, props) {
  var { postId, sampleSearchCityId } = props;
  var post = postReducer.postList[postId];
  var city = (post && post.cityList && post.cityList[sampleSearchCityId]) || {};
  var sampleSearchList = city.sampleSearchList;

  return { sampleSearchList };
}

export default connect(
  mapStateToProps,
  dealActions
)(SampleSearchSection);
