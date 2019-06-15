import React from "react";
import { connect } from "react-redux";
import * as postActions from "../../../actions/PostActions";
import PropTypes from "prop-types";

class DealsFilter extends React.Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "300px",
          color: "white",
          backgroundColor: "#e9f5f3",
          border: "2px solid #b7d1d8",
          position: "absolute",
          top: 70
        }}
      >
        <div className="container container-wide heigth100">
          <div className="row row-30 row-offset-1 text-lg-left heigth100">
            <div
              className="col-12 heigth100"
              style={{
                backgroundColor: "red",
                borderRight: "1px solid grey",
                flex:1,
                height: 100
              }}
            />
            <div
              className="col-12 heigth100"
              style={{
                backgroundColor: "blue",
                borderRight: "1px solid grey",
                flex:1,
                height: 100
              }}
            />
            <div
              className="col-12 heigth100"
              style={{
                backgroundColor: "red",
                flex:1 
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

DealsFilter.propTypes = {};

function mapStateToProps({ postReducer }) {
  return {};
}

export default connect(
  mapStateToProps,
  postActions
)(DealsFilter);
