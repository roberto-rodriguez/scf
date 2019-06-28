import React from "react";
import PropTypes from "prop-types";
import ProviderLink from "./ProviderLink"; 

class KiwiLink extends React.Component {
  render() {
    var { sampleSearch, small, showProviderPrice } = this.props;
    var { kiwiPrice } = sampleSearch;

    return (
      <ProviderLink
        provider={"Kiwi.com"}
        price={kiwiPrice}
        url={sampleSearch.kiwiLink}
        small={small}
        showProviderPrice={showProviderPrice}
      />
    );
  }
}

KiwiLink.propTypes = {
  sampleSearch: PropTypes.object,
  small: PropTypes.bool,
  showProviderPrice: PropTypes.bool
};

export default KiwiLink;
