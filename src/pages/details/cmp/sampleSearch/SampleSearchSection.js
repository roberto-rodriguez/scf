import React from "react";
import PropTypes from "prop-types";   
import SampleSearch from "./SampleSearch";

class SampleSearchSection extends React.Component {
  providers = {
    google: { name: "Google Flights", image: "google.png" },
    sky: { name: "Sky Scanner", image: "skyscanner.jpg" },
    momondo: { name: "Momondo", image: "momondo.png" },
    kayak: { name: "Kayak" },
    kiwi: { name: "Kiwi.com", image: "kiwi.png" }
  };
 
  render() {
    var { sampleSearchList } = this.props; 

    return (
      <ul className="list-tickets"> 
      {sampleSearchList.map((s, i) => (<SampleSearch sampleSearch={s} id={i} key={i}/>))} 
    </ul>
    );
  }
}

SampleSearchSection.propTypes = {
  sampleSearchList: PropTypes.any 
};

export default SampleSearchSection;
