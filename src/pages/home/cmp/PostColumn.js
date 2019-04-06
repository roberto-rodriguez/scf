import React from "react";
import Post from "./post/Post";
import PostPremium from "./post/PostPremium";
import PropTypes from "prop-types";

class PostColumn extends React.Component {
  render() {
    var { header } = this.props;

    var list = [];

    for (var i = 0; i < 12; i++) {
      list.push(this.createPost(i));
    }

    return (
      <div className="row-wrapper" >
        {header}
        <div className="row text-lg-left">{list}</div>
      </div>
    );
  }

  createPost(i) {
    if (this.props.float == "left") {
      return <PostPremium key={i}/>;
    } else {
      return <Post  key={i}/>;
    }
  }
}

PostColumn.propTypes = {
  float: PropTypes.string,
  header: PropTypes.element
};

export default PostColumn;
