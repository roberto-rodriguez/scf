import React from "react";
import { NavLink } from "react-router-dom";
import "../header.scss";
import PropTypes from "prop-types"; 
class Logo extends React.Component {
 
  render() {
    var { navSolidBackground } = this.props; 

    var darkerColor = navSolidBackground ? 'white-text': 'blue-text';
  
    return (
      <NavLink exact to="/">
      <h5 className={darkerColor}
        style={{
          float: "left",
          margin: "24px 0px 0px 20px", 
          fontFamily: "Courgette, serif",
          fontSize: 25 
        }}
      >
        <span 
          className='pink-text' 
          style={{ 
            fontWeight: "bold",
            fontFamily: "Courgette, serif",
            paddingRight: 8
          }}
        > 
          Fly
        </span>
        Super Cheap
        <i className={`icon fa fa-paper-plane pink-text`} style={{marginLeft: 10 }}/>
      </h5>
    </NavLink>
    );
  }
}

Logo.propTypes = {
  navSolidBackground: PropTypes.bool
};

export default Logo;
