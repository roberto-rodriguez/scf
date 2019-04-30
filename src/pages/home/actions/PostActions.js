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
  var postList = buildList(page, params);

  postList = postList.map(p => {
    p.cityList = object.listToObject(p.cityList);
    return p;
  });

  var expiredPostList = buildList(page, params);

  return { postList: [...postList], expiredPostList: [...expiredPostList] };
}

function buildList(page, params) {
  var list = buildCityList();

  list = list.map((c, i) => ({
    ...c,
    cityList: list.filter(city => city.country == c.country),
    id: (page + 1) * 10 + i, 
    foundDate: "5 hours ago" 
  }));

  var resultList = [];

  do {
  var filteredList = list.filter(
    item => !params.region || params.region == item.region
  );
  resultList = resultList.concat(filteredList);
} while (filteredList != 0 && resultList.length < 10);
 
return resultList.slice(0, 10);
}

export function buildCityList() {
  return [
    {
      originCity: "Atlanta",
      city: "Phnom Penh",
      price: 234,
      id: "PhnomPenh",
      cityCode: "PNH",
      departureDate: "Jun 3",
      arrivalDate: "Jun 12",
      country: "Cambodia",
      avg: 700,
      region: 3
    },
    {
      originCity: "Miami",
      city: "Beijing",
      price: 333,
      id: "Beijing",
      cityCode: "PEK",
      departureDate: "Jun 3",
      arrivalDate: "Jun 12",
      country: "China",
      avg: 700,
      region: 3
    },
    {
      originCity: "San Francisco",
      city: "Hong Kong",
      price: 340,
      id: "HongKong",
      cityCode: "HKG",
      departureDate: "Jun 3",
      arrivalDate: "Jun 12",
      country: "China",
      avg: 700,
      region: 3
    },
    {
      originCity: "Denver",
      city: "Tianjin",
      price: 447,
      id: "Tianjin",
      cityCode: "TSN",
      departureDate: "Jun 3",
      arrivalDate: "Jun 12",
      country: "China",
      avg: 700,
      region: 3
    },
    {
      originCity: "New York (JFK)",
      city: "Shenzhen",
      price: 1233,
      id: "Shenzhen",
      cityCode: "SZX",
      departureDate: "Jun 2019",
      arrivalDate: "Jul 2019",
      country: "China",
      avg: 700,
      region: 3
    },
    {
      originCity: "Houston",
      city: "Shanghai",
      price: 1143,
      id: "Shanghai",
      cityCode: "SHA",
      departureDate: "Jun 2019",
      arrivalDate: "Jul 2019",
      country: "China",
      avg: 700,
      region: 3
    },

    // ----------- AFRICA ---------------

    {
      originCity: "New York (LGA)",
      city: "Nairobi",
      price: 234,
      id: "Nairobi",
      cityCode: "NBO",
      departureDate: "Jun 3",
      arrivalDate: "Jun 12",
      country: "Kenya",
      avg: 700,
      region: 7
    },
    {
      originCity: "Toronto",
      city: "Antananarivo",
      price: 333,
      id: "Antananarivo",
      cityCode: "TNR",
      departureDate: "Jun 3",
      arrivalDate: "Jun 12",
      country: "Madagascar",
      avg: 700,
      region: 7
    },
    {
      originCity: "Ontario",
      city: "Rabat",
      price: 340,
      id: "Rabat",
      cityCode: "RBA",
      departureDate: "Jun 3",
      arrivalDate: "Jun 12",
      country: "Morocco",
      avg: 700,
      region: 7
    },
    {
      originCity: "San Francisco",
      city: "Cape Town",
      price: 447,
      id: "CapeTown",
      cityCode: "CPT",
      departureDate: "Jun 3",
      arrivalDate: "Jun 12",
      country: "South Africa",
      avg: 700,
      region: 7
    },
    {
      originCity: "Las Vegas",
      city: "Johannesburg",
      price: 447,
      id: "Johannesburg",
      cityCode: "JNB",
      departureDate: "Jun 3",
      arrivalDate: "Jun 12",
      country: "South Africa",
      avg: 700,
      region: 7
    },
    {
      originCity: "Los Angeles",
      city: "Cairo",
      price: 1233,
      id: "Cairo",
      cityCode: "CAI",
      departureDate: "Jun 2019",
      arrivalDate: "Jul 2019",
      country: "Egypt",
      avg: 700,
      region: 7
    }
  ];
}
