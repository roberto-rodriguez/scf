//To run in Dev Mode: npm start -s
//To run in Heroku: git push heroku master
//Cloudinary  roberto.us.2019@gmail.com  Generic1!
//https://331155194479742:331155194479742@api.cloudinary.com/v1_1/fsc/resources/image
import React from "react";
import { hot } from "react-hot-loader";
import { Route, Switch } from "react-router-dom";
import NotFoundPage from "./cmp/notFound/NotFoundPage";
import { Home, Deal, About, Login, Register } from "./pages/";

import "./styles/tpl/style.css";
import "./styles/tpl/bootstrap.css";

class App extends React.Component {


  render() {
    return (
      <div className="page text-center">
        <Switch>
          <Route
            key={"deal"}
            name="deal"
            path="/deal/:postId/:sampleSearchCityId"
            component={Deal}
          />
          <Route exact path="/" component={Home} key={"home"} />
          <Route path="/about" component={About} key={"about"} />
          <Route path="/login" component={Login} key={"login"} />
          <Route path="/subscribe" component={Register} key={"subscribe"} />
          <Route component={NotFoundPage} key={"notFound"} />
        </Switch>
      </div>
    );
  }
}


export default hot(module)(App);
