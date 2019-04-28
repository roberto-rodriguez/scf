import React from "react";
import NavBar from "../../../../cmp/header/NavBar";
import "./dealHeader.scss";
import PropTypes from "prop-types";
 
class DealHeader extends React.Component {
  render() {
    var { image, cityCode } = this.props;
  
    return (
      <header
        className="page-header deal-header"
        style={{
          backgroundSize: "cover",
          background: `no-repeat  url(https://res.cloudinary.com/fsc/image/upload/${image}/${cityCode}.jpg) center`
        }}
      >
        <NavBar navBck />
      </header>
    );
  }
}

DealHeader.propTypes = {
  image: PropTypes.string,
  cityCode: PropTypes.string
};

export default DealHeader;
