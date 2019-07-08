import React from "react";
import { NavLink } from "react-router-dom";
import "../header.scss";
import PropTypes from "prop-types";
import { Badge } from "reactstrap";

class Logo extends React.Component {
  render() {
    var { navSolidBackground, showBeta } = this.props;

    var darkerColor = navSolidBackground ? "white-text" : "blue-text";
    var lighterColor = navSolidBackground ? "yellow-text" : "pink-text";

    return (
      <NavLink exact to="/">
        <h5 className={darkerColor + " fsc-logo"}>
          <span
            className={lighterColor}
            style={{
              fontWeight: "bold",
              fontFamily: "Courgette, serif",
              paddingRight: 8
            }}
          >
            Fly
          </span>
          Super Cheap
          <i
            className={`icon fa fa-paper-plane ${lighterColor}`}
            style={{ marginLeft: 10 }}
          />
        </h5>
        {showBeta && (
          <Badge color="warning" className={"margin-left-10"}>
            BETA
          </Badge>
        )}
      </NavLink>
    );
  }
}

Logo.propTypes = {
  navSolidBackground: PropTypes.bool,
  showBeta: PropTypes.bool
};

export default Logo;
