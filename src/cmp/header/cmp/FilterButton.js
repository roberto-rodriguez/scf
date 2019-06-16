import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import "../header.scss";
import PropTypes from "prop-types";
import * as authActions from "../../../pages/auth/actions/AuthActions";

class FilterButton extends React.Component {
  onLogout = () => {
    var { logout, history } = this.props;

    logout(() => {
      history.push("/");
    });
  };

  render() {
    var { plan, darkNavLink } = this.props;

    var screenWidth = screen.width;

    return (
      <span>
        <ul className="rd-navbar-nav">
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

// return (
//   <ul className="rd-navbar-nav">
//     <li
//       className={"nav-filter-button" + (darkNavLink ? "dark-nav-link" : "")}
//     >
// <NavLink to="/login">
//   <span className="icon fa fa-filter margin-right-10" />
//   Filter Deals
// </NavLink>
//     </li>
//   </ul>
// );

FilterButton.propTypes = {
  plan: PropTypes.number,
  email: PropTypes.string,
  logout: PropTypes.func,
  history: PropTypes.any,
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
  authActions
)(FilterButton);
