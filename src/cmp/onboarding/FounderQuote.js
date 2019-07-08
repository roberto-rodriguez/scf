import React from "react";
import { connect } from "react-redux";
import * as viewActions from "../../actions/ViewActions";
import PropTypes from "prop-types";
import "./subscribePanel.scss";
import validator from "email-validator";
import { Alert } from "reactstrap";
import { HashLink } from "react-router-hash-link";

class FounderQuote extends React.Component {
  state = {
    email: "",
    showSuccess: false,
    showWaitingListInput: false
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
      toggleViewState,
      showFull
    } = this.props;

    var { showSuccess, showWaitingListInput } = this.state;

    if (showSuccess) {
      return (
        <Alert color="success">
          You were added to our waiting list. We will notify you when we
          officially launch.
        </Alert>
      );
    }

    if (!showSubscribePanel || addedToWaitingList) {
      return <section className="section-80 section-lg-30" />;
    } else
      return (
        <section className="section-30 section-xl-50 bg-image-01 context-dark">
          <img
            onClick={() => toggleViewState("showSubscribePanel")}
            className={"cursor-pointer"}
            src={require("../../styles/images/close_white.png")}
            style={{
              position: "absolute",
              top: "103vh",
              right: "3%",
              height: 30,
              width: 30
            }}
          />
          <div className="container container-wide">
            <div className="row row-30">
              <div className="col-xl-3 col-lg-3 float-right">
                <img
                  className="img-circle img-responsive center-block  float-right"
                  src="../../styles/images/me.jpg"
                  width="140"
                  height="140"
                  style={{ border: "1px solid #42d4ec" }}
                  alt=""
                />
              </div>

              <div className="col-xl-7 col-lg-7">
                <blockquote className="quote">
                  <p>
                    <q style={{ fontSize: 17 }}>
                      {showFull && (
                        <span>
                          We’re passionate about our work, and take great pride
                          in help our fellow travelers to travel the world in an
                          affordable way.
                          <br />
                        </span>
                      )}
                      We are developing new initiatives and features every day
                      to make this the Best Cheap Flight Service, made by
                      travelers for travelers. We would like you to join us on
                      this journey,{" "}
                      <span style={{ color: "#42d4ec" }}>
                        subscribe to our waiting list, leave us your feedback
                      </span>
                      , and you will receive one year of FREE Premium when we
                      officially launch.
                      <cite className="text-gray margin-left-10">
                        Robert Rodriguez, founder
                      </cite>
                    </q>
                  </p>
                </blockquote>
                {showWaitingListInput ? (
                  <div>
                    <input
                      type="text"
                      style={{ height: 39 }}
                      placeholder="Email Address"
                      onChange={this.onChange}
                    />
                    <button
                      className="button blue-button button-xxs"
                      onClick={this.onSave}
                    >
                      <span>Join</span>
                    </button>
                  </div>
                ) : (
                  <div>
                    <button
                      className="button blue-button button-xs button-naira button-naira-up"
                      onClick={() =>
                        this.setState({ showWaitingListInput: true })
                      }
                    >
                      <span className="icon fa-envelope-o" />
                      <span>Join Waiting List</span>
                    </button>
                    <HashLink smooth to="/about#contact">
                      <button
                        className="button button-primary button-xs button-naira button-naira-up  margin-left-10"
                        type="submit"
                      >
                        <span className="icon fa-envelope-o" />
                        <span>Leave Feedback</span>
                      </button>
                    </HashLink>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      );
  }
}

FounderQuote.propTypes = {
  showFull: PropTypes.bool,
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
)(FounderQuote);
