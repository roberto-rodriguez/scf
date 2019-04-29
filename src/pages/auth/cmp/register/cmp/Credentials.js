import React from "react";
import { connect } from "react-redux";
import "../../../authStyles.scss";

class Credentials extends React.Component {
  render() {
    return (
      <div
        className="row row-offset-4 justify-content-sm-center"
        style={{ marginBottom: 160 }}
      >
        <div className="col-md-6 col-lg-4 col-xl-3 col-9">
          <h4 className="text-bold text-center">Create Login Creentials</h4>
          <form
            className="rd-mailform rd-form text-left"
            noValidate="novalidate"
          >
            <div className="form-wrap has-error">
              <label className="form-label-outside" htmlFor="login">
                Email
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
            <div className="form-wrap">
              <label className="form-label-outside" htmlFor="repassword">
                Confirm Password
              </label>
              <input
                className="form-input form-input-gray form-control-has-validation form-control-last-child"
                id="repassword"
                type="password"
                name="repassword"
                data-constraints="@Required"
              />
              <span className="form-validation" />
            </div>
            <button
              className="button button-default button-block button-sm"
              type="submit"
            >
              <span>
                NEXT{" "}
                <span
                  className="icon fa fa-chevron-right"
                  style={{ marginLeft: 5 }}
                />
              </span>
            </button>
          </form>
        </div>
        <br />

        <br />
        <br />
      </div>
    );
  }
}

export default connect()(Credentials);
