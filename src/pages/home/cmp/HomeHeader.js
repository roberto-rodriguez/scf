import React from "react"; 
import NavBar from "../../../cmp/header/NavBar"; 



 class HomeHeader extends React.Component {
  constructor(props) {
    super(props); 

    this.state = { 
    };
  }
 
 
  render() {  
    return (
      <header className="page-header home-header">
        <NavBar />

        <section style={{ paddingTop: 130 }}>
          <h3 style={{ color: "white" }}>
            Welcome to the community of Smart Travelers
          </h3>
          <br />
          <span style={{ color: "white" }}>
            Here you will find the best deals from your home city to +150 cities
            around the world
          </span>

          <br />
          <br />
          <span
            className="text-middle text small text-italic"
            style={{ color: "white" }}
          >
            - Updated Daily -
          </span>

          <br />
          <br />
          <a className="button button-primary button-circle" href="#">
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

export default HomeHeader;
