import React from "react";
import NavBar from "../../../../cmp/header/NavBar";
import "./dealHeader.scss";
class DealHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <header
        className="page-header deal-header"
        style={{
          backgroundSize: 'cover',
          background: "no-repeat  url(https://res.cloudinary.com/fsc/image/upload/v1556212036/TNR.jpg) center"
        }}
      >
        <NavBar navBck />
      </header>
    );
  }
}

export default DealHeader;
