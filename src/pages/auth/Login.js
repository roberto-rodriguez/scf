import React from "react";
import { connect } from "react-redux";
import "./authStyles.scss";
import PropTypes from "prop-types";
import { AuthHeader } from "./cmp/";
import * as authActions from "./actions/AuthActions";
import { Alert } from "reactstrap";
class Login extends React.Component {
  state = {
    email: "",
    password: "",
    requiredEmail: false,
    requiredPassword: false,
    invalidCredentials: false
  };

  onLogin = () => {
    var { email, password } = this.state;
    var { login, history } = this.props;

    if (!email || !password) {
      this.setState({
        requiredEmail: !email,
        requiredPassword: !password
      });
    } else {
      this.setState({
        requiredEmail: false,
        requiredPassword: false
      });

      login(email, password, (resutCode /*, resultMessage*/) => {
        if (resutCode) {
          this.setState({ invalidCredentials: true });
        } else {
          history.push("/");
        }
      });
    }
  };

  render() {
    var {
      email,
      password,
      requiredEmail,
      requiredPassword,
      invalidCredentials
    } = this.state;
    return (
      <div>
        <AuthHeader />
        <br />
        <br />
        <div className="row row-offset-4 justify-content-sm-center">
          <div className="col-md-6 col-lg-4 col-xl-3 col-9">
            <span className="rd-mailform rd-form text-left">
              <div className="form-wrap has-error">
                {invalidCredentials && (
                  <Alert color="primary">Invalid Login Credentials</Alert>
                )}

                <label className="form-label-outside" htmlFor="login">
                  E-mail
                </label>
                <input
                  value={email}
                  onChange={evt => this.updateInputValue("email", evt)}
                  className="form-input form-input-gray form-control-has-validation form-control-last-child"
                  id="login"
                  type="text"
                  name="login"
                  data-constraints="@Required"
                />
                {requiredEmail && (
                  <span className="form-validation">Username is required.</span>
                )}
              </div>
              <div className="form-wrap">
                <label className="form-label-outside" htmlFor="password">
                  Password
                </label>
                <input
                  value={password}
                  onChange={evt => this.updateInputValue("password", evt)}
                  className="form-input form-input-gray form-control-has-validation form-control-last-child"
                  id="password"
                  type="password"
                  name="password"
                  data-constraints="@Required"
                />
                {requiredPassword && (
                  <span className="form-validation">Password is required.</span>
                )}
              </div>
              <button
                onClick={() => this.onLogin()}
                className="button button-primary button-block button-sm"
              >
                sign in
              </button>
            </span>
          </div>
        </div>
        <br />
        <br />
      </div>
    );
  }

  updateInputValue = (field, evt) =>
    this.setState({ [field]: evt.target.value });
}

Login.propTypes = {
  login: PropTypes.func,
  history: PropTypes.any
};

export default connect(
  null,
  authActions
)(Login);
