import React from "react";
import { connect } from "react-redux";
import "../authStyles.scss";
import PropTypes from "prop-types";
 
class Login extends React.Component {
  render() {
  
    return (
      <div className="row row-offset-4 justify-content-sm-center">
        <div className="col-md-6 col-lg-4 col-xl-3 col-9">
          <form
            className="rd-mailform rd-form text-left"
            noValidate="novalidate"
          >
            <div className="form-wrap has-error">
              <label className="form-label-outside" htmlFor="login">
                Username or e-mail
              </label>
              <input
                className="form-input form-input-gray form-control-has-validation form-control-last-child"
                id="login"
                type="text"
                name="login"
                data-constraints="@Required"
              />
              <span className="form-validation">
                The text field is required.
              </span>
            </div>
            <div className="form-wrap">
              <label className="form-label-outside" htmlFor="password">
                Password
              </label>
              <input
                className="form-input form-input-gray form-control-has-validation form-control-last-child"
                id="password"
                type="password"
                name="password"
                data-constraints="@Required"
              />
              <span className="form-validation" />
            </div>
            <button
              className="button button-primary button-block button-sm"
              type="submit"
            >
              sign in
            </button>
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  childre: PropTypes.any
};

export default connect()(Login);
