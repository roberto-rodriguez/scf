
import React from "react"; 
import PropTypes from "prop-types"; 
var agentImg = require("../../../../styles/images/agent.jpg");
import { Button } from "reactstrap";
import { NavLink } from "react-router-dom";

class ExpiredDealNotice extends React.Component {

  render() { 
    return (
      <div
        className="centered  margin-top-10"
        style={{
          color: "green",
          backgroundColor: "#d4edda",
          borderColor: "#c3e6cb",
          height: 175
        }}
      >  
        <h5 className="green-text">Premium users received this Deal 3 days ago</h5>

        <p className="green-text margin-top-10">
          Subscribe today and get 1 month of free premium
        </p>

        <NavLink exact to="/subscribe" className="margin-top-10">
          <Button
            color="success"
            size="sm" 
            style={{ fontWeight: 600, letterSpacing: 1 }}
          >
            Subscribe FREE
          </Button>
        </NavLink>

        <NavLink exact to="/subscribe" className="margin-top-10 grey-text">
          Learn about premium
          <i className="fa fa-long-arrow-right margin-left-10 "></i>
        </NavLink>
      </div>
    );
  }
}
 

export default ExpiredDealNotice;
