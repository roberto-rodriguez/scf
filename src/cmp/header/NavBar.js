import React from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";
import PropTypes from "prop-types";
import { LoginButton, FilterButton, Logo } from "./cmp";
import { connect } from "react-redux";
import DealsFilter from "../../pages/home/cmp/header/dealsFilter/DealsFilter";
 
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navSolidBackground: null,
      liFocus: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    var navSolidBackground = window.scrollY != 0;

    if (
      this.state.navSolidBackground == null ||
      this.state.navSolidBackground != navSolidBackground
    ) {
      this.setState({ navSolidBackground });
    }
  };

  onBlur() {
    this.setState({ liFocus: true });
  }

  onFocus() {
    this.setState({ liFocus: false });
  }

  render() {
    var { navBck, appStarted, hasFilters, showFilters } = this.props;
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
                <Logo navSolidBackground={navBck || navSolidBackground} />
 
                {hasFilters && <FilterButton />}

                <ul className="rd-navbar-nav" style={{ float: "right" }}>
                  <li
                    className={`rd-navbar--has-dropdown rd-navbar-submenu ${
                      darkNavLink ? "dark-nav-link" : ""
                    }`}
                  >
                    <a href="#">About</a>
                    <span className="rd-navbar-submenu-toggle" />
                    <ul className="rd-navbar-dropdown">
                      <li>
                        <NavLink to="/about">Overview</NavLink>
                      </li>
                      <li>
                        <NavLink to="/about">Testimonials</NavLink>
                      </li>
                      <li>
                        <NavLink to="/about">FAQ</NavLink>
                      </li>
                    </ul>
                  </li>
                  <LoginButton darkNavLink={darkNavLink} />
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
  hasFilters: PropTypes.bool,
  setViewState: PropTypes.func
};

const mapStateToProps = ({ authReducer, viewReducer }) => ({
  appStarted: authReducer.appStarted,
  showFilters: viewReducer.showFilters
});

export default connect(mapStateToProps)(NavBar);
