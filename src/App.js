/* eslint-disable import/no-named-as-default */
// import { NavLink, Route, Switch } from "react-router-dom";

// import AboutPage from "./components/AboutPage";
// import FuelSavingsPage from "./components/containers/FuelSavingsPage";
import Home  from "./pages/home/Home";
// import NotFoundPage from "./components/NotFoundPage";
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() { 
    return (
      <Home/>
    );
  }
}


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

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
