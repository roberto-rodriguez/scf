import React from "react"; 
import PropTypes from "prop-types";
import PostCityPrice from "./PostCityPrice"; 

class CityPricesCaption extends React.Component {
  render() {
    var { post } = this.props;
    var {
      id,
      originCity, 
      country, 
      avg, 
      cityList,
      cityCode
    } = post;

    var cities = Object.values(cityList);

    return (
      <div className="caption">
        <ul className="list-marked list-marked-no-padding list-marked-flex text-base cities-list">
          {cities.map((city, i) => (
            <PostCityPrice
              key={i}
              selectedCity={cityCode}
              sampleSearchCity={city}
              originCity={originCity}
              country={country}
              avg={avg}
              postId={id + ""}
            />
          ))}
        </ul>
      </div>
    );
  }
}

CityPricesCaption.propTypes = {
  post: PropTypes.object
};

export default CityPricesCaption;
