import React from "react";
 
import Header from "../../cmp/header/Header";

const About = () => {
  return (
    <div>
      <Header />
      <div>
        <br />
        <br />
        <br />
        <h4 className="alt-header">We're Getting Ready to Launch</h4>
        <br />
        <br />
        <br />
        <div className="centered-column">
          <h5 className="alt-header" style={{ maxWidth: "60%" }}>
            Our website is under construction, we are working very hard to give
            you the best experience on our new web site.
          </h5>

          <img
            src={require("../../styles/images/launch.gif")}
            style={{ marginTop: 40 }}
            alt="Almost there!!!"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
