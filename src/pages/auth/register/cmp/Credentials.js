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
    var { onNext, data } = this.props;
    var { email, password, repassword } = data;

    return (
      <div>
        <br />
        <div>
          <h5 className="text-center h-margin-20 hr-title">
            <span className=" button-xs float-left cursor-pointer">
              <span className="bold-text white-text margin-left-10">
                {"Back"}
              </span>
              <i className="fa fa-long-arrow-left float-left bold-text white-text" />
            </span>
            Create Login Creentials
            <span
              className=" button-xs float-right cursor-pointer"
              onClick={onNext}
            >
              <span className="bold-text pink-text margin-right-10">
                {"Next"}
              </span>
              <i className="fa fa-long-arrow-right float-right bold-text pink-text" />
            </span>
          </h5>
        </div>

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
          <br />

          <br />
          <br />
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
