 
import React from "react";
import { hot } from "react-hot-loader";
import { Route, Switch } from "react-router-dom"; 
import About from "./pages/about/About";
import FuelSavingsPage from "./components/containers/FuelSavingsPage";
import NotFoundPage from "./components/NotFoundPage";
import Home from "./pages/home/Home";
// class App extends React.Component {
//   render() { 
//     return (
//       <HomePage/> 
//     );
//   }
// } 

class App extends React.Component {
  render() { 
    return (
      <div className="page text-center"> 
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/fuel-savings" component={FuelSavingsPage} />
          <Route path="/about" component={About} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>   
    );
  }
} 
 
export default hot(module)(App);
