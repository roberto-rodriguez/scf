import React from "react";
import PropTypes from "prop-types";
import ProviderLink from "./ProviderLink";
import * as urlBuilder from "./urlBuilder";

class SkyLink extends React.Component {
  render() {
    var { sampleSearch, small, showProviderPrice } = this.props;
    var { skyPrice } = sampleSearch;

    return (
      <ProviderLink
        provider={"Sky Scanner"}
        price={skyPrice}
        url={urlBuilder.buildUrl("sky", sampleSearch)}
        small={small}
        showProviderPrice={showProviderPrice}
      />
    );
  } 
}

SkyLink.propTypes = {
  small: PropTypes.bool,
  showProviderPrice: PropTypes.bool,
  sampleSearch: PropTypes.object
};

export default SkyLink;
