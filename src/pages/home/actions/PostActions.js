import * as Proxy from "../../../actions/Proxy";
import * as postActionsCreator from "../../../actions/post.actions_creator";
import * as object from "../../../utils/object";
import * as constants from "../../../constants/Constants";
import * as postListBuilder from "../../../devData/PostListBuilder";

const updateRegionAction = region => ({ type: "REGION_UPDATE", region });

export function listPost(page, callback, params) {
  return function(dispatch, getState) {
    var { postReducer, authReducer } = getState();

    var freePostObj = postReducer.postList;
    var postList = Object.values(freePostObj);

    if (params.region) {
      //TODO externalize the filter to a function to be used by the API dev too
      postList = postList.filter(post => post.region == params.region);
    }

    var start = page * 10;
    var end = start + 10;

    if (postList.length >= end) {
      callback(postList.slice(start, end));
    } else {
      params.principal = authReducer.id;
      params.plan = authReducer.plan;

      var existentPostList = [];

      if (postList.length % 10 != 0) {
        existentPostList = [...postList.slice(start)];

        start += postList.length % 10;
      }

      params.start = start;

      if (constants.PROD) { 
        Proxy.get(`post/list/${start}/${10}`, response => {
          var listPostResult = response.List || [];

          var res = existentPostList.concat(listPostResult);

          callback(res);

          dispatch(postActionsCreator.addPostListAction(listPostResult));
        });
      } else {
        params.end = end;
        var listPostResult = apiListPosts(page, params);

        var res = postList.concat(listPostResult.postList);
        res = res.slice(start, end);

        callback(res);

        dispatch(postActionsCreator.addPostListAction(listPostResult));
      }
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
