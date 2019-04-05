import React from "react";
import { Link } from "react-router-dom"; 

import Header from "../../cmp/header/Header";
//<div className="page text-center">
const About = () => {
  return (
    <div>
      <Header />
      <div>
        <h2 className="alt-header">About</h2>
        <p>
          This example app is part of the{" "}
          <a href="https://github.com/coryhouse/react-slingshot">
            React-Slingshot starter kit
          </a>
          .
        </p>
        <p>
          <Link to="/badlink">Click this bad link</Link> to see the 404 page.
        </p>
      </div>
    </div>
  );
};

export default About;
