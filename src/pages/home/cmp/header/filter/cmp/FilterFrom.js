import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import SwitchCmp from "../../../../../../cmp/SwitchCmp";
import * as postActions from "../../../../actions/PostActions";
import { NavLink } from "react-router-dom";

class FilterFrom extends React.Component {
  render() {
    var { departureCities, cities, originNotIn, updateFilter } = this.props;

    var hasDepartureCities = departureCities && departureCities.length > 0;

    var activeCities = hasDepartureCities
      ? departureCities
          .split("|")
          .filter(cityCode => originNotIn.indexOf(cityCode) == -1)
      : [];

    var title =
      activeCities.length > 0
        ? activeCities
            .map(cityCode => {
              return cityCode.indexOf("@") == -1
                ? cityCode
                : cityCode.split("@")[0];
            })
            .join(", ")
        : "From Anywhere";

    return (
      <li className="toggle-menu-wrapper">
        <span
          className={"region-link " + (hasDepartureCities ? "pink-bck" : "")}
        >
          {title}
        </span>

        <ul style={{ paddingTop: hasDepartureCities ? 15 : 0 }}>
          {departureCities &&
            cities &&
            departureCities.split("|").map((cityCode, i) => {
              var city = cities[cityCode];

              if (city) {
                return (
                  <SwitchCmp
                    label={city.name}
                    value={originNotIn.indexOf(city.code) == -1}
                    onChange={() => updateFilter("originNotIn", city.code)}
                    key={i}
                  />
                );
              } else {
                return null;
              }
            })}
          <hr style={{ margin: 0 }} />
          <li>
            <NavLink exact to="/departures">
              {hasDepartureCities
                ? "Change Departure Cities"
                : "Select Departure Cities"}
            </NavLink>
          </li>
        </ul>
      </li>
    );
  }
}

FilterFrom.propTypes = {
  departureCities: PropTypes.string,
  cities: PropTypes.any,
  originNotIn: PropTypes.any,
  updateFilter: PropTypes.func
};

const mapStateToProps = ({ authReducer, configReducer, postReducer }) => ({
  departureCities: authReducer.departureCities,
  cities: configReducer.cities,
  originNotIn: postReducer.filters.originNotIn || []
});

export default connect(
  mapStateToProps,
  postActions
)(FilterFrom);
