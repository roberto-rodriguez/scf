import * as dealActionsCreator from "../../../actions/deal.actions_creator";
import * as object from "../../../utils/object";
import * as dates from "../../../utils/dates";
import * as Proxy from "../../../actions/Proxy";
import * as postListBuilder from "../../../devData/PostListBuilder";

export function loadPost(postIdx) {
  return function(dispatch, getState) {
    //TODO make an API that return the post with the selected city
    Proxy.get("post/loadPost/" + postIdx, post => {
      dispatch(dealActionsCreator.loadPostAction(post));
    });
  };
}
// export function loadPost(postId, sampleSearchCityId, callback) {
//   return function(dispatch, getState) {
//     //TODO make an API that return the post with the selected city
//     var allPost = postActions.apiListPosts();
//     var postObj = object.listToObject(allPost.postList);

//     var post = postObj[postId];

//     setTimeout(function() {
//       dispatch(dealActionsCreator.loadPostAction(post));

//       setTimeout(function() {
//         loadCityIfNotExist(postId, sampleSearchCityId)(dispatch, getState);
//       }, 1000);
//     }, 1000);
//   };
// }

export function loadCityIfNotExist(postId, sampleSearchCityId) {
  return function(dispatch, getState) {
    var { postReducer } = getState();

    var postObj = postReducer.postList;
    var post = postObj && postObj[postId];
    var sampleSearchCity = post && post.cityList[sampleSearchCityId];

    if (!sampleSearchCity || !sampleSearchCity.loaded) {
      var temp = apiLoadSampleSearchCity(sampleSearchCityId);

      var newSampleSearchCity = { ...temp };
      if (newSampleSearchCity.sampleSearchList) {
        newSampleSearchCity.sampleSearchList.map(sampleSearch => {
          sampleSearch["formattedDepartureDate"] = dates.formatWithTimezone(
            sampleSearch.departureDate
          );
          sampleSearch["formattedArrivalDate"] = dates.formatWithTimezone(
            sampleSearch.arrivalDate
          );
        });
      }

      dispatch(dealActionsCreator.loadCityAction(postId, newSampleSearchCity));
    }

    // setTimeout(function() {
    //   loadNearbyCitiesIfNotExist(postId)(dispatch, getState);
    // }, 300);
  };
}

//-------------  TEST API ------------------------

function apiLoadSampleSearchCity(id) {
  var cityObj = object.listToObject(postListBuilder.buildCityList());

  var city = cityObj[id];

  var sampleSearchList = [];

  sampleSearchList.push({
    id: 1,
    originCode: "TPA",
    cityCode: "BCN",
    price: city.price,
    departureDate: 1573621200000,
    arrivalDate: 1574830800000,
    nights: 7,
    provider: "momondo",
    skyPrice: 123,
    googlePrice: 345,
    momondoPrice: 234,
    kiwiPrice: 333,
    kiwiLink:
      "https://www.kiwi.com/en/search/wichita-kansas-united-states/new-york-city-new-york-united-states"
  });

  for (var i = 0; i < 4; i++) {
    sampleSearchList.push({
      id: i + 2,
      originCode: "TPA",
      cityCode: "BCN",
      price: city.price + i,
      departureDate: 1573621200000,
      arrivalDate: 1574830800000,
      nights: 30 - i - (10 + i),
      googlePrice: 345,
      kiwiPrice: 333,
      kiwiLink:
        "https://www.kiwi.com/en/search/wichita-kansas-united-states/new-york-city-new-york-united-states"
    });
  }

  city["sampleSearchList"] = sampleSearchList;

  return city;
}
