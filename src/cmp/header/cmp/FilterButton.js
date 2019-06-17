import React from "react";
import { connect } from "react-redux";
import "../header.scss";
import PropTypes from "prop-types";
import * as viewActions from "../../../actions/ViewActions";

class FilterButton extends React.Component {
  render() {
    var { toggleViewState, darkNavLink } = this.props;

    return (
      <span onClick={() => toggleViewState("showFilters", true)}>
        <ul className="rd-navbar-nav cursor-pointer">
          <li
            className={`rd-navbar--has-dropdown rd-navbar-submenu nav-filter-button ${
              darkNavLink ? "dark-nav-link" : ""
            }`}
          >
            <span className="white-text">
              <span className="icon fa fa-filter margin-right-10" />
              Filter
            </span>
          </li>
        </ul>
      </span>
    );
  }
}

FilterButton.propTypes = {
  toggleViewState: PropTypes.func,
  darkNavLink: PropTypes.bool
};

function mapStateToProps({ authReducer }) {
  return {
    plan: authReducer.plan,
    email: authReducer.email
  };
}

export default connect(
  mapStateToProps,
  viewActions
)(FilterButton);
