import React from "react";
import PropTypes from "prop-types";
import PostCityPrice from "./PostCityPrice";
import { Link } from "react-router-dom";

class CityPricesCaption extends React.Component {
  render() {
    var { post } = this.props;
    var { id, postId, originCity, country, avg, cityList, cityCode } = post;

    var cities = Object.values(cityList);

    var mainCity = cities.filter(c => c.cityCode == cityCode)[0];
    mainCity = mainCity || {};

    return (
      <div className={"caption"}>
        {cities.length <= 4 && (
          <Link
            className={"city-price-caption-header"}
            to={{
              pathname: "/deal/" + postId + "/" + mainCity.cityCode,
              query: {
                originCity,
                country,
                city: mainCity.city,
                price: mainCity.price,
                avg: mainCity.avg,
                cityCode: mainCity.cityCode
              }
            }}
          >
            Click city to see details
          </Link>
        )}

        <ul className="list-marked-price list-marked-no-padding list-marked-flex text-base cities-list">
          <PostCityPrice
            mainCity={mainCity}
            sampleSearchCity={mainCity}
            originCity={originCity}
            country={country}
            avg={avg}
            postId={postId}
            id={id}
          />
          <hr style={{ width: "100%", color: "rgba(255,255,255,0.01)" }} />
          {cities
            .filter(c => c.cityCode != cityCode)
            .map((city, i) => (
              <PostCityPrice
                key={i}
                mainCity={mainCity}
                sampleSearchCity={city}
                originCity={originCity}
                country={country}
                avg={avg}
                postId={postId}
              />
            ))}
        </ul>
        <br />
      </div>
    );
  }
}

CityPricesCaption.propTypes = {
  post: PropTypes.object
};

export default CityPricesCaption;
