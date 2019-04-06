import React from "react"; 
import NavBar from "../../../cmp/header/NavBar"; 



 class DetailsHeader extends React.Component {
  constructor(props) {
    super(props); 

    this.state = { 
    };
  }
 
 
  render() {  
    return (
      <header className="page-header" style={{background: 'no-repeat url(http://localhost:3000/rome_x.jpg) center'}}>
        <NavBar navBck/>

        
 
      </header>
    );
  }
} 

export default DetailsHeader;
