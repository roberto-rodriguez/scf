import React from "react";
import PropTypes from "prop-types";

class TitleBar extends React.Component {
  render() {
    var { originCity, city, country } = this.props;

    return (
      <div>
        <span
          className="small text-gray  list-item-subtitle"
          style={{ float: "right" }}
        >
          (*) All flights are round trip
        </span>
        <h4 className="blue-text  hr-title">
          {originCity} — {city}
          {country && (<span style={{ color: "grey", fontSize: 20 }}> ({country})</span>)} 
        </h4>
      </div>
    );
  }
}

TitleBar.propTypes = {
  originCity: PropTypes.string,
  city: PropTypes.string,
  country: PropTypes.string
};

export default TitleBar;
