import React from "react"; 
import PropTypes from "prop-types";
import PostCityPrice from "./PostCityPrice"; 

class CityPricesCaption extends React.Component {
  render() {
    var { post } = this.props;
    var {
      idx,
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
        {cities.filter(c => c.cityCode == cityCode).map((city, i) => (
            <PostCityPrice
              key={i}
              selectedCity={cityCode}
              sampleSearchCity={city}
              originCity={originCity}
              country={country}
              avg={avg}
              postId={idx + ""}
            />
          ))}
          <hr style={{width:'100%', color: 'rgba(255,255,255,0.01)'}}/>
          {cities.filter(c => c.cityCode != cityCode).map((city, i) => (
            <PostCityPrice
              key={i}
              selectedCity={cityCode}
              sampleSearchCity={city}
              originCity={originCity}
              country={country}
              avg={avg}
              postId={idx + ""}
            />
          ))}
        </ul>
        <br/> 
      </div>
    );
  }
}

CityPricesCaption.propTypes = {
  post: PropTypes.object
};

export default CityPricesCaption;
