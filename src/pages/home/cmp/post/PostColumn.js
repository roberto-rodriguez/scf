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
      mounted: false,
      isEmpty: false
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
    var { isEmpty } = this.state;
    var { plan, region, appStarted } = this.props;
    var reload = this.state.region != region;
 
    var postCls = plan ? "post-full" : "post-column  border-green";
    var wrapperCls = isEmpty ? '' : "row text-lg-left " + postCls;

    return (
      <div className="row-wrapper">
        {plan <= 1 && !isEmpty && (
          <h5 className={"green-text"} style={{ textAlign: "right" }}>
            {"Free Deals"}
          </h5>
        )}

        {appStarted && (
          <InfiniteList
            loader={this.doList}
            reload={reload}
            builder={(i, post) => <Post key={i} reload post={post} />}
            wrapperClass={wrapperCls}
            emptyElement={<h1> Empty Element </h1>}
          />
        )}
      </div>
    );
  }

  doList = (page, infiniteListCallback, reload) => {
    var { mounted } = this.state;
    var { region, listPost } = this.props;

    mounted &&
      listPost(
        page,
        resultList => {
          var isEmpty = page == 0 && resultList.length == 0;

          if (this.state.region != region) {
            this.setState({
              region,
              isEmpty
            });
          } else {
            if (isEmpty) {
              this.setState({ isEmpty });
            }
          }

          infiniteListCallback(resultList);
        },
        reload
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
