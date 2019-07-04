import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as viewActions from "../../../../../../actions/ViewActions";

class SearchButton extends React.Component {
  render() {
    var { doFilter } = this.props;

    return (
      <li onClick={doFilter} className="cursor-pointer">
        <span className={"active white-text region-link"}>Search</span>
      </li>
    );
  }
}

SearchButton.propTypes = {
  doFilter: PropTypes.func
};

export default connect(
  null,
  viewActions
)(SearchButton);
