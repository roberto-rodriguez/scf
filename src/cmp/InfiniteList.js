
import React, {Component} from 'react';    
var debbugFeed = true;
import PropTypes from "prop-types";

 class InfiniteList extends Component {

  constructor(props){
    super(props)
    debbugFeed && console.log('InfiniteList: constructor');
    this.state = {
      page: 0,
      starting: true,
      loading:false,
      firstLoad: true,
      feed:[], 
      showLoadIndicator: true
    } 
  }

  componentWillReceiveProps(newProps){
    if(!this._mounted)return
  
    if(!this.state.starting && newProps.starting){
      this.setState({starting: true})
      this.moreFeed(true)
    }
  }


  shouldComponentUpdate(nextProps, nextState){ 
    // if(nextProps.reset){
    //   this.moreFeed(true);
    // }
    debbugFeed && console.log('InfiniteList:: shouldComponentUpdate:: firstLoad ' + this.state.firstLoad + ', loading:: ' + this.state.loading + ', reset: ' + nextProps.reset + ' (' + (nextProps.reset ||  this.state.firstLoad || this.state.loading) + ')');
    return this._mounted && ( this.state.firstLoad || this.state.loading || (this.state.page <= 0) || (nextProps.starting || false));
  }


  componentDidMount(props){  
    this.HEIGHT = window.innerHeight;
    debbugFeed && console.log('InfiniteList: componentDidMount HEIGHT = ' +   this.HEIGHT);
    setTimeout(this.moreFeed, 100)
    this._mounted = true;

    window.addEventListener("scroll", () => this.handleScroll());
  }
 
  componentWillUnmount() {
    this._mounted = false;
    window.removeEventListener("scroll", () => this.handleScroll());
  }
 

  handleScroll = (event) => {
    //  console.log('handleScroll:: loading = ' + this.state.loading);
    if(this.state.loading)return;

     var scroll =  window.scrollY

      // console.log('handleScroll:: scroll = ' + scroll);
      // console.log('document.body.scrollHeight = ' + document.body.scrollHeight);
      // console.log('this.HEIGHT = ' + this.HEIGHT);
      // console.log('left = ' + document.body.scrollHeight  - this.HEIGHT - scroll);
      // console.log('right = ' + this.HEIGHT * 6);

     if(document.body.scrollHeight  - this.HEIGHT - scroll < this.HEIGHT * 2){
       console.log('InfiniteList: ---------- TRIGGER SCROLL --------');

       this.moreFeed();
     }

}
 
  moreFeed = (reset) => {
    debbugFeed && console.log('InfiniteList: moreFeed:: this.state.page = ' + this.state.page);
    var _this = this;

    this.state.loading = true;
    var page = reset ? 0 : this.state.page

    this.props.loader(page, (items) => {

      if(page === -1 && items.length === 0){
        _this.moreFeed( true )
      }else{
          _this.setState((prevState) => {
            return ({
            ...prevState,
            loading:false,
            starting: false,
            feed: reset ? items : prevState.feed.concat(items),
            firstLoad: false,
            page: reset ? 1 :  prevState.page + 1,
            showLoadIndicator: items.length === 10
          })
        }
        )

        if(page === -1){
          _this.moreFeed()
        }
      }
    })


  }
 

  render() {
    debbugFeed && console.log('InfiniteList:  ---render---  this.state.page = ' + this.state.page);
    var { builder, wrapperClass} = this.props     //, emptyElement
    var {feed, starting} = this.state    //showLoadIndicator, 

    var size = feed.length

    if(starting){
      return (<h1>Loading</h1>)
    }

    return (
      <div  className={wrapperClass}>
        {feed.map((data, i) => builder(i + 1, data) )} 
        <h3 key={1000}>Infinite Loading...</h3>
      </div >
    )

  }
}

InfiniteList.propTypes = {
  loader: PropTypes.func,
  builder: PropTypes.func,
  wrapperClass: PropTypes.string,
  emptyElement: PropTypes.element
};
 
export default InfiniteList;
