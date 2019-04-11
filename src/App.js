import React from "react";
import { hot } from "react-hot-loader";
import { Route, Switch } from "react-router-dom";
import About from "./pages/about/About";
import NotFoundPage from "./cmp/notFound/NotFoundPage";
import Home from "./pages/home/Home";
import Deal from "./pages/details/Deal";

import "./styles/tpl/style.css";
import "./styles/tpl/bootstrap.css";

class App extends React.Component {
  render() {
    return (
      <div className="page text-center">
        <Switch>
          <Route  key={'deal'}
            name="deal"
            path="/deal/:postId/:sampleSearchCityId"
         
            component={Deal}
          />
          <Route exact path="/" component={Home} key={'home'}/>
          <Route path="/about" component={About}  key={'about'}/>
          <Route component={NotFoundPage}  key={'notFound'}/>
        </Switch>
      </div>
    );
  }
}

export default hot(module)(App);
