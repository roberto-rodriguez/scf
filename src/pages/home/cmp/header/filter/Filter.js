import React from "react";
import { connect } from "react-redux";
import * as viewActions from "../../../../../actions/ViewActions";
import PropTypes from "prop-types";
import { HeaderRegion } from "../cmp";
import "./filterStyles.scss";
import { FilterFrom, FilterTo, FilterDate, SearchButton } from "./cmp";

class Filter extends React.Component {
  render() {
    var { style } = this.props;

    return (
      <ul className="nav-custom nav-deals-filter" style={{ ...style }}>
        <FilterFrom />
        <FilterTo />
        <FilterDate name="fromMonth" />
        <FilterDate name="toMonth" />
        <SearchButton />
      </ul>
    );
  }
}

Filter.propTypes = {
  style: PropTypes.any,
  textStyle: PropTypes.any
};

const mapStateToProps = ({ authReducer }) => ({
  hasDepartureCities: authReducer.departureCities
    ? authReducer.departureCities.length > 0
    : false
});

export default connect(
  mapStateToProps,
  viewActions
)(Filter);
