import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as dealActions from "../../../actions/DealActions";
class ProviderLink extends React.Component {
  render() {
    var { provider, price, url, small, showProviderPrice, logProviderLinkClick } = this.props;

    return (
      <a
        className="provider-link"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={logProviderLinkClick}
      >
        <div className="list-item-content-left">
          <span className={small ? "small" : ""}>
            {`${provider} `}
            {showProviderPrice && price > 0 && (
              <span className={"provider-link-price"}>
                <span className={"icon fa fa-dollar"} />
                {` ${price}`}
              </span>
            )}
            <span className="icon fa fa-external-link" />
          </span>
        </div>
      </a>
    );
  }
}

ProviderLink.propTypes = {
  small: PropTypes.bool,
  showProviderPrice: PropTypes.bool,
  provider: PropTypes.string,
  url: PropTypes.string,
  isOpenAll: PropTypes.bool,
  price: PropTypes.number,
  logProviderLinkClick: PropTypes.func
};

export default connect(
  null,
  dealActions
)(ProviderLink); 
