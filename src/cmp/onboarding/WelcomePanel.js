import React from "react";
import Tour from "reactour";
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
      setTimeout(() => this.setState({ showWelcomePanel: true }), 1000);
    }
  }

  render() {
    var { toggleViewState, setViewStateProps, showWelcome } = this.props;

    return (
      <Rotate left when={showWelcome && this.state.showWelcomePanel}>
        <div id="welcome-panel">
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
              Welcome to
            </span>
            <span
              className={"pink-text"}
              style={{
                fontWeight: "bold",
                fontFamily: "Courgette, serif",
                paddingRight: 8
              }}
            >
              Fly
            </span>
            Super Cheap
            <i
              className={"icon fa fa-paper-plane pink-text"}
              style={{ marginLeft: 10 }}
            />
          </h5>
          <br />
          <h5 className="text-align-left">
            A site made by travellers for travellers
          </h5>
          <p className="text-align-left" style={{ fontSize: 18 }}>
            Every day we analyze all flight combinations from your home city to
            <span className="pink-text">{" +200 "}</span> cities around the
            world for the next 12 months, and post here the{" "}
            <span className="pink-text">Best Deals</span>, and the details on
            how to book them.
          </p>
          Let us show you the most popular features you can take advantage of on
          our site.
          <br />
          It will just take a minute!
          <br />
          <br />
          <b
            className={"grey-text margin-right-10 cursor-pointer"}
            style={{ textDecoration: "underline" }}
            onClick={() => toggleViewState("showWelcome")}
          >
            No Thanks
          </b>
          <span
            className={
              "button button-xxs button-primary button-circle margin-left-10"
            }
            onClick={() =>
              setViewStateProps({ showWelcome: false, showTour: true })
            }
          >
            {"Let's Go!"}
          </span>
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
