import React from "react";
import SelectOrigin from "../auth/register/cmp/origin/SelectOrigin";
import * as configActions from "../../actions/ConfigActions";
import Header from "../../cmp/header/Header";
import Footer from "../../cmp/Footer";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class DepartureCities extends React.Component {
  render() {
    var {
      departureCities,
      updateDepartureCities,
      cities,
      history
    } = this.props;

    var cityObjList = departureCities.map(c => ({
      name: cities[c].name,
      code: c
    }));

    return (
      <div>
        <Header />
        <br />
        <div>
          <h5 className={"text-center h-margin-20 hr-title"}>
            <span className="float-left" onClick={history.goBack}>
              <a
                className="cursor-pointer bold-text pink-text"
                style={{ fontSize: 16 }}
              >
                Back
              </a>
              <i className="fa fa-long-arrow-left float-left bold-text pink-text margin-right-10 margin-top-3" />
            </span>
            {"Select up to 4 Departure Cities"}

            <span className="float-right" onClick={history.goBack}>
              <a
                className="cursor-pointer bold-text pink-text"
                style={{ fontSize: 16 }}
              >
                Finish
              </a> 
              <i className="fa fa-long-arrow-right float-right bold-text pink-text margin-left-10  margin-top-3" />
            </span>
          </h5>
        </div>
        <SelectOrigin
          departureCities={cityObjList}
          onUpdate={updateDepartureCities}
        />
        <Footer />
      </div>
    );
  }
}

DepartureCities.propTypes = {
  updateDepartureCities: PropTypes.func,
  history: PropTypes.any,
  cities: PropTypes.any,
  departureCities: PropTypes.any
};

const mapStateToProps = ({ authReducer, configReducer }) => ({
  departureCities: authReducer.departureCities
    ? authReducer.departureCities.split("|")
    : [],
  cities: configReducer.cities
});

export default connect(
  mapStateToProps,
  configActions
)(DepartureCities);
