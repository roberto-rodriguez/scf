import React from "react";
import "../../../../authStyles.scss";
import PropTypes from "prop-types";
import { Alert } from "reactstrap";

class SelectedCities extends React.Component {
  render() {
    var departureCities = this.props.departureCities || [];
    var deleteCity = this.props.deleteCity;

    if (departureCities.length == 0) {
      return null;
    }

    return (
      <Alert color="info" className="container cities-panel-container centered">
        {departureCities.slice(0, 4).map((city, i) => (
          <span
            className="button button-primary button-circle button-xxs selected-city"
            key={i}
          >
            {city.name}&nbsp;&nbsp;
            <span
              className="icon fa fa-close"
              onClick={() => deleteCity(city)}
            />
          </span>
        ))}
      </Alert>
    );
  }
}

SelectedCities.propTypes = {
  deleteCity: PropTypes.func,
  departureCities: PropTypes.any
};

export default SelectedCities;
