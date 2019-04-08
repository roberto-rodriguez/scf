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
      reachEnd: false
    };
  }

  componentWillReceiveProps(newProps) {
    if (!this._mounted) return;

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
    // if(nextProps.reset){
    //   this.moreFeed(true);
    // }
    var shouldComponentUpdate =
      this._mounted &&
      (this.state.firstLoad ||
        this.state.loading ||
        this.state.page <= 0 ||
        (nextProps.reload || false));

    console.log(
      "InfiniteList:shouldComponentUpdate -> " +
        shouldComponentUpdate +
        " ,this.state.loading = " +
        this.state.loading
    );
    return shouldComponentUpdate;
  }

  componentDidMount(props) {
    this.HEIGHT = window.innerHeight;
    console.log("InfiniteList:componentDidMount -> this.moreFeed");
    setTimeout(this.moreFeed, 100);
    this._mounted = true;

    window.addEventListener("scroll", () => this.handleScroll());
  }

  componentWillUnmount() {
    this._mounted = false;
    window.removeEventListener("scroll", () => this.handleScroll());
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
      // if (_this.isObject(items)) {
      //   items = Object.values(items);
      // }

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
        {reachEnd ? (<h1>Reach End</h1>) : (<h3 key={1000}>Infinite Loading...</h3>)}
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
