import React from "react";
import PropTypes from "prop-types";
import ProviderLink from "./ProviderLink";
import * as urlBuilder from "./urlBuilder";

class KayakLink extends React.Component {
  render() {
    var { sampleSearch, small } = this.props;
    var { kayakPrice } = sampleSearch;

    return (
      <ProviderLink
        provider={"Kayak"}
        price={kayakPrice}
        url={urlBuilder.buildUrl("kayak", sampleSearch)}
        small={small}
      />
    );
  }
}

KayakLink.propTypes = {
  small: PropTypes.bool,
  sampleSearch: PropTypes.object
};

export default KayakLink;
