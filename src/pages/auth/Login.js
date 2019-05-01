import React from "react";
import { connect } from "react-redux";
import "./authStyles.scss";
import PropTypes from "prop-types";
import { AuthHeader } from "./cmp/";
import * as authActions from "./actions/AuthActions";

class Login extends React.Component {
  state = {
    username: "",
    password: "",
    requiredUsername: false,
    requiredPassword: false
  };

  onLogin = () => {
    var { username, password } = this.state;
    var { login, history } = this.props;

    if (!username || !password) {
      this.setState({
        requiredUsername: !username,
        requiredPassword: !password
      });
    } else {
      this.setState({
        requiredUsername: false,
        requiredPassword: false
      });

      login(username, password, (resutCode, resultMessage) => { 
        history.push('/');
      });
    }
  };

  render() {
    var { username, password, requiredUsername, requiredPassword } = this.state;
    return (
      <div>
        <AuthHeader />
        <br />
        <br />
        <div className="row row-offset-4 justify-content-sm-center">
          <div className="col-md-6 col-lg-4 col-xl-3 col-9">
            <span className="rd-mailform rd-form text-left">
              <div className="form-wrap has-error">
                <label className="form-label-outside" htmlFor="login">
                  Username or e-mail
                </label>
                <input
                  value={username}
                  onChange={evt => this.updateInputValue("username", evt)}
                  className="form-input form-input-gray form-control-has-validation form-control-last-child"
                  id="login"
                  type="text"
                  name="login"
                  data-constraints="@Required"
                />
                {requiredUsername && (
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
  login: PropTypes.func
};

export default connect(
  null,
  authActions
)(Login);
