import React from "react";
import { connect } from "react-redux";
import "../../authStyles.scss";
import { Credentials, SelectOrigin } from "./cmp/";

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1
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

  render() {
    var { page } = this.state;

    switch (page) {
      case 1:
        return <Credentials onNext={this.onNext} onBack={this.onBack} />;
      default:
        return <SelectOrigin onNext={this.onNext} onBack={this.onBack} />;
    }
  }
}

export default connect()(Register);
