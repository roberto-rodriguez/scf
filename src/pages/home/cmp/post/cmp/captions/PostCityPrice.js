import React from "react"; 
import { connect } from "react-redux";
import * as dealActions from "../../../../../details/actions/DealActions";
import PropTypes from "prop-types";
import * as string from "../../../../../../utils/string";
import { Link } from "react-router-dom";

class PostCityPrice extends React.Component {
  render() {
    var { CityLink, props } = this;
    var { sampleSearchCity, selectedCity } = props;
    var { city, price, cityCode } = sampleSearchCity;
    var formattedPrice = price && string.formatAmount(price);

    var isSelectedCity = selectedCity == cityCode;

    //onClick={this.onClick}
    return (
      <li >
        {CityLink(city, (isSelectedCity ? 'white-text' : 'yellow-text'))}
        <div>
         {CityLink(formattedPrice, `city-price icon fa fa-dollar ${isSelectedCity ? 'white-text' : 'yellow-text'}`)}
        </div>
      </li>
    );
  }
 
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
          pathname: "/deal/" + postId + '/' + sampleSearchCity.cityCode,
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
  };
}

PostCityPrice.propTypes = {
  sampleSearchCity: PropTypes.object,
  originCity: PropTypes.string,   
  country: PropTypes.string, 
  postId: PropTypes.string,
  selectedCity: PropTypes.string,
  cityCode: PropTypes.string 
};

export default connect(null, dealActions)(PostCityPrice);
