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
    var sampleSearchList = sampleSearchCity.sampleSearchList || [];

   

    return (
      <div>
        <DealHeader />
        <section className="section-80 section-lg-60 bg-gray-lighter">
          <div className="container container-wide details-container">
            <div className="row row-50 text-xl-left">
              <div className="col-xl-9">
                <div className="inset-xxl-right-80">
                  <TitleBar origin={origin} city={city} country={country} />

                  <ToolBar
                    avg={avg}
                    price={price}
                    departureDate={departureDate}
                    arrivalDate={arrivalDate}
                  />

                  <SampleSearchSection sampleSearchList={sampleSearchList} />
                </div>
              </div>
              <div className="col-xl-3 tickets-aside">
                <NearbyCities/>
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
