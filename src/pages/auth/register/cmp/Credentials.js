import React from "react";
import { connect } from "react-redux";
import "../../authStyles.scss";
import PropTypes from "prop-types";
import InputField from "../../../../cmp/InputField";

class Credentials extends React.Component {
  updateInputValue = (field, value) => {
    var { onUpdate } = this.props;

    onUpdate(field, value);
  };

  render() {
    var { data, errorsObj } = this.props;
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
              <InputField
                name={"email"}
                value={email}
                label={"Email"}
                onChange={this.updateInputValue}
                errorsObj={errorsObj}
              />
              <InputField
                name={"password"}
                value={password}
                label={"Password"}
                type={"password"}
                onChange={this.updateInputValue}
                errorsObj={errorsObj}
              />
              <InputField
                name={"repassword"}
                value={repassword}
                label={"Retype Password"}
                type={"password"}
                onChange={this.updateInputValue}
                errorsObj={errorsObj}
              />
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
  errorsObj: PropTypes.any,
  data: PropTypes.object
};

export default connect()(Credentials);
