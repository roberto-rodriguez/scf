import React from "react";
import { connect } from "react-redux";
import * as postActions from "../../../../actions/PostActions";
import PropTypes from "prop-types";
import "../dealsFilterStyles.scss";
import SwitchCmp from "../../../../../../cmp/SwitchCmp";

class FilterOrigin extends React.Component {
  render() {
    var { departureCities, cities, originNotIn, updateFilter } = this.props;

    return (
      <div className="height100 width100 filter-origin centered-column">
        <div>
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
                    style={{ marginTop: 15 }}
                  />
                );
              } else {
                return null;
              }
            })}
        </div>
      </div>
    );
  }
}

FilterOrigin.propTypes = {
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
)(FilterOrigin);
