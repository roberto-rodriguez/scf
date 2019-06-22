import React from "react";
import "../dealsFilterStyles.scss";
var agentImg = require("../../../../../../styles/images/agent.jpg");
import { Button } from "reactstrap";
import { NavLink } from "react-router-dom";

class NotSubscribedPanel extends React.Component {
  render() {
    return (
      <div
        className="height100 width100 filter-origin centered"
        style={{
          color: "green",
          backgroundColor: "#d4edda",
          borderColor: "#c3e6cb",
          height: 278
        }}
      >
        <img
          src={agentImg}
          className="img-responsive center-block thumbnail-image"
          style={{
            marginTop: 8,
            width: 160,
            height: 120,
            borderRadius: 70,
            backgroundSize: "cover",
            display: "block"
          }}
          alt=""
        />
        <br />
        <h5 className="green-text">Subscribe FREE today</h5>

        <h5 className="green-text margin-top-10">
          To filter the deals departing from your near cities
        </h5>

        <NavLink exact to="/subscribe">
          <Button
            color="success"
            size="sm"
            className="margin-top-10"
            style={{ fontWeight: 600, letterSpacing: 1 }}
          >
            Subscribe
          </Button>
        </NavLink>
      </div>
    );
  }
}

export default NotSubscribedPanel;
