import * as object from "../../../utils/object";
import * as postAction from '../../home/actions/PostActions'

const loadCityAction = (postId, sampleSearchCity) => ({
  type: "LOAD_SAMPLE_SEARCH_CITY",
  data: { postId, sampleSearchCity }
});

const loadPostAction = (post) => ({
  type: "LOAD_POST",
  data: { post }
});

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

export function loadPost(postId, sampleSearchCityId) {
  return function(dispatch, getState) {
    
    //TODO make an API that return the post with the selected city
    var allPost = postAction.apiListPosts();
    var postObj = object.listToObject(allPost.freePostList);

    var post = postObj[postId];
    dispatch( loadPostAction(post) );

    loadCityIfNotExist(postId, sampleSearchCityId)(dispatch, getState);
  };
}


//-------------  TEST API ------------------------

function apiLoadSampleSearchCity(id) {
  var cityList = [
    {
      name: "Rome",
      price: 234,
      id: "rome",
      code: "ROM",
      departureDate: "Jun 3",
      arrivalDate: "Jun 12" 
    },
    {
      name: "Venice",
      price: 333,
      id: "venice",
      code: "VEN",
      departureDate: "Jun 3",
      arrivalDate: "Jun 12"
    },
    {
      name: "Florence",
      price: 340,
      id: "berlin",
      code: "FLO",
      departureDate: "Jun 3",
      arrivalDate: "Jun 12"
    },
    {
      name: "Milan",
      price: 447,
      id: "milan",
      code: "MIL",
      departureDate: "Jun 3",
      arrivalDate: "Jun 12"
    },
    {
      name: "Pisa",
      price: 1233,
      id: "pisa",
      code: "PIS",
      departureDate: "Jun 2019",
      arrivalDate: "Jul 2019"
    }
  ];

  var cityObj = object.listToObject(cityList);

  var city = cityObj[id];
  city.origin= "San Francisco"; 
  city.avg= 500;
  city.country= 'Italy';

  var sampleSearchList = [];

  for (var i = 0; i < 10; i++) {
    sampleSearchList.push({ 
      originCode: "SFO",  
      price: city.price + i,
      departureDate: "Jun " + (10 + i),
      arrivalDate: "Jun " + (30 - i),
      nights: 30 - i - (10 + i)
    });
  }

  city["sampleSearchList"] = sampleSearchList;

  return city;
}
