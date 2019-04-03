import React from "react"; 
import NavBar from "../../cmp/header/NavBar"; 

//add this to header when scoll down  bg-gray-dark
  class Header extends React.Component {
  
  render() { 
    return (
      <header className="basic-header bg-gray-dark">
        <NavBar /> 
      </header>
    );
  }
}
 
export default Header;
