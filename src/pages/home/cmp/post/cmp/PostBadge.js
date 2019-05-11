import React from "react";
import PropTypes from "prop-types";

class PostBadge extends React.Component {
  render() {
    var status = this.props.status || 0;
    var { premium } = this.props;

    if (!premium) {
      return null;
    }

    return (
      <div className="premium-badge">
        <span className="white-text">PREMIUM</span>
        {!status && (
          <span
            className="expired-badge white-text"
            style={{ position: "absolute", top: 35, left: 6 }}
          >
            EXPIRED
          </span>
        )}
      </div>
    );
  }
}

PostBadge.propTypes = {
  status: PropTypes.number,
  premium: PropTypes.bool
};

export default PostBadge;
