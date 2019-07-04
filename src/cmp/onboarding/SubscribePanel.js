import React from "react";
import { connect } from "react-redux";
import * as viewActions from "../../actions/ViewActions";
import PropTypes from "prop-types";
import "./subscribePanel.scss";

class SubscribePanel extends React.Component {
  render() {
    var { showSubscribePanel, toggleViewState } = this.props;

    if (!showSubscribePanel) return null;

    return (
      <section className="section-lg-30 centered hide-for-mobile ">
        <div className="subscribe-panel">
          <img
            onClick={() => toggleViewState("showSubscribePanel")}
            className={"float-right cursor-pointer"}
            src={require("../../styles/images/close.png")}
          />
          <h5>
            Enjoy our service completely FREE for now
            <br />
            <br />
            Join our waiting list to get one year of FREE premium when we launch
            <span className="cursor-pointer margin-left-10 grey-text font-15">
              (Learn more)
              <i className="fa fa-long-arrow-right mobile-font-50 margin-left-10" />
            </span>
          </h5>
          <br />
          <div>
            <input
              className="green-input"
              type="text"
              placeholder="Email Address"
            />
            <span className="green-btn">Join Waiting List</span>
          </div>
          <br />
        </div>
      </section>
    );
  }
}

SubscribePanel.propTypes = {
  showSubscribePanel: PropTypes.bool,
  toggleViewState: PropTypes.func
};

const mapStateToProps = ({ viewReducer }) => ({
  showSubscribePanel: viewReducer.showSubscribePanel
});

export default connect(
  mapStateToProps,
  viewActions
)(SubscribePanel);
