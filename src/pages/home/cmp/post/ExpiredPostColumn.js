import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Post from "./Post";
import { NavLink } from "react-router-dom";

class ExpiredPostColumn extends React.Component {
  render() {
    var { postList } = this.props;

    if (postList.length == 0) return null;

    return (
      <div className="row-wrapper">
        <div>
          <h5 className={"pink-text"} style={{ textAlign: "left" }}>
            Premium Deals{" "}
            <span style={{ color: "#FF8C00" }}>from 3 days ago</span>
            <NavLink exact to="/subscribe">
              <span className="see-premium-link">
                {"See today's deals for FREE"}
              </span>
            </NavLink>
          </h5>
        </div>
        <div className="row post-column text-lg-left border-pink">
          {postList.map((post, i) => (
            <Post key={i} post={post} />
          ))}
        </div>
      </div>
    );
  }
}

ExpiredPostColumn.propTypes = {
  postList: PropTypes.array
};

function mapStateToProps({ postReducer }) {
  var { expiredPostList, currentPage } = postReducer;
  var postList = Object.values(expiredPostList);
 
  postList = postList.slice(0, (currentPage + 3) * 10);

  return { postList };
}

export default connect(mapStateToProps)(ExpiredPostColumn);
