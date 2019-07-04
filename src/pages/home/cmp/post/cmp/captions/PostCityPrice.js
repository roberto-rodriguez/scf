import React from "react";
import { connect } from "react-redux";
import * as dealActions from "../../../../../details/actions/DealActions";
import * as Constants from "../../../../../../constants/Constants";
import PropTypes from "prop-types";
import * as string from "../../../../../../utils/string";
import { Link } from "react-router-dom";

class PostCityPrice extends React.Component {
  render() {
    var { CityLink, props } = this;
    var { sampleSearchCity } = props;
    var { city, price } = sampleSearchCity;
    var formattedPrice = price && string.formatAmount(price);

    return (
      <li className="mobile-font-50 mobile-margin-left-60">
        {CityLink(city)}
        <div>{CityLink(formattedPrice, "city-price icon fa fa-dollar ")}</div>
      </li>
    );
  }

  CityLink = (text, className = "") => {
    var {
      originCity,
      country,
      sampleSearchCity,
      postId,
      mainCity
    } = this.props;

    className +=
      sampleSearchCity.cityCode == mainCity.cityCode
        ? "white-text"
        : "yellow-text";

    var city = Object.assign(
      {},
      Constants.MOBILE ? mainCity : sampleSearchCity
    );

    return (
      <Link
        className={"mobile-font-50 " + className}
        to={{
          pathname: "/deal/" + postId + "/" + city.cityCode,
          query: {
            originCity,
            country,
            city: city.city,
            price: city.price,
            avg: city.avg,
            cityCode: city.cityCode
          }
        }}
      >
        {text}
      </Link>
    );
  };
}

PostCityPrice.propTypes = {
  sampleSearchCity: PropTypes.object,
  originCity: PropTypes.string,
  country: PropTypes.string,
  postId: PropTypes.string,
  mainCity: PropTypes.any,
  cityCode: PropTypes.string
};

export default connect(
  null,
  dealActions
)(PostCityPrice);
