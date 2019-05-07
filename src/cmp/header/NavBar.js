import React from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";
import PropTypes from "prop-types";
import { LoginButton } from "./cmp";
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
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
    var { navBck } = this.props;
    var navCls = "rd-navbar-wrap";

    if (this.state.navSolidBackground) {
      navCls += " bg-gray-dark";
    } else {
      if (navBck) {
        navCls += " nav-bck";
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
          className="rd-navbar rd-navbar-minimal rd-navbar-static"
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
          <NavLink exact to="/">
            <h5
              style={{
                float: "left",
                margin: "24px 0px 0px 20px",
                color: "white",
                fontFamily: "Courgette, serif",
                fontSize: 25 
              }}
            >
              <span 
                className="yellow-text"
                style={{ 
                  fontWeight: "bold",
                  fontFamily: "Courgette, serif",
                  paddingRight: 8
                }}
              > 
                Fly
              </span>
              Super Cheap
              <i className="icon fa fa-paper-plane yellow-text" style={{marginLeft: 10 }}/>
            </h5>
          </NavLink>
          <div
            className="rd-navbar-inner"
            style={{ paddingTop: 10, float: "right" }}
          >
            <div className="rd-navbar-nav-wrap toggle-original-elements">
              <ul className="rd-navbar-nav">
                <li className="rd-navbar--has-dropdown rd-navbar-submenu">
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
                <LoginButton />
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

NavBar.propTypes = {
  navBck: PropTypes.bool
};

export default NavBar;
