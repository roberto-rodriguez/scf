import React from "react";
import PropTypes from "prop-types";

class ProviderLink extends React.Component {
  render() {
    var { provider, price, url, small } = this.props;

    return (
      <a
        className="provider-link"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="list-item-content-left">
          <span className={small ? "small" : ""}>
            {`${provider} `}
            {small && price && (
              <span
                className={"icon fa fa-dollar blue-text"}
                style={{ fontWeight: "bold", marginRight: 4, color: "green" }}
              >
                {price}
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
  provider: PropTypes.string,
  url: PropTypes.string,
  isOpenAll: PropTypes.bool,
  price: PropTypes.number
};

export default ProviderLink;
