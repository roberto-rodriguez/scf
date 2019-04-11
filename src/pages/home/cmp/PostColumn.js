import React from "react";
import Post from "./post/Post";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import InfiniteList from "../../../cmp/InfiniteList";
import * as postActions from "../actions/PostActions";
class PostColumn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      region: null
    };
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    var { region } = this.state;
    return region == null || region != nextProps.region;
  }

  render() {
    var reload = this.state.region != this.props.region;

    return (
      <div className="row-wrapper">
        <h5 className={"blue-text"} style={{ textAlign: "right" }}>
          {"Free Deals"}
        </h5>
        <InfiniteList
          loader={this.doList}
          reload={reload}
          builder={(i, post) => <Post key={i} reload post={post} />}
          wrapperClass={"row post-column text-lg-left"}
          emptyElement={<h1> Empty Element </h1>}
        />
      </div>
    );
  }

  doList = (page, infiniteListCallback) => {
    var { region, listPost } = this.props; 
    listPost(
      page,
      resultList => {
        this.setState({ region });
        infiniteListCallback(resultList);
      },
      { region }
    );
  };
}

PostColumn.propTypes = {
  region: PropTypes.number,
  listPost: PropTypes.func
};

function mapStateToProps({ postReducer }) {
  return {
    postList: postReducer.freePostList,
    region: postReducer.region
  };
}

export default connect(
  mapStateToProps,
  postActions
)(PostColumn);
