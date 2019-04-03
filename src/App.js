 
import React from "react";
import { hot } from "react-hot-loader";
 
import Header  from "./cmp/header/Header";
import HomePage from './pages/home/HomePage'

// class App extends React.Component {
//   render() { 
//     return (
//       <HomePage/> 
//     );
//   }
// } 

class App extends React.Component {
  render() { 
    return (
      <div className="page text-center">
        <Header/> 
      </div>   
    );
  }
} 
 
export default hot(module)(App);
