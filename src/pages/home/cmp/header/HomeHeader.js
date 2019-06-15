import React from "react";
import NavBar from "../../../../cmp/header/NavBar";
import * as utils from "../../../../utils/util";
import { HeaderRegion, SubscribeButton } from "./cmp";
import "./homeHeaderStyles.scss";
import { connect } from "react-redux";
import PropTypes from "prop-types";

var regions = [
  "All Deals to:",
  "Europe", //2
  "Asia", //3
  "Oceania", //4
  "Caribean", //5
  "America", //6
  "Africa" //7
];
class HomeHeader2 extends React.Component {
  render() {
    var { appStarted } = this.props;

    return (
      <header className="home-header2">
        <NavBar />

        <div className="home-header-wrap">
          <div className="home-header-top">
            <div className="home-header-top-inner">
              <div className="home-header-top-title">
                <h3
                  className="blue-text"
                  style={{ fontFamily: "Courgette, cursive" }}
                >
                  We help you to
                  <span
                    className="pink-text"
                    style={{ fontFamily: "Courgette, cursive" }}
                  >
                    {" Fly Super Cheap "}
                  </span> 
                </h3>
                <br />
                <h4 className="blue-text">Finding the BEST DEALS departing from your home city</h4>
                <br />
                <h4
                  className="home-header-sub-title"
                  style={{ color: "maroon" }}
                >
                  Deals up to 70% OFF
                </h4>
              </div>

              {appStarted && <SubscribeButton />}
            </div>
          </div>

          <div className="home-header-bottom">
            <div className="isotope-filters isotope-filters-horizontal">
              <ul className="nav-custom" style={{ backgroundColor: "white" }}>
                {appStarted &&
                  regions.map((r, i) => (
                    <HeaderRegion key={i} id={i + 1} text={r} />
                  ))}
              </ul>
            </div>

            {appStarted && (
              <div
                className="arrow bounce cursor-pointer"
                onClick={() => utils.scrollTo(600, 1000)}
              >
                <span className="fa fa-chevron-down fa-2x" />
              </div>
            )}
          </div>
        </div>

        <a
          href="https://unsplash.com/@simonmigaj?utm_source=trello&amp;utm_medium=referral&amp;utm_campaign=api-credit"
          target="_blank"
          rel="noopener noreferrer"
          title="Simon Migaj"
          className="hide-on-tablet"
          style={{ position: "absolute", bottom: 10, right: 10 }}
        >
          Photo by: Simon Migaj
        </a>
      </header>
    );
  }

  onUpdateRegion = region => this.setState(region);
}

const mapStateToProps = ({ authReducer }) => ({
  appStarted: authReducer.appStarted
});

export default connect(mapStateToProps)(HomeHeader2);
