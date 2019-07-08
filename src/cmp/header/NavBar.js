import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./header.scss";
import PropTypes from "prop-types";
import { LoginButton, FilterButton, Logo } from "./cmp";
import { connect } from "react-redux";
import * as viewActions from "../../actions/ViewActions";
import DealsFilter from "../../pages/home/cmp/header/dealsFilter/DealsFilter";
import Filter from "../../pages/home/cmp/header/filter/Filter";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navSolidBackground: props.navSolidBackground
      // liFocus: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    var { showWelcome, toggleViewState, alwaysSolid } = this.props;
    var navSolidBackground = window.scrollY != 0;

    if (
      !alwaysSolid &&
      (this.state.navSolidBackground == null ||
        this.state.navSolidBackground != navSolidBackground)
    ) {
      this.setState({ navSolidBackground });
    }

    if (showWelcome) {
      toggleViewState("showWelcome");
    }
  };

  // onBlur() {
  //   this.setState({ liFocus: true });
  // }

  // onFocus() {
  //   this.setState({ liFocus: false });
  // }

  render() {
    var {
      navBck,
      appStarted,
      hasFilters,
      showFilters,
      setViewStateProps,
      isHome
    } = this.props;
    var { navSolidBackground } = this.state;
    var navCls = "rd-navbar-wrap";
    var darkNavLink = false;

    if (navSolidBackground) {
      navCls += " bg-gray-dark";
    } else {
      if (navBck) {
        navCls += " nav-bck";
      } else {
        darkNavLink = true;
      }
    }

    //   <img
    //   src={require("./images/logo.png")}
    //   className="img-responsive center-block thumbnail-image"
    //   style={{ float: "left", margin: "18px 0px 0px 20px" }}
    //   width="230"
    //   alt=""
    // />

    return (
      <div
        className={navCls}
        style={{
          height: 70,
          width: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 10000
        }}
      >
        <nav
          className="rd-navbar rd-navbar-minimal rd-navbar-static heigth100"
          data-layout="rd-navbar-fixed"
          data-sm-layout="rd-navbar-fixed"
          data-md-layout="rd-navbar-fixed"
          data-md-device-layout="rd-navbar-fixed"
          data-lg-layout="rd-navbar-static"
          data-lg-device-layout="rd-navbar-static"
          data-xl-layout="rd-navbar-static"
          data-xl-device-layout="rd-navbar-static"
          data-xxl-layout="rd-navbar-static"
          data-xxl-device-layout="rd-navbar-static"
          data-lg-stick-up-offset="1px"
          data-xl-stick-up-offset="60px"
          data-xxl-stick-up-offset="60px"
          data-lg-stick-up="true"
          data-xl-stick-up="true"
          data-xxl-stick-up="true"
        >
          {appStarted && (
            <div className="rd-navbar-inner heigth100">
              <div
                className="rd-navbar-nav-wrap toggle-original-elements heigth100 width100"
                style={{ justifyContent: "space-between" }}
              >
                {isHome ? (
                  <Logo
                    navSolidBackground={navBck || navSolidBackground}
                    showBeta
                  />
                ) : (
                  <ul className="rd-navbar-nav float-left">
                    <li className={darkNavLink ? "dark-nav-link" : ""}>
                      <NavLink to="/">
                        <i className="fa fa-long-arrow-left mobile-font-50 margin-right-10" />
                        Back to Deals
                      </NavLink>
                    </li>
                  </ul>
                )}

                {hasFilters && navSolidBackground && <Filter />}

                <ul className="rd-navbar-nav float-right">
                  <li
                    className={`rd-navbar--has-dropdown rd-navbar-submenu ${
                      darkNavLink ? "dark-nav-link" : ""
                    }`}
                  >
                    <a href="#">About</a>
                    <span className="rd-navbar-submenu-toggle" />
                    <ul className="rd-navbar-dropdown" style={{ left: -120 }}>
                      <li>
                        <NavLink to="/about">Overview</NavLink>
                      </li>
                      <li>
                        <span
                          onClick={() =>
                            setViewStateProps({
                              showWelcome: false,
                              showTour: true
                            })
                          }
                        >
                          Take a Tour
                        </span>
                      </li>
                      <li>
                        <NavLink to="/departures">
                          Select Departure Cities
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/about">FAQ</NavLink>
                      </li>
                      <li>
                        <HashLink smooth to="/about#contact">
                          Contact Us
                        </HashLink>
                      </li>
                    </ul>
                  </li>
                  {false && <LoginButton darkNavLink={darkNavLink} />}
                </ul>
              </div>

              {hasFilters && showFilters && <DealsFilter />}
            </div>
          )}
        </nav>
      </div>
    );
  }
}

NavBar.propTypes = {
  navBck: PropTypes.bool,
  appStarted: PropTypes.bool,
  showFilters: PropTypes.bool,
  isHome: PropTypes.bool,
  hasFilters: PropTypes.bool,
  setViewState: PropTypes.func,
  setViewStateProps: PropTypes.func
};

const mapStateToProps = ({ authReducer, viewReducer }) => ({
  appStarted: authReducer.appStarted,
  showFilters: viewReducer.showFilters,
  showWelcome: viewReducer.showWelcome
});

export default connect(
  mapStateToProps,
  viewActions
)(NavBar);
