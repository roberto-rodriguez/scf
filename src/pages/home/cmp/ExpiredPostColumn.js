import React from "react";  
import PropTypes from "prop-types";
import { connect } from "react-redux";
import PostExpired from './post/PostExpired'
 
class ExpiredPostColumn extends React.Component {
 
  render() {
    var { postList } = this.props;

    return (
      <div className="row-wrapper">
        <div>
          <h5 className={'blue-text'} style={{ textAlign: "left"}}>
            Sample Premium Deals from 1 week ago
            <span className="see-premium-link">{"Try premium FREE"}</span>
          </h5>
        </div>
        <div className="row post-column text-lg-left">
          {postList.map((post, i) => (<PostExpired key={i} post={post} />))}
        </div> 
      </div>
    );
  } 
}

ExpiredPostColumn.propTypes = {
  postList: PropTypes.array
};

function mapStateToProps({ postReducer }) {
  return {
    postList: Object.values(postReducer.expiredPostList)
  };
}

export default connect(mapStateToProps)(ExpiredPostColumn);
