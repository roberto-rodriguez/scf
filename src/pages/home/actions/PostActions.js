import * as Proxy from "../../../actions/Proxy";
import * as postActionsCreator from "../../../actions/post.actions_creator";
import * as object from "../../../utils/object";
import * as postListBuilder from "../../../devData/PostListBuilder";

const updateRegionAction = region => ({ type: "REGION_UPDATE", region });

export function listPost(page, callback, reload) {
  return function(dispatch, getState) {
    console.log("postActions.listPost -> reload = " + reload);
    var { postReducer } = getState();

    var freePostObj = postReducer.postList;
    var currentPage = postReducer.currentPage;
    var region = postReducer.region;
    var postList = Object.values(freePostObj);
    var request = {};

    if (!reload && currentPage >= 0 && page == 0) {
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
        existentPostList = [...postList.slice(start)];

        start += offset;
        limit = 10 - offset;
      }

      // if (constants.PROD) {
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
      // } else {
      //   params.end = end;
      //   var listPostResult = apiListPosts(page, params);

      //   var res = postList.concat(listPostResult.postList);
      //   res = res.slice(start, end);

      //   callback(res);

      //   dispatch(postActionsCreator.addPostListAction(listPostResult));
      // }
    }
  };
}

export function updateRegion(region) {
  return function(dispatch) {
    dispatch(updateRegionAction(region));
  };
}

//-------------  TEST API ------------------------

export function apiListPosts(page = 0, params = {}) {
  var postList = buildList(page, params);
  var newList = postList.map((p, i) => {
    return {
      ...p,
      //status 0-Expired 1-Normal 2-Premium
      status: params.plan > 1 ? (i % 2) + 1 : 1,
      cityList: object.listToObject([...p.cityList])
    };
  });

  var expiredPostList = buildList(page, params);

  return { postList: newList, expiredPostList: [...expiredPostList] };
}

function buildList(page, params) {
  var list = postListBuilder.buildCityList();

  list = list.map((c, i) => ({
    ...c,
    cityList: list.filter(city => city.country == c.country),
    id: (page + 1) * 10 + i,
    postId: "idx_" + (page + 1) * 10 + i,
    foundDate: "5 hours ago"
  }));

  //do {
  var filteredList = list.filter(item => {
    // if (params.principal) {
    //   if (!(item.originCity == "Atlanta" || item.originCity == "Miami")) {
    //     return false;
    //   }
    // }

    if (params.region) {
      if (params.region != item.region) {
        return false;
      }
    }

    return true;
  });
  //  resultList = resultList.concat([...filteredList]);
  //} while (filteredList != 0 && resultList.length < 10);

  return filteredList.slice(params.start, params.end); // resultList.slice(0, 10);
}
