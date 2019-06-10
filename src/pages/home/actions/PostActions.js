import * as Proxy from "../../../actions/Proxy";
import * as postActionsCreator from "../../../actions/post.actions_creator"; 

const updateRegionAction = region => ({ type: "REGION_UPDATE", region });

export function listPost(page, callback, reload) {
  return function(dispatch, getState) {
 
    var { postReducer } = getState();

    var freePostObj = postReducer.postList;
    var currentPage = postReducer.currentPage;
    var region = postReducer.region;
    var postList = Object.values(freePostObj);
    var request = {};

    if (!reload && currentPage >= 0 && page == 0 && postList.length != 0) {  
      callback(postList, page); //If this happen, it is comming back from another page to home, then not need to look in the server
      return;
    }

    if (reload && region >= 2) {
      postList = postList.filter(post => post.region == region);
      request.region = region;
    }

    var start = page * 10;
    var end = start + 10;
    var limit = 10;

    if (postList.length >= end) {
      callback(postList.slice(start, end));
    } else {
      var existentPostList = [];

      var offset = postList.length % 10;

      if (region != 1 && offset != 0) { //When region == 1 is Requesting All Deals, in that case reload 
       
        start += offset;
        limit = 10 - offset;
      }
 
      Proxy.post(`post/list/${start}/${limit}`, request, response => {
        var callbackList = [];

        if (response && response.postList) {
          callbackList = existentPostList.concat(response.postList);
        } else {
          callbackList = existentPostList;
        }

        callback(callbackList);

        dispatch(postActionsCreator.addPostListAction(response, page));
      }); 
    }
  };
}

export function updateRegion(region) {
  return function(dispatch) {
    dispatch(updateRegionAction(region));
  };
}
 