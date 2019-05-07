import React from "react";
import PropTypes from "prop-types";

class PostBadge extends React.Component {
  render() {
    var status = this.props.status || 0;
    var cmp = null;

    switch (status) {
      case 0:
        cmp = (
          <div className="premium-badge">
            <span className="white-text">PREMIUM</span>
            
            <span className="expired-badge white-text" style={{position:'absolute', top: 35, left: 6}}>EXPIRED</span>
          </div>
        );

        break;
      case 2:
        cmp = (
          <div className="premium-badge">
            <span className="white-text">PREMIUM</span>
          </div>
        );
        break;
    }

    return cmp;
  }
}

PostBadge.propTypes = {
  status: PropTypes.number
};

export default PostBadge;
