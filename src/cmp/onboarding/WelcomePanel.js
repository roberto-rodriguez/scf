import React from "react";
import { connect } from "react-redux";
import * as viewActions from "../../actions/ViewActions";
import PropTypes from "prop-types";
import Rotate from "react-reveal/Rotate";
import "./welcomePanel.scss";

class WelcomePanel extends React.Component {
  state = {
    showWelcomePanel: false
  };

  componentDidMount() {
    if (this.props.showWelcome) {
      setTimeout(() => this.setState({ showWelcomePanel: true }), 500);
    }
  }

  render() {
    var { toggleViewState, setViewStateProps, showWelcome } = this.props;

    return (
      <Rotate left when={showWelcome && this.state.showWelcomePanel}>
        <div id="welcome-panel">
          <img
            onClick={() => toggleViewState("showWelcome")}
            className={"hide-for-mobile"}
            src={require("../../styles/images/close.png")}
          />
          <h5
            className={"blue-text text-align-left"}
            style={{
              fontFamily: "Courgette, serif",
              fontSize: 25
            }}
          >
            <span
              className="margin-right-10"
              style={{
                fontFamily: "Helvetica, Arial, sans-serif",
                color: "#3e3f40"
              }}
            >
              {" "}
              Welcome !!!
            </span>
          </h5>
          <br />
          <h5 className="text-align-left" style={{ lineHeight: 1.5 }}>
            Every day we find the{" "}
            <span className="pink-text"> Best Flight Deals </span>
            departing from your city comparing prices across all major Flight
            Search Sites.
          </h5>
          <p className="text-align-left" style={{ fontSize: 18 }}>
            Here you will find a{" "}
            <span className="pink-text">transparent price comparation </span> for
            these Deals across all providers, destinations and dates, all in one
            place. We are not a travel agency. We do not sell flight tickets.
          </p>
          <span className="text-align-left">
            Let us show you the most popular features you can take advantage of
            on our site. It will just take a minute!{" "}
          </span>
          <br />
          <br />

          <span
            className={
              "button button-xxs button-primary button-circle margin-left-10"
            }
            onClick={() =>
              setViewStateProps({ showWelcome: false, showTour: true })
            }
          >
            {"Take a Tour"}
          </span>

          <b
            className={
              "grey-text margin-right-10 cursor-pointer no-thanks-link"
            }
            style={{ textDecoration: "underline" }}
            onClick={() => toggleViewState("showWelcome")}
          >
            No Thanks
          </b>
        </div>

        <br />
        <br />
      </Rotate>
    );
  }
}

WelcomePanel.propTypes = {
  showTour: PropTypes.bool,
  showWelcome: PropTypes.bool,
  toggleViewState: PropTypes.func,
  setViewStateProps: PropTypes.func
};

const mapStateToProps = ({ viewReducer }) => ({
  showTour: viewReducer.showTour,
  showWelcome: viewReducer.showWelcome
});

export default connect(
  mapStateToProps,
  viewActions
)(WelcomePanel);
