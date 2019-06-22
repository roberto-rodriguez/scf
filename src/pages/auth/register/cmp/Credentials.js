import React from "react";
import { connect } from "react-redux";
import "../../authStyles.scss";
import PropTypes from "prop-types";

class Credentials extends React.Component {
  state = {
    //use state just for validation latter
    email: "",
    password: "",
    repassword: ""
  };

  updateInputValue = (field, evt) => {
    var value = evt.target.value;
    var { onUpdate } = this.props;

    this.setState({ [field]: evt.target.value });
    onUpdate(field, value);
  };

  render() {
    var {  data } = this.props;
    var { email, password, repassword } = data;

    return (
      <div> 
        <div
          className="row row-offset-4 justify-content-sm-center"
          style={{ marginBottom: 160 }}
        >
          <div className="col-md-6 col-lg-4 col-xl-3 col-9">
            <form
              className="rd-mailform rd-form text-left"
              noValidate="novalidate"
            >
              <div className="form-wrap has-error">
                <label className="form-label-outside" htmlFor="login">
                  Email
                </label>
                <input
                  value={email}
                  onChange={evt => this.updateInputValue("email", evt)}
                  className="form-input form-input-gray form-control-has-validation form-control-last-child"
                  id="email"
                  type="text"
                  name="email"
                  data-constraints="@Required"
                />
                {false && (
                  <span className="form-validation">
                    The text field is required.
                  </span>
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
                <span className="form-validation" />
              </div>
              <div className="form-wrap">
                <label className="form-label-outside" htmlFor="repassword">
                  Confirm Password
                </label>
                <input
                  value={repassword}
                  onChange={evt => this.updateInputValue("repassword", evt)}
                  className="form-input form-input-gray form-control-has-validation form-control-last-child"
                  id="repassword"
                  type="password"
                  name="repassword"
                  data-constraints="@Required"
                />
                <span className="form-validation" />
              </div>
            </form>
          </div> 
        </div>
      </div>
    );
  }
}

Credentials.propTypes = {
  onNext: PropTypes.func,
  onUpdate: PropTypes.func,
  data: PropTypes.object
};

export default connect()(Credentials);
