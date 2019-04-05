 
import React from "react";
import { hot } from "react-hot-loader";
import { Route, Switch } from "react-router-dom"; 
import About from "./pages/about/About"; 
import NotFoundPage from "./cmp/notFound/NotFoundPage";
import Home from "./pages/home/Home";

import "./styles/tpl/style.css";
import "./styles/tpl/bootstrap.css";
 
class App extends React.Component {
  render() { 
    return (
      <div className="page text-center"> 
        <Switch>
          <Route exact path="/" component={Home} /> 
          <Route path="/about" component={About} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>   
    );
  }

  
} 


 
export default hot(module)(App);
