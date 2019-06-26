import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class CityLink extends React.Component {
  render() {
    var {
      text,
      className,
      originCity,
      country,
      sampleSearchCity,
      postId
    } = this.props;

    return (
      <Link
        className={className}
        to={{
          pathname: "/deal/" + postId + "/" + sampleSearchCity.cityCode,
          query: {
            originCity,
            country,
            city: sampleSearchCity.city,
            price: sampleSearchCity.price,
            avg: sampleSearchCity.avg,
            cityCode: sampleSearchCity.cityCode
          }
        }}
      >
        {text}
      </Link>
    );
  }
}

CityLink.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  originCity: PropTypes.string,
  country: PropTypes.string,
  sampleSearchCity: PropTypes.string,
  postId: PropTypes.number
};

export default CityLink;
