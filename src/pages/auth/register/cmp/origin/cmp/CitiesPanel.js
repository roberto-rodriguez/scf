import React from "react";
import { connect } from "react-redux";
import "../../../../authStyles.scss";
import PropTypes from "prop-types";
import FAQCanNotFindCity from "./FAQCanNotFindCity";

class CitiesPanel extends React.Component {
  render() {
    var { cityList, selectCity, departureCities } = this.props;
    var selectedCityCodes = departureCities.map(c => c.code);
    return (
      <div className="container cities-panel-container">
        <div className="row row-30 row-offset-1 text-lg-left">
          {cityList.map((city, i) => (
            <div className="col-3" key={i}>
              <span
                className={`button button-${selectedCityCodes.indexOf(city.code) >= 0 ? 'primary' : 'default'} button-rounded button-sm`}
                onClick={() => selectCity({ ...city })}
              >
                {city.name}
              </span>
            </div>
          ))}
          <br />
          <br />
          <br />
          <br />
          <br />
          {cityList.length && <FAQCanNotFindCity />}
        </div>
      </div>
    );
  }
}

CitiesPanel.propTypes = {
  regionId: PropTypes.any,
  cityList: PropTypes.any,
  departureCities: PropTypes.any,
  selectCity: PropTypes.func
};

function mapStateToProps({ configReducer }, props) {
  var { regions } = configReducer;

  return { cityList: (regions && regions[props.regionId]) || [] };
}

export default connect(mapStateToProps)(CitiesPanel);
