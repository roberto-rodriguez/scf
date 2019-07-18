import React from "react";
import { connect } from "react-redux";
import "../../../../authStyles.scss";
import PropTypes from "prop-types";
import FAQCanNotFindCity from "./FAQCanNotFindCity";

class CitiesPanel extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      showCanNotFindCity: false
    };
  }

  onToggleCanNotFindCity = () => {
    this.setState({ showCanNotFindCity: !this.state.showCanNotFindCity });
    this.props.hideFooter(this.state.showCanNotFindCity)
  }

  render() {
    var { showCanNotFindCity } = this.state;
    var { cityList, selectCity, departureCities, onBackToMap } = this.props;
    var selectedCityCodes = departureCities.map(c => c.code);

    return (
      <div className="container cities-panel-container">
        <br />
        <div className="row row-30 row-offset-1 text-lg-left">
          {!showCanNotFindCity &&
            cityList.map((city, i) => (
              <div className="col-3" key={i}>
                <span
                  className={
                    "button button-xxs button-" +
                    (selectedCityCodes.indexOf(city.code) >= 0
                      ? "primary"
                      : "default")
                  }
                  onClick={() => selectCity({ ...city })}
                >
                  {city.name}
                </span>
              </div>
            ))}
        </div>

        {!showCanNotFindCity && (
          <div>
            <div style={{ width: "100%", height: 40 }} />
            <span
              className="float-left bold-light-blue"
              onClick={() => onBackToMap()}
            >
              {"Back to Map"}
              <i
                className="fa fa-long-arrow-left float-left bold-text margin-right-10"
                style={{ marginTop: 3 }}
              />
            </span>
          </div>
        )}

        <FAQCanNotFindCity
          showCanNotFindCity={showCanNotFindCity}
          onToggleCanNotFindCity={this.onToggleCanNotFindCity}
        />
        <br />
        <br />
        <br />
      </div>
    );
  }
}
{
  /* <br />
{cityList.length > 0 && <FAQCanNotFindCity />} */
}

CitiesPanel.propTypes = {
  regionId: PropTypes.any,
  cityList: PropTypes.any,
  departureCities: PropTypes.any,
  selectCity: PropTypes.func,
  onBackToMap: PropTypes.func,
  hideFooter: PropTypes.func
};

function mapStateToProps({ configReducer }, props) {
  var cities = configReducer.cities || {};
  var cityList = Object.values(cities).filter(
    city => city.region == props.regionId
  );
  
  return { cityList: cityList || [] };
}

export default connect(mapStateToProps)(CitiesPanel);
