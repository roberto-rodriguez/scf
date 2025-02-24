import * as dealActionsCreator from "../../../actions/deal.actions_creator";
import * as Proxy from "../../../actions/Proxy";

export function loadPost(postIdx, cityCode) {
  return function(dispatch) {
    Proxy.get("post/load/" + postIdx + "/" + cityCode, post => {
      dispatch(dealActionsCreator.loadPostAction(post));
    });
  };
}

export function loadCityIfNotExist(postIdx, cityCode, postListName) {
  return function(dispatch, getState) {
    var { postReducer } = getState();

    var postObj = postReducer[postListName];
    var post = postObj && postObj[postIdx];
 
    var sampleSearchCity = post && post.cityList[cityCode];

    if (!sampleSearchCity || !sampleSearchCity.loaded) {
      Proxy.get(
        "sampleSearchCity/load/" + postIdx + "/" + cityCode,
        newSampleSearchCity => {
          dispatch(
            dealActionsCreator.loadCityAction(postIdx, newSampleSearchCity, postListName)
          );
        }
      );
    }
  };
}

export function setSelectedPostId(postId) {
  return function(dispatch) {
    dispatch(dealActionsCreator.setSelectedPostId(postId));
  };
}

export function logProviderLinkClick() {
  return function() {
    Proxy.get("log/partnerLinkClick");
  };
}
