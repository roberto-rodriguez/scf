import React from "react";
import Post from "./Post";
import PostPremium from "./PostPremium";
import PropTypes from "prop-types";

class PostColumn extends React.Component {
  render() {
    var { float, header } = this.props;

    return (
      <div className="row-wrapper">
        {header}
        <div className="row text-lg-left">
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    );
  }

  // createPost(){
  //   if(this.props.float == 'left'){
  //     return <PostPremium/>
  //   }else{
  //     return <Post/>;
  //   }
  // }
}

PostColumn.propTypes = {
  float: PropTypes.string
};

export default PostColumn;
