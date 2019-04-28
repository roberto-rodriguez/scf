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
    var { city, price } = sampleSearchCity;
    var formattedPrice = price && string.formatAmount(price);

    //onClick={this.onClick}
    return (
      <li >
        {CityLink(city, "yellow-text")}
        <div>
         {CityLink(formattedPrice, "city-price icon fa fa-dollar yellow-text")}
        </div>
      </li>
    );
  }

  // onClick = (e) => {
  //   var { postId, sampleSearchCity, loadCityIfNotExist} = this.props;
  //   var { id } = sampleSearchCity;

  //   loadCityIfNotExist(postId, id);
  // }
 
  CityLink = (text, className) => {
    var {
      originCity, 
      country, 
      sampleSearchCity,
      postId 
    } = this.props; 

    return (
      <Link
        className={className}
        to={{
          pathname: "/deal/" + postId + '/' + sampleSearchCity.id,
          query: {
            originCity, 
            country,  
            city: sampleSearchCity.city, 
            price: sampleSearchCity.price,
            avg: sampleSearchCity.avg, 
            image: sampleSearchCity.image,
            cityCode: sampleSearchCity.cityCode
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
  cityCode: PropTypes.string,
  loadCityIfNotExist: PropTypes.func
};

export default connect(null, dealActions)(PostCityPrice);
