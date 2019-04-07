import React from "react";
import Post from "./post/Post";
import PostPremium from "./post/PostPremium";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import InfiniteList from "../../../cmp/InfiniteList";
import * as postActions from "../actions/PostActions";
class PostColumn extends React.Component {
  constructor(props) {
    super(props);
  }
  //listFreePost

  render() {
    var { header, float, listPremiumPost, listFreePost } = this.props;

    // postList = postList || [];
    // var list = [];

    // for (var i = 0; i < postList.length; i++) {
    //   list.push(this.createPost(i, postList[i]));
    // }

    // if(postList.length == 0){
    //   return null;
    // }

    var loader = float == "left" ? listPremiumPost : listFreePost;

    return (
      <div className="row-wrapper">
        {" "}
        {header}{" "}
        <InfiniteList
          loader={loader}
          builder={(i, post, reload) => this.createPost(i, post, reload)}
          wrapperClass={"row post-column text-lg-left"}
          emptyElement={<h1> Empty Element </h1>}
        />
      </div>
    );
  }

  // return (
  //   <div className="row-wrapper">
  //     {header}
  //     <div className="row post-column text-lg-left">
  //       {list}
  //     </div>
  //   </div>
  // );

  createPost(i, post) {
    if (this.props.float == "left") {
      return <PostPremium key={i} index={i} reload post={post} />;
    } else {
      return <Post key={i} index={i} reload post={post} />;
    }
  }

  listPost(page, callback) {
    callback([
      {
        city: "Venice",
        country: "Italy"
      },
      {
        city: "London",
        country: "United Kingdom"
      },
      {
        city: "Tokyo",
        country: "Japan"
      },
      {
        city: "New York",
        country: "United States"
      },
      {
        city: "Frankfurt",
        country: "Germany"
      },
      {
        city: "San Francisco",
        country: "United States"
      },
      {
        city: "Phuket",
        country: "Thailand"
      },
      {
        city: "Viena",
        country: "Austria"
      },
      {
        city: "Honolulu",
        country: "Hawaii"
      },
      {
        city: "Sydney",
        country: "Australia"
      }
    ]);
  }
}

PostColumn.propTypes = {
  float: PropTypes.string,
  header: PropTypes.element,
  listPremiumPost: PropTypes.func,
  listFreePost: PropTypes.func
};

function mapStateToProps({ dealsReducer }, props) {
  return {
    postList:
      props.float == "left"
        ? dealsReducer.expiredPostList
        : dealsReducer.freePostList
  };
}

export default connect(
  mapStateToProps,
  postActions
)(PostColumn);
