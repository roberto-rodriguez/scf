import React from "react";
import NavBar from "../../../../cmp/header/NavBar";
import HeaderRegion from "./HeaderRegion";

var regions = [
  "All Deals to:",
  "Europe",//2
  "Asia", //3
  "Oceania",//4
  "Caribean",//5
  "America",//6
  "Africa"//7
];
class HomeHeader extends React.Component {
  

  render() {
    return (
      <header className="page-header home-header">
        <NavBar />

        <section style={{ paddingTop: 130 }}>
          <h3 style={{ color: "white", fontFamily:'Courgette, cursive' }}>
            Find all the cheapest flights
          </h3>
          <br />
          <span style={{ color: "white", fontSize: 22, fontFamily:'Overlock, cursive' }}>
            Departing from your home city 
          </span>

          <br />
          <br />
          <span
            className="text-middle text text-italic"
            style={{ color: "white", fontFamily:'Overlock, cursive' }}
          >
             Updated Daily  
          </span>

          <br />
          <br />
          <a className="button button-primary button-circle" href="#">
            Enjoy Premium
          </a>
          <br />
          <br />
          <br />
        </section>

        <div className="isotope-filters isotope-filters-horizontal">
          <ul className="nav-custom" style={{ backgroundColor: "white" }}>
            {regions.map((r, i) => (
              <HeaderRegion 
                key={i}
                id={i + 1}
                text={r}
              />
            ))}
          </ul>
        </div>
      </header>
    );
  }

  onUpdateRegion = region => this.setState(region);
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
