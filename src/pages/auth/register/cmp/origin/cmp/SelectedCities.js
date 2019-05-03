import React from "react";
import "../../../../authStyles.scss";
import PropTypes from "prop-types";

class SelectedCities extends React.Component {
  render() {
    var departureCities = this.props.departureCities || [];
    var deleteCity = this.props.deleteCity;
    return (
      <div className="container cities-panel-container">
        <div
          className="row row-30 row-offset-1 text-lg-center"
          style={{ display: "block" }}
        >
          {departureCities.slice(0, 4).map((city, i) => (
            <span
              className="button button-primary button-circle selected-city"
              key={i}
            >
              {city.name}
              <span
                className="icon fa fa-close"
                onClick={() => deleteCity(city)}
              />
            </span>
          ))}
        </div>
      </div>
    );
  }
}

SelectedCities.propTypes = {
  deleteCity: PropTypes.func,
  departureCities: PropTypes.any
};

export default SelectedCities;
