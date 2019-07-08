import React from "react";
import { connect } from "react-redux";
import * as viewActions from "../../actions/ViewActions";
import PropTypes from "prop-types";
import "./subscribePanel.scss";
import validator from "email-validator";
import { Alert } from "reactstrap";

class SubscribePanel extends React.Component {
  state = {
    email: "",
    showSuccess: false
  };

  onSave = () => {
    var { email } = this.state;
    var { addToClientWaitingList } = this.props;
    if (!validator.validate(email)) {
      alert("Invalid email format");
    } else {
      addToClientWaitingList(email, () => {
        this.setState({ showSuccess: true });
        setTimeout(() => this.setState({ showSuccess: false }), 8000);
      });
    }
  };

  onChange = evt => this.setState({ email: evt.target.value });

  render() {
    var {
      showSubscribePanel,
      addedToWaitingList,
      toggleViewState
    } = this.props;

    var { showSuccess } = this.state;

    if (showSuccess) {
      return (
        <Alert color="success">
          You were added to our waiting list. We will F notify you when we
          officially launch.
        </Alert>
      );
    }

    if (!showSubscribePanel || addedToWaitingList) {
      return <section className="section-80 section-lg-30" />;
    } else
      return (
        <section className="section-lg-30 centered hide-for-mobile ">
          <div className="subscribe-panel">
            <img
              onClick={() => toggleViewState("showSubscribePanel")}
              className={"float-right cursor-pointer"}
              src={require("../../styles/images/close.png")}
            />
            <h5>
              We are still activelly working and improving our service every day
            </h5>
            <h5 className="margin-top-10">
              Join our waiting list to get one year of FREE premium when we
              launch
              <span className="cursor-pointer margin-left-10 grey-text font-15">
                (Learn more)
                <i className="fa fa-long-arrow-right mobile-font-50 margin-left-10" />
              </span>
            </h5>
            <div className="margin-top-10">
              <input
                className="green-input"
                type="text"
                placeholder="Email Address"
                onChange={this.onChange}
              />
              <span className="green-btn" onClick={this.onSave}>
                Join Waiting List
              </span>
            </div>
            <h5 className="margin-top-10 bold-text cursor-pointer grey-text">
              Or leave us your feedback
              <i className="fa fa-long-arrow-right mobile-font-50 margin-left-10" />
            </h5>
          </div>
        </section>
      );
  }
}

SubscribePanel.propTypes = {
  showSubscribePanel: PropTypes.bool,
  addedToWaitingList: PropTypes.bool,
  toggleViewState: PropTypes.func,
  addToClientWaitingList: PropTypes.func
};

const mapStateToProps = ({ viewReducer }) => ({
  showSubscribePanel: viewReducer.showSubscribePanel,
  addedToWaitingList: viewReducer.addedToWaitingList
});

export default connect(
  mapStateToProps,
  viewActions
)(SubscribePanel);
