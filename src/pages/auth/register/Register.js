import React from "react";
import { connect } from "react-redux";
import "../authStyles.scss";
import { Credentials, SelectOrigin } from "./cmp/";
import { AuthHeader } from "../cmp/";
import * as authAction from "../actions/AuthActions";
import PropTypes from "prop-types";
import validator from "email-validator";

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      errorsObj: null,
      data: {
        departureCities: [],
        email: "",
        password: "",
        repassword: ""
      }
    };
  }

  onNext = () => {
    var { page, data } = this.state;

    var errorsObj = {};
    var hasErrors = false;

    for (var prop in data) {
      if (!data[prop]) {
        errorsObj[prop] = "This field is required";
        hasErrors = true;
      }
    }

    if (!hasErrors) {
      if (data.password != data.repassword) {
        errorsObj["password"] = "Password doesn't match";
        hasErrors = true;
      }

      if (!validator.validate(data.email)) {
        errorsObj["email"] = "Invalid Email";
        hasErrors = true;
      }
    }

    if (hasErrors) {
      this.setState({ errorsObj });
    } else {
      if (page <= 2) {
        this.setState({ page: page + 1 });
      }
    }
  };

  onBack = () => {
    var { page } = this.state;

    if (page >= 0) {
      this.setState({ page: page - 1 });
    }
  };

  onUpdate = (field, value) => {
    this.setState(prevState => ({
      ...prevState,
      data: {
        ...prevState.data,
        [field]: value
      }
    }));
  };

  onRegister = () => {
    var { register, history } = this.props;
    var { data } = this.state;

    register(
      {
        ...data,
        departureCities: data.departureCities.map(c => c.code).join("|")
      },
      () => history.push("/")
    );
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    var { state, onBack, onNext, onRegister } = this;

    var title = state.page == 1 ? "Set Credentials" : "Select up to 4 cities";

    return (
      <div>
        <AuthHeader />
        <br />
        <br />
        <div>
          <h5 className={"text-center h-margin-20 hr-title"}>
            <span
              className="button-xs bold-text pink-text float-left cursor-pointer"
              onClick={onBack}
            >
              {this.state.page > 1 && (
                <span>
                  {"Back"}
                  <i className="fa fa-long-arrow-left float-left bold-text pink-text margin-right-10" />
                </span>
              )}
            </span>

            {title}

            <span
              className="button-xs bold-text pink-text  float-right cursor-pointer"
              onClick={this.state.page == 2 ? onRegister : onNext}
            >
              {this.state.page == 2 ? "Finish" : "Next"}
              <i className="fa fa-long-arrow-right float-right bold-text pink-text margin-left-10" />
            </span>
          </h5>
        </div>

        {this.buildBody()}
      </div>
    );
  }

  buildBody = () => {
    var { page, data, errorsObj } = this.state;

    switch (page) {
      case 1:
        return (
          <Credentials
            onNext={this.onNext}
            onBack={this.onBack}
            onUpdate={this.onUpdate}
            onRegister={this.onRegister}
            data={data}
            errorsObj={errorsObj}
          />
        );
      default:
        return (
          <SelectOrigin
            onNext={this.onNext}
            onBack={this.onBack}
            onUpdate={this.onUpdate}
            onRegister={this.onRegister}
            departureCities={data.departureCities}
          />
        );
    }
  };
}

Register.propTypes = {
  register: PropTypes.func,
  history: PropTypes.any
};

export default connect(
  null,
  authAction
)(Register);
