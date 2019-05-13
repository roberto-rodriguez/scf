import React from "react";
import PropTypes from "prop-types";
import ProviderLink from "./ProviderLink";
import * as urlBuilder from "./urlBuilder";

class GoogleLink extends React.Component {
  render() {
    var { sampleSearch, small, showProviderPrice } = this.props; 
    var { googlePrice } = sampleSearch;

    return (
      <ProviderLink
        provider={"Google Flights"}
        price={googlePrice}
        url={urlBuilder.buildUrl('google', sampleSearch)}
        small={small}
        showProviderPrice={showProviderPrice}
      />
    );
  } 
}

GoogleLink.propTypes = {
  small: PropTypes.bool,
  showProviderPrice: PropTypes.bool,
  sampleSearch: PropTypes.object
};

export default GoogleLink;
