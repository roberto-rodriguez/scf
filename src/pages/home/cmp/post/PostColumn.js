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
      isEmpty: false,
      filterCount: props.filterCount
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    var { region, filterCount, isEmpty } = this.state;
    return (
      region == null ||
      region != nextProps.region ||
      filterCount != nextProps.filterCount ||
      isEmpty != nextState.isEmpty
    );
  }

  componentDidMount() {
    this.setState({ mounted: true });
  }

  componentDidUpdate() {
    var { region, filterCount } = this.props;

    this.setState({ region, filterCount });
  }

  render() {
    var { isEmpty } = this.state;
    var { plan, region, filterCount } = this.props;
    var reload =
      this.state.region != region || this.state.filterCount != filterCount;

    var postCls = plan ? "post-full" : "post-column  border-green";
    var wrapperCls = isEmpty ? "" : "row text-lg-left " + postCls;

    return (
      <div className="row-wrapper width100">
        {plan <= 1 && !isEmpty && (
          <h5 className={"green-text"} style={{ textAlign: "right" }}>
            {"Free Deals"}
          </h5>
        )}
        <InfiniteList
          loader={this.doList}
          reload={reload}
          builder={(i, post) => <Post key={i} reload post={post} />}
          wrapperClass={wrapperCls}
          emptyElement={<h1> Empty Element </h1>}
        />
      </div>
    );
  }

  doList = (page, infiniteListCallback, reload) => {
    var { mounted } = this.state;
    var { listPost } = this.props;

    mounted &&
      listPost(
        page,
        (resultList, reload) => {
          var isEmpty = resultList.length == 0 && (page == 0 || reload);

          // if (this.state.region != region) {
          //   this.setState({
          //     region,
          //     isEmpty,
          //     filterCount
          //   });
          // } else {
          if (isEmpty) {
            this.setState({ isEmpty });
          }
          // }

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
  filterCount: PropTypes.number
};

function mapStateToProps({ postReducer, authReducer, viewReducer }) {
  return {
    postList: postReducer.postList,
    region: postReducer.region,
    plan: authReducer.plan,
    filterCount: viewReducer.filterCount
  };
}

export default connect(
  mapStateToProps,
  postActions
)(PostColumn);
