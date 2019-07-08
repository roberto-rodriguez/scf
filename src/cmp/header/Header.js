import React from "react";
import NavBar from "../../cmp/header/NavBar";

class Header extends React.Component {
  render() {
    return (
      <header className="basic-header bg-gray-dark">
        <NavBar navSolidBackground={true} alwaysSolid={true} />
      </header>
    );
  }
}

export default Header;
