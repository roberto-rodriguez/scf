import React from "react";
import NavBar from "../../../cmp/header/NavBar";

class DealHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <header
        className="page-header"
        style={{
          background: "no-repeat  url('./images/rome_x.jpg') center"
        }}
      >
        <NavBar navBck />
      </header>
    );
  }
}

export default DealHeader;
