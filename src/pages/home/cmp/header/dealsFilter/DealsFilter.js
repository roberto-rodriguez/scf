import React from "react";
import { connect } from "react-redux";
import * as viewActions from "../../../../../actions/ViewActions";
import PropTypes from "prop-types";
import "./dealsFilterStyles.scss";
import { NavLink } from "react-router-dom";
import {
  FilterOrigin,
  FilterDestination,
  FilterDates,
  NotSubscribedPanel
} from "./cmp/";

class DealsFilter extends React.Component {
  render() {
    var { setViewState, doFilter, hasDepartureCities } = this.props;

    return (
      <div className="deals-filter">
        <div className="container container-wide heigth100">
          <div className="row row-30 row-offset-1 text-lg-left deals-filter-header">
            <div className="col-12 pink-text">
              <h4>Origin</h4>
            </div>
            <div className="col-12">
              <h4>Destination</h4>
            </div>
            <div className="col-12">
              <h4>Dates</h4>
            </div>
          </div>
          <div className="row row-30 row-offset-1 text-lg-left deals-filter-body">
            <div className="col-12">
              {hasDepartureCities ? <FilterOrigin /> : <NotSubscribedPanel />}
            </div>
            <div className="col-12">
              <FilterDestination />
            </div>
            <div className="col-12">
              <FilterDates />
            </div>
          </div>
          <div className="row row-30 row-offset-1 text-lg-left deals-filter-footer h-margin-20px">
            <div>
              <span
                className="button button-primary button-xs float-right"
                onClick={doFilter}
              >
                <span className="icon fa fa-search" />
                Search
              </span>
              <span
                className="button button-default button-xs float-right"
                onClick={() => setViewState("showFilters", false)}
              >
                <span className="icon fa fa-close" />
                Close
              </span>

              {hasDepartureCities && (
                <NavLink exact to="/departures">
                  <span className="button button-default button-xs float-left">
                    Change Departure Preferences
                  </span>
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DealsFilter.propTypes = {
  setViewState: PropTypes.func,
  doFilter: PropTypes.func,
  hasDepartureCities: PropTypes.bool
};

const mapStateToProps = ({ authReducer }) => ({
  hasDepartureCities: authReducer.departureCities
    ? authReducer.departureCities.length > 0
    : false
});

export default connect(
  mapStateToProps,
  viewActions
)(DealsFilter);
