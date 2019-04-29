import React from "react";
import { connect } from "react-redux";
import "../../authStyles.scss";
import { Credentials, SelectOrigin } from "./cmp/";

class Register extends React.Component {
  render() {
    return <SelectOrigin />;
  }
}

export default connect()(Register);
