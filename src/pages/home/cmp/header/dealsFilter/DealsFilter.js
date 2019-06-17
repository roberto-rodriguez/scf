import React from "react";
import { connect } from "react-redux";
import * as viewActions from "../../../../../actions/ViewActions";
import PropTypes from "prop-types";
import "./dealsFilterStyles.scss";
import { FilterOrigin, FilterDestination, FilterDates } from "./cmp/";

class DealsFilter extends React.Component {
  render() {
    var { setViewState, doFilter } = this.props;

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
              <FilterOrigin />
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
                <span
                  className="icon fa fa-search"
                />
                Search
              </span>
              <span className="button button-default button-xs float-right"
                  onClick={() => setViewState("showFilters", false)}>
                <span className="icon fa fa-close" />
                Close
              </span>

              <span
                className="button button-default button-xs float-left"
              >
                Change Departure Preferences
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DealsFilter.propTypes = {
  setViewState: PropTypes.func,
  doFilter: PropTypes.func
};

export default connect(
  null,
  viewActions
)(DealsFilter);
