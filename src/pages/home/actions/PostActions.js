import * as Proxy from "../../../actions/Proxy";
import * as postActionsCreator from "../../../actions/post.actions_creator";

const updateRegionAction = region => ({ type: "REGION_UPDATE", region });

export function listPost(page, callback, reload) {
  return function(dispatch, getState) {
    var { postReducer } = getState();
    var { filters, currentPage, region } = postReducer;

    var freePostObj = postReducer.postList;
    var postList = Object.values(freePostObj);
    var request = { ...filters };

    if (!reload && currentPage >= 0 && page == 0 && postList.length != 0) {
      callback(postList, page); //If this happen, it is comming back from another page to home, then not need to look in the server
      return;
    }

    if (region >= 2) {
      // postList = postList.filter(post => post.region == region);
      request.region = region;
    }

    var start = page * 10;
    //var end = start + 10;
    var limit = 10;

    //if (!reload && postList.length >= end) {
    // callback(postList.slice(start, end));
    // } else {
    //var existentPostList = [];

    // var offset = postList.length % 10;

    // if (region != 1 && offset != 0) {
    //   //When region == 1 is Requesting All Deals, in that case reload

    //   start += offset;
    //   limit = 10 - offset;
    // }

    Proxy.post(`post/list/${start}/${limit}`, request, response => {
      var callbackList = [];

      if (response && response.postList) {
        callbackList = response.postList;
      } 
      // else {
      //   callbackList = existentPostList;
      // }

      callback(callbackList, reload);

      dispatch(postActionsCreator.addPostListAction(response || {}, page, reload));
    });
  };
  // };
}

export function updateRegion(region) {
  return function(dispatch) {
    dispatch(updateRegionAction(region));
  };
}

//-------------- Filter

export function updateFilter(name, val) {
  return function(dispatch, getState) {
    var { postReducer } = getState();
    var filters = { ...postReducer.filters };

    switch (name) {
      case "originNotIn":
      case "regionNotIn":
        filters[name] = addRemoveFromList(filters[name], val);

        if (filters[name].length == 0) {
          delete filters[name];
        }
        break;
      default:
        if (val) {
          filters[name] = val;
        } else {
          delete filters[name];
        }
    }

    dispatch(postActionsCreator.updateFiltersAction(filters));
  };
}

//----- Util functions --------
function addRemoveFromList(list = [], val) {
  var found = false;
  var newList = [];

  list.forEach(elem => {
    if (elem == val) {
      found = true;
    } else {
      newList.push(elem);
    }
  });

  if (!found) {
    newList.push(val);
  }

  return newList;
}
