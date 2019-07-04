import React from "react";

class BottomRight extends React.Component {
  render() {
    return (
      <div className="home-header-text-bottom-right  hide-for-mobile">
        <img
          className={"float-right hide-for-mobile"}
          src={require("../../../../../styles/images/calendar.png")}
        />
        <br />
        <h4 className={"float-right font-18"}>Updated every day</h4>
      </div>
    );
  }
}

export default BottomRight;
