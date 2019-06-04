import React, { Component } from "react";
var enableDebug = false;
import PropTypes from "prop-types";

class InfiniteList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      reload: true,
      loading: false,
      firstLoad: true,
      feed: [],
      showLoadIndicator: true,
      reachEnd: false,
      _mounted: false
    };
  }

  componentWillReceiveProps(newProps) {
    if (!this.state._mounted) return;

    if (newProps.reload) {
      console.log(
        "InfiniteList:componentWillReceiveProps calling -> this.moreFeed(true); "
      );
      this.moreFeed(true);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    var { _mounted, firstLoad, loading, page } = this.state;

    var shouldComponentUpdate =
      _mounted &&
      (firstLoad || loading || page <= 0 || (nextProps.reload || false));
 
    return shouldComponentUpdate;
  }

  componentDidMount(props) {
    this.HEIGHT = window.innerHeight;

    var _this = this;

    this.setState(
      {
        _mounted: true
      },
      () => {
        console.log(
          "InfiniteList::componentDidMount -> calling _this.moreFeed(); "
        );
        _this.moreFeed();
        window.addEventListener("scroll", this.handleScroll);
      }
    );
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);

    console.log(
      "InfiniteList:: componentWillUnmount -> window.scrollY = " +
        window.scrollY
    );
  }

  handleScroll = event => {
    var { loading, reachEnd } = this.state;

    if ((loading, reachEnd)) return;

    var scroll = window.scrollY;

    if (
      !this.state.loading &&
      document.body.scrollHeight - this.HEIGHT - scroll < this.HEIGHT * 2
    ) {
      console.log(
        "handleScroll: ---------- TRIGGER SCROLL ----------- this.moreFeed(false) -> page = " +
          this.state.page
      );

      this.moreFeed(false);
    }
  };

  moreFeed = reset => {
    var _this = this;

    this.state.loading = true;
    var page = reset ? 0 : this.state.page;

    console.log(
      "((((((((((  MORE FEED     reset = " +
        reset +
        ", page = " +
        page + 
        "     )))))))))) "
    );

    this.props.loader(
      page,
      (items, currentPage) => {
        if (_this.isObject(items)) {
          items = Object.values(items);
        }

        _this.setState(prevState => {
          var newFeedList = reset ? items : prevState.feed.concat(items);

          console.log("InfiniteList:: reset = " + reset + ", items = " + items);

          return {
            ...prevState,
            loading: false,
            feed: newFeedList,
            firstLoad: false,
            page: currentPage || (reset ? 1 : prevState.page + 1),
            showLoadIndicator: items.length === 10,
            reachEnd: items.length === 0
          };
        });
      },
      reset
    );
  };

  render() {
    var { builder, wrapperClass } = this.props; //, emptyElement
    var { feed, loading, reachEnd } = this.state; //showLoadIndicator,

    var size = feed.length;

    console.log("InfiniteList: render() size = " + size);

    if (loading) {
      return (<h5>Loading...</h5>);
    }

    if(size == 0){
      return (<h5>There are not elements to show</h5>);
    }

    return (
      <div className={wrapperClass}>
        {feed.map((data, i) => builder(i + 1, data))}
        {reachEnd ? (
          <div />
        ) : (
          <div />
        )}
      </div>
    );
  }

  isObject = function(a) {
    return !!a && a.constructor === Object;
  };
}

InfiniteList.propTypes = {
  loader: PropTypes.func,
  builder: PropTypes.func,
  wrapperClass: PropTypes.string,
  emptyElement: PropTypes.element,
  reload: PropTypes.bool
};

export default InfiniteList;
