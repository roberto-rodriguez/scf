import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as authActions from "../../../../auth/actions/AuthActions";
import { NavLink } from "react-router-dom";
class SubscribeButton extends React.Component {
  render() {
    var { plan } = this.props;

    var cmp = null;

    switch (plan) {
      case 0:
        cmp = (
          <NavLink exact to="/subscribe">
            <span className="button button-primary button-circle" href="#">
              Subscribe Free
            </span>
          </NavLink>
        );
        break;
      case 1:
        cmp = (
          <span className="button button-primary button-circle" href="#">
            Get Premium
          </span>
        );
    }
    return (
      cmp || (
        <div>
          <br />
          <br />
        </div>
      )
    );
  }
}

SubscribeButton.propTypes = {
  plan: PropTypes.number
};

function mapStateToProps({ authReducer }) {
  return {
    plan: authReducer.plan
  };
}

export default connect(
  mapStateToProps,
  authActions
)(SubscribeButton);
