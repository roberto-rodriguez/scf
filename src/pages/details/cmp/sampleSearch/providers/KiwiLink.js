import React from "react";
import PropTypes from "prop-types";
import ProviderLink from "./ProviderLink";
import * as urlBuilder from "./urlBuilder";

class KiwiLink extends React.Component {
  render() {
    var { sampleSearch, small } = this.props;
    var { kiwiPrice } = sampleSearch;

    return (
      <ProviderLink
        provider={"Kiwi.com"}
        price={kiwiPrice}
        url={sampleSearch.kiwiLink}
        small={small}
      />
    );
  }
}

KiwiLink.propTypes = {
  sampleSearch: PropTypes.object,
  small: PropTypes.bool
};

export default KiwiLink;
