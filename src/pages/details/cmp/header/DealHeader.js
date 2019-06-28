import React from "react";
import NavBar from "../../../../cmp/header/NavBar";
import "./dealHeader.scss";
import PropTypes from "prop-types";
import * as Constants from "../../../../constants/Constants";
import * as gcodes from "../../../../utils/gcodes";
class DealHeader extends React.Component {
  render() {
    var { cityCode, originCity, city, country } = this.props;

    var gcode = cityCode && gcodes.getGCode(cityCode);

    //TODO in the future put a desc of the city and a link to Google travels
    //https://www.google.com/destination?dest_mid=/m/04swd

    return (
      <header
        className="deal-header"
        style={{
          backgroundSize: "cover",
          background: `no-repeat  url(https://res.cloudinary.com/fsc/image/upload/v${
            Constants.TIMESTAMP
          }/${cityCode}.jpg) center`
        }}
      >
        <NavBar navBck />
        <div className="details-header-title">
          <h4
            className="yellow-text"
            style={{ float: "left", paddingLeft: "5%" }}
          >
            {originCity} — {city}
            {country && (
              <span style={{ color: "orange", fontSize: 20 }}>
                {" "}
                ({country})
              </span>
            )}
          </h4>

          <ul style={{ float: "right" }}>
            <li>
              <a
                href={`https://www.google.com/destination?dest_mid=/m/${gcode}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                TRAVEL GUIDE
              </a>
            </li>
            <li>
              <a
                href={`https://www.google.com/destination/map/topsights?output=search&dest_mid=/m/${gcode}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                THINGS TO DO
              </a>
            </li>
            <li>
              <a
                href={`https://www.google.com/destination/map/itineraries/contained?output=search&dest_mid=/m/${gcode}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                DAY PLANS
              </a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

DealHeader.propTypes = {
  originCity: PropTypes.string,
  city: PropTypes.string,
  country: PropTypes.string,
  cityCode: PropTypes.string
};

export default DealHeader;
