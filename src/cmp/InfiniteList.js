import React, { Component } from "react";
var enableDebug = false;
import PropTypes from "prop-types";

class InfiniteList extends Component {
  constructor(props) {
    super(props);
    enableDebug && console.log("InfiniteList: constructor");
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

    console.log(
      "InfiniteList:componentWillReceiveProps newProps.reload -> " +
        newProps.reload
    );
    if (newProps.reload) {
      // this.setState({ starting: true });

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
        _this.moreFeed();
        window.addEventListener("scroll", this.handleScroll);
      }
    );
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = event => {
    var { loading, reachEnd } = this.state;

    if ((loading, reachEnd)) return;

    var scroll = window.scrollY;

    if (document.body.scrollHeight - this.HEIGHT - scroll < this.HEIGHT * 2) {
      console.log(
        " InfiniteList: ---------- TRIGGER SCROLL ----------- page: " +
          this.state.page +
          "  this.moreFeed()"
      );

      this.moreFeed(false);
    }
  };

  moreFeed = reset => {
    console.log(
      "InfiniteList::moreFeed -> reset = " +
        reset +
        " ,this.state.loading = " +
        this.state.loading
    );
    var _this = this;

    this.state.loading = true;
    var page = reset ? 0 : this.state.page;

    this.props.loader(page, items => {
      if (_this.isObject(items)) {
        items = Object.values(items);
      }

      // if (page === -1 && items.length === 0) {
      //   _this.moreFeed(true);
      // } else {
      console.log("InfiniteList::moreFeed -> callvack set loading = false");

      _this.setState(prevState => {
        var newFeedList = reset ? items : prevState.feed.concat(items);

        console.log("InfiniteList:: reset = " + reset + ", items = " + items);

        return {
          ...prevState,
          loading: false,
          feed: newFeedList,
          firstLoad: false,
          page: reset ? 1 : prevState.page + 1,
          showLoadIndicator: items.length === 10,
          reachEnd: items.length === 0
        };
      });

      // if (page === -1) {
      //   _this.moreFeed();
      // }
      // }
    });
  };

  render() {
    var { builder, wrapperClass } = this.props; //, emptyElement
    var { feed, loading, reachEnd } = this.state; //showLoadIndicator,

    var size = feed.length;

    console.log("InfiniteList: render() size = " + size);

    if (loading) {
      return <h1>Loading...</h1>;
    }

    return (
      <div className={wrapperClass}>
        {feed.map((data, i) => builder(i + 1, data))}
        {reachEnd ? (
          <div />
        ) : (
          <h6 key={1000}>TODO Put some nice spinner here</h6>
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
