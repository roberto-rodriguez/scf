import React from "react";
import "./postStyles.scss";
import { connect } from "react-redux";
import * as dealActions from "../../../details/actions/DealActions";
import PropTypes from "prop-types";
import * as string from "../../../../utils/string";
import { Link } from "react-router-dom";

class PostCityPrice extends React.Component {
  render() {
    var { CityLink, props } = this;
    var { sampleSearchCity } = props;
    var { name, price } = sampleSearchCity;
    var formattedPrice = price && string.formatAmount(price);

    return (
      <li onClick={this.onClick}>
        {CityLink(name, "yellow-text")}
        <div>
         {CityLink(formattedPrice, "city-price icon fa fa-dollar yellow-text")}
        </div>
      </li>
    );
  }

  onClick = (e) => {
    var { postId, sampleSearchCity, loadCityIfNotExist} = this.props;
    var { id } = sampleSearchCity;

    loadCityIfNotExist(postId, id);
  }
 
  CityLink = (text, className) => {
    var {
      origin, 
      country,
      avg,
      foundDate,
      sampleSearchCity,
      postId 
    } = this.props; 

    return (
      <Link
        className={className}
        to={{
          pathname: "/deal/" + postId + '/' + sampleSearchCity.id,
          query: {
            origin, 
            country,
            avg,
            foundDate,
            city: sampleSearchCity.city, 
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
  country: PropTypes.string,
  avg: PropTypes.number,
  foundDate: PropTypes.string,
  postId: PropTypes.string,
  cityCode: PropTypes.string,
  loadCityIfNotExist: PropTypes.func
};

export default connect(null, dealActions)(PostCityPrice);
