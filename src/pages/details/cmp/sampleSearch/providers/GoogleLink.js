import React from "react";
import PropTypes from "prop-types";
import ProviderLink from "./ProviderLink";
import * as urlBuilder from "./urlBuilder";

class GoogleLink extends React.Component {
  render() {
    var { sampleSearch, small } = this.props; 
    var { googlePrice } = sampleSearch;

    return (
      <ProviderLink
        provider={"Google Flights"}
        price={googlePrice}
        url={urlBuilder.buildUrl('google', sampleSearch)}
        small={small}
      />
    );
  } 
}

GoogleLink.propTypes = {
  small: PropTypes.bool,
  sampleSearch: PropTypes.object
};

export default GoogleLink;