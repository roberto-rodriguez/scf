import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import AboutPage from "../../components/AboutPage";
import FuelSavingsPage from "../../components/containers/FuelSavingsPage";
import NotFoundPage from "../../components/NotFoundPage";
import Home from "../../pages/home/Home";
import "./header.scss";

//add this to header when scoll down  bg-gray-dark
export class Header extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      navSolidBackground: null,
      liFocus: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => this.handleScroll());
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", () => this.handleScroll());
  }

  handleScroll() {
    var navSolidBackground = window.scrollY != 0;

    if (
      this.state.navSolidBackground == null ||
      this.state.navSolidBackground != navSolidBackground
    ) {
      this.setState({ navSolidBackground });
    }
  }

  onBlur() {
    this.setState({ liFocus: true });
  }

  onFocus() {
    this.setState({ liFocus: false });
  }

  render() {
    var navCls = "rd-navbar-wrap";
    var lisCls = "rd-navbar--has-dropdown rd-navbar-submenu";

    if (this.state.navSolidBackground) {
      navCls += " bg-gray-dark";
    }

    if (this.state.liFocus) {
      lisCls += " focus";
    }

    // {" | "}
    // <NavLink to="/fuel-savings">Demo App</NavLink>
    // {" | "}
    // <NavLink to="/about">About</NavLink>

    return (
      <div>
        <header className="page-header">
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
              className="rd-navbar rd-navbar-minimal rd-navbar-original rd-navbar-static"
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
              <img
                src={require("./images/logo-white.png")}
                className="img-responsive center-block thumbnail-image"
                style={{ float: "left", margin: "5px 0px 0px 20px" }}
                width="166"
                height="55"
                alt=""
              />
              <div className="rd-navbar-inner" style={{paddingTop:10, float:'right'}}>
                <div className="rd-navbar-nav-wrap toggle-original-elements">
                  <ul className="rd-navbar-nav">
                    <li className="rd-navbar--has-dropdown rd-navbar-submenu">
                      <a href="#">About</a>
                      <span className="rd-navbar-submenu-toggle" />
                      <ul className="rd-navbar-dropdown">
                        <li>
                          <a href="overview.html">Overview</a>
                        </li>
                        <li>
                          <a href="testimonials.html">Testimonials</a>
                        </li>
                        <li>
                          <a href="faq.html">FAQ</a>
                        </li>
                      </ul>
                    </li>

                    <li><a href="contacts.html">Login</a></li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>

          <section style={{ paddingTop: 130 }}>
            <h3 style={{ color: "white" }}>
              Welcome to the community of Smart Travelers
            </h3>
            <br/>
            <span style={{ color: "white" }}>
            We will email you the best deals from your home city to +150 cities around the world
            </span> 
            
            <br />
            <br />
            <span className="text-middle text small text-italic"  style={{ color: "white" }}>- Updated Daily -</span> 
           
            <br />
            <br />
            <a className="button button-primary button-circle"
              href="#"  >
              Subscribe FREE
            </a>
            <br />
            <br />
            <br />
          </section>

          <div className="isotope-filters isotope-filters-horizontal">
            <ul className="nav-custom" style={{ backgroundColor: "white" }}>
              <li>
                <a
                  className="active"
                  data-isotope-filter="*"
                  data-isotope-group="gallery"
                  href="#"
                >
                  All Deals to
                </a>
              </li>
              <li>
                <a
                  data-isotope-filter="Type 1"
                  data-isotope-group="gallery"
                  href="#"
                >
                  Europe
                </a>
              </li>
              <li>
                <a
                  data-isotope-filter="Type 3"
                  data-isotope-group="gallery"
                  href="#"
                >
                  Asia
                </a>
              </li>
              <li>
                <a
                  data-isotope-filter="Type 4"
                  data-isotope-group="gallery"
                  href="#"
                >
                  Oceania
                </a>
              </li>
              <li>
                <a
                  data-isotope-filter="Type 2"
                  data-isotope-group="gallery"
                  href="#"
                >
                  Caribean
                </a>
              </li>
              <li>
                <a
                  data-isotope-filter="Type 2"
                  data-isotope-group="gallery"
                  href="#"
                >
                  America{" "}
                </a>
              </li>
              <li>
                <a
                  data-isotope-filter="Type 2"
                  data-isotope-group="gallery"
                  href="#"
                >
                  Africa{" "}
                </a>
              </li>
            </ul>
          </div>
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/fuel-savings" component={FuelSavingsPage} />
          <Route path="/about" component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

/* <NavLink exact to="/">

</NavLink> */

// class App extends React.Component {
//   render() {
//     const activeStyle = { color: 'blue' };
//     return (
//       <div>
//         <div>
//           <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
//           {' | '}
//           <NavLink to="/fuel-savings" activeStyle={activeStyle}>Demo App</NavLink>
//           {' | '}
//           <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
//         </div>
//         <Switch>
//           <Route exact path="/" component={HomePage} />
//           <Route path="/fuel-savings" component={FuelSavingsPage} />
//           <Route path="/about" component={AboutPage} />
//           <Route component={NotFoundPage} />
//         </Switch>
//       </div>
//     );
//   }
// }

export default Header;
