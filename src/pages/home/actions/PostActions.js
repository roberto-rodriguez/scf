import * as postActionsCreator from "../../../actions/post.actions_creator";
import * as object from "../../../utils/object";

const updateRegionAction = region => ({ type: "REGION_UPDATE", region });

export function listPost(page, callback, params) {
  return function(dispatch, getState) {
    var { postReducer, authReducer } = getState();

    var freePostObj = postReducer.postList;
    var postList = Object.values(freePostObj);

    if (params.region) { //TODO externalize the filter to a function to be used by the API dev too
      postList = postList.filter(post => post.region == params.region);
    }

    var start = page * 10;
    var end = start + 10;

    if (postList.length >= end) {
      callback(postList.slice(start, end));
    } else {
      params.principal = authReducer.id;

      if(postList.length % 10 != 0){
        params.start = start + postList.length % 10;
      }else{
        params.start = start;
      }
       
      
      params.end = end;
      var listPostResult = apiListPosts(page, params);

      var res = postList.concat(listPostResult.postList);
      res = res.slice(start, end);

      callback(res);

      dispatch(postActionsCreator.addPostListAction(listPostResult));
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
      status: 1,
      cityList: object.listToObject([...p.cityList])
    };
  });

  var expiredPostList = buildList(page, params);

  return { postList: newList, expiredPostList: [...expiredPostList] };
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

export function buildCityList() {
  return [
     //--------- Japan
     {
      originCity: "Miami",
      city: "Rio de Janeiro",
      // city: "Tokyo",
      price: 333,
      id: "Tokyo",
      cityCode: "TYO@07dfk@tyoa",
      departureDate: "Jun 3",
      arrivalDate: "Jun 12",
      country: "Japan",
      avg: 700,
      region: 3
    },
    {
      originCity: "San Francisco",
      city: "Osaka",
      price: 340,
      id: "Osaka",
      cityCode: "ITM",
      departureDate: "Jun 3",
      arrivalDate: "Jun 12",
      country: "Japan",
      avg: 700,
      region: 3
    },
    {
      originCity: "Denver",
      city: "Hiroshima",
      price: 447,
      id: "Hiroshima",
      cityCode: "HIJ",
      departureDate: "Jun 3",
      arrivalDate: "Jun 12",
      country: "Japan",
      avg: 700,
      region: 3
    },
    {
      originCity: "New York-JFK",
      city: "Sapporo",
      price: 1233,
      id: "Sapporo",
      cityCode: "CTS",
      departureDate: "Jun 2019",
      arrivalDate: "Jul 2019",
      country: "Japan",
      avg: 700,
      region: 3
    },
    {
      originCity: "Houston",
      city: "Fukuoka",
      price: 1143,
      id: "Fukuoka",
      cityCode: "FUK",
      departureDate: "Jun 2019",
      arrivalDate: "Jul 2019",
      country: "Japan",
      avg: 700,
      region: 3
    },
     //--------- Israel
     {
      originCity: "Miami",
      city: "Tel Aviv",
      price: 333,
      id: "TelAviv",
      cityCode: "TLV",
      departureDate: "Jun 3",
      arrivalDate: "Jun 12",
      country: "Israel",
      avg: 700,
      region: 3
    },
    //--------- Indonesia
    {
      originCity: "Miami",
      city: "Jakarta",
      price: 333,
      id: "Jakarta",
      cityCode: "CGK",
      departureDate: "Jun 3",
      arrivalDate: "Jun 12",
      country: "Indonesia",
      avg: 700,
      region: 3
    },
    {
      originCity: "San Francisco",
      city: "Bali",
      price: 340,
      id: "Bali",
      cityCode: "DPS",
      departureDate: "Jun 3",
      arrivalDate: "Jun 12",
      country: "Indonesia",
      avg: 700,
      region: 3
    },
    //--------- India
    {
      originCity: "Miami",
      city: "New Delhi",
      price: 333,
      id: "NewDelhi",
      cityCode: "DEL",
      departureDate: "Jun 3",
      arrivalDate: "Jun 12",
      country: "India",
      avg: 700,
      region: 3
    },
    {
      originCity: "San Francisco",
      city: "Bangalore",
      price: 340,
      id: "Bangalore",
      cityCode: "BLR",
      departureDate: "Jun 3",
      arrivalDate: "Jun 12",
      country: "India",
      avg: 700,
      region: 3
    },
    {
      originCity: "Denver",
      city: "Hyderabad",
      price: 447,
      id: "Hyderabad",
      cityCode: "HYD",
      departureDate: "Jun 3",
      arrivalDate: "Jun 12",
      country: "India",
      avg: 700,
      region: 3
    },
    {
      originCity: "New York-JFK",
      city: "Chennai",
      price: 1233,
      id: "Chennai",
      cityCode: "MAA",
      departureDate: "Jun 2019",
      arrivalDate: "Jul 2019",
      country: "India",
      avg: 700,
      region: 3
    },
    {
      originCity: "Houston",
      city: "Mumbai",
      price: 1143,
      id: "Mumbai",
      cityCode: "BOM",
      departureDate: "Jun 2019",
      arrivalDate: "Jul 2019",
      country: "India",
      avg: 700,
      region: 3
    },

    //---------------
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
    //------ China
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
      originCity: "New York-JFK",
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
      originCity: "New York-LGA",
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
      originCity: "Las Vegas",
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
