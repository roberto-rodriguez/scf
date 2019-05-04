import React from "react";
import { connect } from "react-redux";
import "../authStyles.scss";
import { Credentials, SelectOrigin } from "./cmp/";
import { AuthHeader } from "../cmp/";
import * as authAction from "../actions/AuthActions";
import PropTypes from "prop-types";

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      data: {
        departureCities: [],
        email: "",
        password: "",
        repassword: "",
        selectedRegion: 0 //this is just ofr the registering flow
      }
    };
  }

  onNext = () => {
    var { page } = this.state;

    if (page <= 2) {
      this.setState({ page: page + 1 });
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
    register({ ...data }, () => history.push("/"));
  };

  render() {
    return (
      <div>
        <AuthHeader />
        <br />
        <br />
        {this.buildBody()}
      </div>
    );
  }

  buildBody = () => {
    var { page, data } = this.state;

    switch (page) {
      case 1:
        return (
          <Credentials
            onNext={this.onNext}
            onBack={this.onBack}
            onUpdate={this.onUpdate}
            onRegister={this.onRegister}
            data={data}
          />
        );
      default:
        return (
          <SelectOrigin
            onNext={this.onNext}
            onBack={this.onBack}
            onUpdate={this.onUpdate}
            onRegister={this.onRegister}
            data={data}
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
