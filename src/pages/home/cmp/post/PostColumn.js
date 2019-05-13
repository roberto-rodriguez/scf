import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import InfiniteList from "../../../../cmp/InfiniteList";
import * as postActions from "../../actions/PostActions";
class PostColumn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      region: null,
      mounted: false
    };
  }

  shouldComponentUpdate(nextProps) {
    var { region } = this.state;
    return region == null || region != nextProps.region;
  }

  componentDidMount() {
    this.setState({ mounted: true });
  }

  render() {
    var { plan, region, appStarted } = this.props;
    var reload = this.state.region != region;

    var postCls = plan ? "post-full" : "post-column";
 
    return (
      <div className="row-wrapper">
        {plan <= 1 && (
          <h5 className={"blue-text"} style={{ textAlign: "right" }}>
            {"Free Deals"}
          </h5>
        )}

        {appStarted && (
          <InfiniteList
            loader={this.doList}
            reload={reload}
            builder={(i, post) => <Post key={i} reload post={post} />}
            wrapperClass={"row text-lg-left " + postCls}
            emptyElement={<h1> Empty Element </h1>}
          />
        )}
      </div>
    );
  }

  doList = (page, infiniteListCallback) => {
    var { mounted } = this.state;
    var { region, listPost } = this.props;

    mounted &&
      listPost(
        page,
        resultList => {
          if (this.state.region != region) {
            this.setState({ region });
          }

          infiniteListCallback(resultList);
        },
        { region }
      );
  };
}

PostColumn.propTypes = {
  region: PropTypes.number,
  plan: PropTypes.number,
  listPost: PropTypes.func,
  appStarted: PropTypes.bool
};

function mapStateToProps({ postReducer, authReducer }) {
  return {
    postList: postReducer.postList,
    region: postReducer.region,
    plan: authReducer.plan,
    appStarted: authReducer.appStarted
  };
}

export default connect(
  mapStateToProps,
  postActions
)(PostColumn);
