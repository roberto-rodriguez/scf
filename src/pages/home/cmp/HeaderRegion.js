import React from "react";
import { connect } from "react-redux";
import * as postActions from "../actions/PostActions";
import PropTypes from "prop-types";

class HeaderRegion extends React.Component {
  render() {
    var { id, text, region } = this.props;

    return (
      <li onClick={this.doClick}>
        <span className={id == region ? "active white-text region-link" : "region-link"}>{text}</span>
      </li>
    );
  }

  doClick = (e) => {
      e.preventDefault();
    var { id, updateRegion } = this.props;
    updateRegion(id); 
  };
}

HeaderRegion.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  region: PropTypes.number,
  updateRegion: PropTypes.func,
  onUpdateRegion: PropTypes.func
};

function mapStateToProps({ postReducer }) {
  return {
    region: postReducer.region
  };
}

export default connect(
  mapStateToProps,
  postActions
)(HeaderRegion);
