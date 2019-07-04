import React from "react";
import * as Constants from "../../../../../constants/Constants";

class BottomLeft extends React.Component {
  render() {
    return (
      <div className="home-header-text-bottom-left  hide-for-mobile">
        <img
          className={"float-left hide-for-mobile"}
          src={require("../../../../../styles/images/plane_icon.png")}
        />
        <br />
        <h4
          className={"float-left font-18"}
          style={{
            color: "#3b4252",
            fontFamily: "'AvenirNextLTW01-Medium', sans-serif"
          }}
        >
          Great Flight Deals up to 80% OFF
        </h4>
      </div>
    );
  }
}

export default BottomLeft;
