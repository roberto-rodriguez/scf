import React from "react";
import PropTypes from "prop-types";
import CityPost from "./CityPost";
var cityNames = ["rome_s", "venice", "pisa", "milan", "florence"];

class NearbyCities extends React.Component {
  render() { 

    var cityPosts = [];
    for (var i = 0; i < 4; i++) {
      cityPosts.push(<CityPost key={i} imgName={cityNames[i]} />);
    }

    return (
      <div>
        <h5 className="text-bold hr-title" style={{ marginTop: 18 }}>
          Nearby cities
        </h5>

        <div className="row row-30">{cityPosts}</div>
      </div>
    );
  }
}

NearbyCities.propTypes = {
   
};

export default NearbyCities;
