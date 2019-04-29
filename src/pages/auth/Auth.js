import React from "react";
import { connect } from "react-redux";
import "./authStyles.scss";
import PropTypes from "prop-types";
import {AuthHeader, Login, Register} from "./cmp/";

class Auth extends React.Component {
  render() {
    var props = this.props;

    return (
      <div>
        <AuthHeader />
        <br />
        <br />
        <ul className="nav-custom">
          <li>
            <a href="login.html">Login</a>
          </li>
          <li>
            <a className="active" href="register.html">
              Register
            </a>
          </li>
        </ul>
        <br />
        <br />
        <Register/>
      </div>
    );
  }
}

Auth.propTypes = {
  childre: PropTypes.any
};

export default connect()(Auth);
