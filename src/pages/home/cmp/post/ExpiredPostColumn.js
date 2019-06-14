import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Post from "./Post";

class ExpiredPostColumn extends React.Component {
  render() {
    var { postList } = this.props;

    if(postList.length == 0)return null;

    return (
      <div className="row-wrapper">
        <div>
          <h5 className={"blue-text"} style={{ textAlign: "left" }}>
            Premium Deals from{" "}
            <span style={{ color: "#FF8C00" }}>3 days ago</span>
            <span className="see-premium-link">
              {"See today's deals for FREE"}
            </span>
          </h5>
        </div>
        <div className="row post-column text-lg-left">
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
  var { region, expiredPostList, currentPage } = postReducer;
  var postList = Object.values(expiredPostList);
  postList = postList.filter(p => region <= 1 || p.region == region);
  postList = postList.slice(0, (currentPage + 3) * 10);

  return { postList };
}

export default connect(mapStateToProps)(ExpiredPostColumn);
