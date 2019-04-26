import React from "react";
import PropTypes from "prop-types";
import ProviderLink from "./ProviderLink";

class GoogleLink extends React.Component {
  render() {
    var { sampleSearch, small } = this.props;

    var { googlePrice } = sampleSearch;

    return (
      <ProviderLink
        provider={"Google Flights"}
        price={googlePrice}
        url={this.buildUrl()}
        small={small}
      />
    );
  }

  buildUrl = () => {
    var {
      originCode,
      cityCode,
      formattedDepartureDate,
      formattedArrivalDate
    } = this.props.sampleSearch;
    originCode = this.getCode(originCode);
    cityCode = this.getCode(cityCode);

    return `https://www.google.com/flights#flt=${originCode}.${cityCode}.${formattedDepartureDate}*${cityCode}.${originCode}.${formattedArrivalDate};c:USD;e:1;sd:1;t:f`;
  };

  getCode(code) {
    if (code.indexOf("@") >= 0) {
      code = "/m/" + code.split("@")[1];
    }
    return code;
  }
}

GoogleLink.propTypes = {
  small: PropTypes.bool,
  sampleSearch: PropTypes.object
};

export default GoogleLink;
