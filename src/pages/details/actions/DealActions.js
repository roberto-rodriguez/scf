import * as object from "../../../utils/object";
import * as postAction from "../../home/actions/PostActions";

const loadCityAction = (postId, sampleSearchCity) => ({
  type: "LOAD_SAMPLE_SEARCH_CITY",
  data: { postId, sampleSearchCity }
});

const loadPostAction = post => ({
  type: "LOAD_POST",
  data: { post }
});

export function loadPost(postId, sampleSearchCityId) {
  return function(dispatch, getState) {
    //TODO make an API that return the post with the selected city
    var allPost = postAction.apiListPosts();
    var postObj = object.listToObject(allPost.freePostList);

    var post = postObj[postId];
    dispatch(loadPostAction(post));

    loadCityIfNotExist(postId, sampleSearchCityId)(dispatch, getState);
  };
}

export function loadCityIfNotExist(postId, sampleSearchCityId) {
  return function(dispatch, getState) {
    var { postReducer } = getState();

    var freePostObj = postReducer.freePostList;
    var post = freePostObj && freePostObj[postId];
    var sampleSearchCity = post && post.cityList[sampleSearchCityId];

    if (!sampleSearchCity || !sampleSearchCity.loaded) {
      sampleSearchCity = apiLoadSampleSearchCity(sampleSearchCityId);
      dispatch(loadCityAction(postId, sampleSearchCity));
    }
  };
}

//-------------  TEST API ------------------------

function apiLoadSampleSearchCity(id) {
  var cityList = [
    {
      name: "Rome",
      price: 234,
      id: "rome",
      cityCode: "ROM",
      departureDate: "Jun 3",
      arrivalDate: "Jun 12"
    },
    {
      name: "Venice",
      price: 333,
      id: "venice",
      cityCode: "VEN",
      departureDate: "Jun 3",
      arrivalDate: "Jun 12"
    },
    {
      name: "Florence",
      price: 340,
      id: "berlin",
      cityCode: "FLO",
      departureDate: "Jun 3",
      arrivalDate: "Jun 12"
    },
    {
      name: "Milan",
      price: 447,
      id: "milan",
      cityCode: "MIL",
      departureDate: "Jun 3",
      arrivalDate: "Jun 12"
    },
    {
      name: "Pisa",
      price: 1233,
      id: "pisa",
      cityCode: "PIS",
      departureDate: "Jun 2019",
      arrivalDate: "Jul 2019"
    }
  ];

  var cityObj = object.listToObject(cityList);

  var city = cityObj[id];
  city.origin = "San Francisco";
  city.avg = 500;
  city.country = "Italy";

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
