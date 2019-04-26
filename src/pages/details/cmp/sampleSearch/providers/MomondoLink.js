import React from "react";
import PropTypes from "prop-types";
import ProviderLink from "./ProviderLink";
import * as urlBuilder from "./urlBuilder";

class MomondoLink extends React.Component {
  render() {
    var { sampleSearch, small } = this.props; 
    var { momondoPrice } = sampleSearch;

    return (
      <ProviderLink
        provider={"Momondo"}
        price={momondoPrice}
        url={urlBuilder.buildUrl("momondo", sampleSearch)}
        small={small}
      />
    );
  }
 
}

MomondoLink.propTypes = {
  small: PropTypes.bool,
  sampleSearch: PropTypes.object
};

export default MomondoLink;
