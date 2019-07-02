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
          <span className={small ? "small" : "font-18 back-text"}>
            {`${provider} `}
            {showProviderPrice && price > 0 && (
              <span className={"provider-link-price font-18"}>
                <span className={"icon fa fa-dollar font-18"} />
                {` ${price}`}
              </span>
            )}
            <span className="icon fa fa-external-link hide-for-mobile" />
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
