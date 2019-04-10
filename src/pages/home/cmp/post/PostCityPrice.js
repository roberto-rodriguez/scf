import React from "react";
import "./postStyles.scss";
import PropTypes from "prop-types";
import * as string from "../../../../utils/string";
import { Link } from "react-router-dom";

class PostCityPrice extends React.Component {
  render() {
    var { CityLink, props } = this;
    var { sampleSearchCity } = props;
    var { id, name, price } = sampleSearchCity;
    var formattedPrice = price && string.formatAmount(price);

    return (
      <li>
        {CityLink(name, "yellow-text")}
        <div>
          {CityLink(formattedPrice, "city-price icon fa fa-dollar yellow-text")}
        </div>
      </li>
    );
  }

  CityLink = (text, className) => {
    var {
      origin,
      city,
      country,
      avg,
      foundDate,
      sampleSearchCity
    } = this.props;
    var { id, name, price } = sampleSearchCity;

    return (
      <Link
        className={className}
        to={{
          pathname: "/deal/" + id,
          query: {
            origin,
            city,
            country,
            avg,
            foundDate,
            price: sampleSearchCity.price
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
  origin: PropTypes.string,
  city: PropTypes.string,
  country: PropTypes.string,
  avg: PropTypes.number,
  foundDate: PropTypes.string
};

export default PostCityPrice;
