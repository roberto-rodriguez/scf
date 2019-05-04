import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import "../header.scss";
import PropTypes from "prop-types";
import * as authActions from "../../../pages/auth/actions/AuthActions";

class LoginButton extends React.Component {
  onLogout = () => {
    var { logout, history } = this.props;

    logout(() => {
      history.push("/");
    });
  };

  render() {
    var { plan } = this.props;

    if (!plan) {
      return (
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      );
    }

    return (
      <li className="rd-navbar--has-dropdown rd-navbar-submenu">
        <i
          className="icon mdi mdi-account-circle white-text"
          style={{ fontSize: 22 }}
        >
          {" "}
        </i>
        <span className="rd-navbar-submenu-toggle" />
        <ul className="rd-navbar-dropdown" style={{ left: -177 }}>
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
            <span onClick={this.onLogout}>Log Out</span>
          </li>
        </ul>
      </li>
    );
  }
}

LoginButton.propTypes = {
  plan: PropTypes.number,
  email: PropTypes.string,
  logout: PropTypes.func,
  history: PropTypes.any
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
