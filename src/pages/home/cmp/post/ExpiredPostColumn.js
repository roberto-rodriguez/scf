import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import PostExpired from "./PostExpired";

class ExpiredPostColumn extends React.Component {
  render() {
    var { postList } = this.props;

    return (
      <div className="row-wrapper">
        <div>
          <h5 className={"blue-text"} style={{ textAlign: "left" }}>
             Premium Deals from{" "}
            <span style={{ color: "#c62a82" }}>1 week ago</span>
            <span className="see-premium-link">{"See today's deals"}</span>
          </h5>
        </div>
        <div className="row post-column text-lg-left">
          {postList.map((post, i) => (
            <PostExpired key={i} post={post} />
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
  var { region, expiredPostList, postList } = postReducer;
  var postList = Object.values(expiredPostList);
  postList = postList.filter(p => region == 0 || p.region == region);
  postList = postList.slice(0, postList.length);

  return { postList };
}

export default connect(mapStateToProps)(ExpiredPostColumn);
