import React from "react";
import "../dealsFilterStyles.scss"; 
import { Button } from "reactstrap";
import { NavLink } from "react-router-dom";

class NotSubscribedPanel extends React.Component {
  render() {
    return (
      <div
        className="height100 width100 filter-origin centered-column"
        style={{
          color: "green",
          backgroundColor: "#d4edda",
          borderColor: "#c3e6cb",
          height: 278
        }}
      >
        <br />
        <h5 className="green-text">Select you prefered departure cities</h5>

        <p className="green-text margin-top-10">
          Then you will be able to filter among them
        </p>

        <NavLink exact to="/departures">
          <Button
            color="success"
            size="sm"
            style={{ fontWeight: 600, letterSpacing: 1 }}
          >
            Select Departure Cities
          </Button>
        </NavLink>
      </div>
    );
  }
}

export default NotSubscribedPanel;
