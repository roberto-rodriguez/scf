import React from "react";
import NavBar from "../../../../cmp/header/NavBar";
import * as utils from "../../../../utils/util";
import { SubscribeButton, BottomLeft, BottomRight } from "./cmp";

import "./homeHeaderStyles.scss";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import WelcomePanel from "../../../../cmp/onboarding/WelcomePanel";

class HomeHeader extends React.Component {
  render() {
    var { appStarted, showWelcome } = this.props;

    return (
      <header className="home-header2">
        <NavBar hasFilters={true} />

        <div className="home-header-wrap">
          <div className="home-header-top">
            {showWelcome && <WelcomePanel />}
            <div className="home-header-top-inner">
              {!showWelcome && (
                <div className="home-header-top-title">
                  <h3
                    className="blue-text"
                    style={{ fontFamily: "Courgette, cursive" }}
                  >
                    <span
                      className="pink-text"
                      style={{ fontFamily: "Courgette, cursive" }}
                    >
                      {" Extremely Cheap "}
                    </span>
                    last minute flights
                  </h3>
                </div>
              )}

              {!showWelcome && appStarted && <SubscribeButton />}
            </div>
          </div>

          <div className="home-header-bottom">
            {appStarted && (
              <div
                className="arrow bounce cursor-pointer"
                onClick={() => utils.scrollTo(600, 1000)}
              >
                {!showWelcome && <span className="fa fa-chevron-down fa-2x" />}
              </div>
            )}

            <BottomLeft />
            <BottomRight />
          </div>
        </div>

        <a
          href="https://unsplash.com/@simonmigaj?utm_source=trello&amp;utm_medium=referral&amp;utm_campaign=api-credit"
          target="_blank"
          rel="noopener noreferrer"
          title="Simon Migaj"
          className="image-credit" 
        >
          Photo by: Simon Migaj
        </a>
      </header>
    );
  }

  onUpdateRegion = region => this.setState(region);
}

{
  /* <div className="isotope-filters isotope-filters-horizontal">
  <ul className="nav-custom" style={{ backgroundColor: "white" }}>
    {appStarted &&
      regions.map((r, i) => <HeaderRegion key={i} id={i + 1} text={r} />)}
  </ul>
</div>; */
}

HomeHeader.propTypes = {
  appStarted: PropTypes.bool,
  showTour: PropTypes.bool,
  showWelcome: PropTypes.bool
};

const mapStateToProps = ({ authReducer, viewReducer }) => ({
  appStarted: authReducer.appStarted,
  showWelcome: viewReducer.showWelcome,
  showTour: viewReducer.showTour
});

export default connect(mapStateToProps)(HomeHeader);
