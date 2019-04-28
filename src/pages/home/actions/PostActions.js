import * as object from "../../../utils/object";

var id = 1;

const addPostListAction = response => ({
  type: "POST_LIST_ADD",
  data: {
    postList: object.listToObject(response.postList),
    expiredPostList: object.listToObject(response.expiredPostList)
  }
});

const updateRegionAction = region => ({ type: "REGION_UPDATE", region });

export function listPost(page, callback, params) {
  return function(dispatch, getState) {
    
    var { postReducer } = getState();

    var freePostObj = postReducer.postList;
    var postList = Object.values(freePostObj);

    if (params.region) {
      postList = postList.filter(post => post.region == params.region);
    }

    var start = page * 10;
    var end = start + 10;

    if (postList.length >= end) {
      callback(postList.slice(start, end));
    } else {
      var listPostResult = apiListPosts(page, params);

      var res = postList.concat(listPostResult.postList);
      res = res.slice(start, end);

      callback(res);

      dispatch(addPostListAction(listPostResult));
    }
  };
}

export function updateRegion(region) {
  return function(dispatch) {
    console.log("PostActions::updateRegion -> region = " + region);
    dispatch(updateRegionAction(region));
  };
}

//-------------  TEST API ------------------------

export function apiListPosts(page = 0, params = {}) {
  var postList = buildList(params);

  postList = postList.map(p => {
    p.cityList = object.listToObject(p.cityList);
    return p;
  });

  var expiredPostList = buildList(params);

  return { postList, expiredPostList };
}

function buildList(params) {
  var list = [
    {
      city: "Venice",
      country: "Italy",
      region: 2
    },
    {
      city: "Copenhagen",
      country: "Denmark",
      region: 2
    },
    {
      city: "Tokyo",
      country: "Japan",
      region: 3
    },
    {
      city: "New York",
      country: "United States",
      region: 1
    },
    {
      city: "Frankfurt",
      country: "Germany",
      region: 2
    },
    {
      city: "San Francisco",
      country: "United States",
      region: 1
    },
    {
      city: "Phuket",
      country: "Thailand",
      region: 3
    },
    {
      city: "Viena",
      country: "Austria",
      region: 2
    },
    {
      city: "Honolulu",
      country: "Hawaii",
      region: 4
    },
    {
      city: "Varadero",
      country: "Cuba",
      region: 5
    }
  ];

  var resultList = [];

  do {
    var filteredList = list.filter(
      item => !params.region || params.region == item.region
    );
    resultList = resultList.concat(filteredList);
  } while (filteredList != 0 && resultList.length < 10);

  return resultList.map(item => ({
    ...item, 
    id: ++id,
    price: 300 + id,
    avg: 100,
    foundDate: "5 hours ago",
    originCity: "San Francisco",
    cityList: buildCityList() 
  }));
}

export function buildCityList() {
  return [
    {
      originCity: "San Francisco",
      city: "Nairobi",
      price: 234,
      id: "Nairobi",
      cityCode: "NBO",
      departureDate: "Jun 3",
      arrivalDate: "Jun 12",
      image: "v1556212244",
      avg: 700
    },
    {
      originCity: "San Francisco",
      city: "Antananarivo",
      price: 333,
      id: "Antananarivo",
      cityCode: "TNR",
      departureDate: "Jun 3",
      arrivalDate: "Jun 12",
      image: "v1556212036",
      avg: 700
    },
    {
      originCity: "San Francisco",
      city: "Rabat",
      price: 340,
      id: "Rabat",
      cityCode: "RBA",
      departureDate: "Jun 3",
      arrivalDate: "Jun 12",
      image: "v1556210366",
      avg: 700
    },
    {
      originCity: "San Francisco",
      city: "Cape Town",
      price: 447,
      id: "CapeTown",
      cityCode: "CPT",
      departureDate: "Jun 3",
      arrivalDate: "Jun 12",
      image: "v1556316155",
      avg: 700
    },
    {
      originCity: "San Francisco",
      city: "Cairo",
      price: 1233,
      id: "Cairo",
      cityCode: "CAI",
      departureDate: "Jun 2019",
      arrivalDate: "Jul 2019",
      image: "v1556075068",
      avg: 700
    }
  ];
}