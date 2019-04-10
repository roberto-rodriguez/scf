import * as object from "../../../utils/object";

var id = 1;

const loadDealAction = deal => ({type: "DEAL_LOAD", deal});

 
export function listPost(page, callback, params) {
  return function(dispatch, getState) {
    console.log("PostActions:: listPost -> page = " + page);

    var { postReducer } = getState();

    var freePostObj = postReducer.freePostList;
    var freePostList = Object.values(freePostObj);

    if (params.region) {
      freePostList = freePostList.filter(post => post.region == params.region);
    }

    var start = page * 10;
    var end = start + 10;

    if (freePostList.length >= end) {
      callback(freePostList.slice(start, end));
    } else {
      var listPostResult = apiListJobs(page, params);

      var res = freePostList.concat(listPostResult.freePostList);
      res = res.slice(start, end);

      callback(res);

      dispatch(addPostListAction(listPostResult));
    }
  };
}
 
}

//-------------  TEST API ------------------------ 

function apiLoadDeal(id) {
  var cityList = [
    {
      name: "Rome",
      price: 234,
      id: "rome",
      code: 'ROM'
    },
    {
      name: "Venice",
      price: 333,
      id: "venice",
      code: 'VEN'
    },
    {
      name: "Florence",
      price: 340,
      id: "berlin",
      code: 'FLO'
    },
    {
      name: "Milan",
      price: 447,
      id: "milan",
      code: 'MIL'
    },
    {
      name: "Pisa",
      price: 1233,
      id: "pisa",
      code: 'PIS'
    }
  ];

  var cityObj = object.listToObject(cityList);

  var city = cityObj[id];

  var sampleSearchList = [];

  for(var i = 0; i < 10; i++){
    sampleSearchList.push({
      originCode: 'SFO',
      cityCode: city.code,
      price: city.price + i,
      departureDate: 'Jun ' + (10 + i),
      arrivalDate: 'Jun ' + (30 - i),
      nights: (30 - i) - (10 + i) 
    });
  }

  city['sampleSearchList'] = sampleSearchList;
}
