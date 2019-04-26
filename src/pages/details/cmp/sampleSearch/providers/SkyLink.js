import React from "react";
import PropTypes from "prop-types";
import ProviderLink from "./ProviderLink";
import * as urlBuilder from "./urlBuilder";

class SkyLink extends React.Component {
  render() {
    var { sampleSearch, small } = this.props;
    var { skyPrice } = sampleSearch;

    return (
      <ProviderLink
        provider={"Sky Scanner"}
        price={skyPrice}
        url={urlBuilder.buildUrl("sky", sampleSearch)}
        small={small}
      />
    );
  } 
}

SkyLink.propTypes = {
  small: PropTypes.bool,
  sampleSearch: PropTypes.object
};

export default SkyLink;
