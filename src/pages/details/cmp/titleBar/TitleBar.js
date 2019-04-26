import React from "react";
import PropTypes from "prop-types";

class TitleBar extends React.Component {
  render() {
    var { origin, city, country } = this.props;

    return (
      <div>
        <span
          className="small text-gray  list-item-subtitle"
          style={{ float: "right" }}
        >
          (*) All flights are round trip
        </span>
        <h3 className="blue-text  hr-title">
          {origin} — {city}
          <span style={{ color: "grey", fontSize: 20 }}> ({country})</span>
        </h3>
      </div>
    );
  }
}

TitleBar.propTypes = {
  origin: PropTypes.string,
  city: PropTypes.string,
  country: PropTypes.string
};

export default TitleBar;
