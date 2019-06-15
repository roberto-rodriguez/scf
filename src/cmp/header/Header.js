import React from "react"; 
import NavBar from "../../cmp/header/NavBar"; 
 
  class Header extends React.Component {
  
  render() { 
    return (
      <header className="basic-header bg-gray-dark">
        <NavBar navBck/> 
      </header>
    );
  }
}
 
export default Header;
