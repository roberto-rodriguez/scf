import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import "../header.scss";
import PropTypes from "prop-types";
import * as authActions from "../../../pages/auth/actions/AuthActions";

class LoginButton extends React.Component {
  render() {
    var { plan, email } = this.props;

    if (!plan) {
      return (
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      );
    }

    return (
      <li className="rd-navbar--has-dropdown rd-navbar-submenu">
        <a href="#">{email}</a>
        <span className="rd-navbar-submenu-toggle" />
        <ul className="rd-navbar-dropdown">
          <li>
            <a href="overview.html">Profile</a>
          </li>
          <li>
            <a href="overview.html">Departure Cities</a>
          </li>
          <li>
            <a href="overview.html">Notifications</a>
          </li>
          <li>
            <a href="faq.html">Log Out</a>
          </li>
        </ul>
      </li>
    );
  }
}

LoginButton.propTypes = {
  plan: PropTypes.number,
  email: PropTypes.string
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
)(LoginButton);
