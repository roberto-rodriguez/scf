import * as Proxy from "../../../actions/Proxy";
import * as postActionsCreator from "../../../actions/post.actions_creator";
import * as object from "../../../utils/object";

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

      if (postList.length % 10 != 0) {
        params.start = start + (postList.length % 10);
      } else {
        params.start = start;
      }

      params.end = end;

      //-------- MOCK --------------
      var listPostResult = apiListPosts(page, params);

      var res = postList.concat(listPostResult.postList);
      res = res.slice(start, end);

      callback(res);

      dispatch(postActionsCreator.addPostListAction(listPostResult));


      //--------- REAL -----------------
 
      // Proxy.get(`post/list?start=${start}&limit=${10}`, response => {
      //   var listPostResult = response.List || [];
 
      //   var res = postList.concat(listPostResult);
      //   res = res.slice(start, end);

      //   callback(res);

      //   dispatch(postActionsCreator.addPostListAction(listPostResult));
      // });
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
  var list = buildCityList();

  list = list.map((c, i) => ({
    ...c,
    cityList: list.filter(city => city.country == c.country),
    id: (page + 1) * 10 + i,
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

export function buildCityList() {
  return [
//******************** EUROPE 

 //--------- Ukraine 
 {
  originCity: "San Francisco",
  city: "Kiev",
  price: 340,
  id: "Kiev",
  cityCode: "IEV@02sn34@kiev",
  departureDate: "Jun 3",
  arrivalDate: "Jun 12",
  country: "Ukraine",
  avg: 700,
  region: 3
},

 //--------- United Kingdom 
 {
  originCity: "San Francisco",
  city: "London",
  price: 340,
  id: "London",
  cityCode: "LON@04jpl@lond",
  departureDate: "Jun 3",
  arrivalDate: "Jun 12",
  country: "United Kingdom",
  avg: 700,
  region: 3
},
{
  originCity: "Denver",
  city: "Liverpool",
  price: 447,
  id: "Liverpool",
  cityCode: "LPL",
  departureDate: "Jun 3",
  arrivalDate: "Jun 12",
  country: "United Kingdom",
  avg: 700,
  region: 3
},
{
  originCity: "Denver",
  city: "Manchester",
  price: 447,
  id: "Manchester",
  cityCode: "MAN",
  departureDate: "Jun 3",
  arrivalDate: "Jun 12",
  country: "United Kingdom",
  avg: 700,
  region: 3
},
{
  originCity: "Denver",
  city: "Edinburgh",
  price: 447,
  id: "Edinburgh",
  cityCode: "EDI",
  departureDate: "Jun 3",
  arrivalDate: "Jun 12",
  country: "United Kingdom",
  avg: 700,
  region: 3
},
 //--------- Turkey 
{
  originCity: "San Francisco",
  city: "Istanbul",
  price: 340,
  id: "Istanbul",
  cityCode: "IST",
  departureDate: "Jun 3",
  arrivalDate: "Jun 12",
  country: "Turkey",
  avg: 700,
  region: 3
},
{
  originCity: "San Francisco",
  city: "Ankara",
  price: 340,
  id: "Ankara",
  cityCode: "ESB",
  departureDate: "Jun 3",
  arrivalDate: "Jun 12",
  country: "Turkey",
  avg: 700,
  region: 3
},
 //--------- Switzerland 
{
  originCity: "San Francisco",
  city: "Zurich",
  price: 340,
  id: "Zurich",
  cityCode: "ZRH",
  departureDate: "Jun 3",
  arrivalDate: "Jun 12",
  country: "Switzerland",
  avg: 700,
  region: 3
},
 //--------- Sweden 
{
  originCity: "San Francisco",
  city: "Stockholm",
  price: 340,
  id: "Stockholm",
  cityCode: "STO@06mxs@stoc",
  departureDate: "Jun 3",
  arrivalDate: "Jun 12",
  country: "Sweden",
  avg: 700,
  region: 3
},
 //--------- Spain 
{
  originCity: "San Francisco",
  city: "Barcelona",
  price: 340,
  id: "Barcelona",
  cityCode: "BCN",
  departureDate: "Jun 3",
  arrivalDate: "Jun 12",
  country: "Spain",
  avg: 700,
  region: 3
},
{
  originCity: "Denver",
  city: "Malaga",
  price: 447,
  id: "Malaga",
  cityCode: "AGP",
  departureDate: "Jun 3",
  arrivalDate: "Jun 12",
  country: "Spain",
  avg: 700,
  region: 3
},
{
  originCity: "Denver",
  city: "Ibiza",
  price: 447,
  id: "Ibiza",
  cityCode: "IBZ",
  departureDate: "Jun 3",
  arrivalDate: "Jun 12",
  country: "Spain",
  avg: 700,
  region: 3
},
 //--------- Russia
 {
  originCity: "Miami",
  city: "Moscow",
  price: 333,
  id: "Moscow",
  cityCode: "MOW@04swd@mosc",
  departureDate: "Jun 3",
  arrivalDate: "Jun 12",
  country: "Russia",
  avg: 700,
  region: 3
},
{
  originCity: "San Francisco",
  city: "Saint Petersburg",
  price: 340,
  id: "Saint Petersburg",
  cityCode: "LED@06pr6@led",
  departureDate: "Jun 3",
  arrivalDate: "Jun 12",
  country: "Russia",
  avg: 700,
  region: 3
},
{
  originCity: "Denver",
  city: "Sochi",
  price: 447,
  id: "Sochi",
  cityCode: "AER",
  departureDate: "Jun 3",
  arrivalDate: "Jun 12",
  country: "Russia",
  avg: 700,
  region: 3
},
 // ----------- Portugal --------------- 
 {
  originCity: "New York-LGA",
  city: "Lisbon",
  price: 234,
  id: "Lisbon",
  cityCode: "LIS",
  departureDate: "Jun 3",
  arrivalDate: "Jun 12",
  country: "Portugal",
  avg: 700,
  region: 7
},
 // ----------- Poland --------------- 
 {
  originCity: "New York-LGA",
  city: "Warsaw",
  price: 234,
  id: "Warsaw",
  cityCode: "WAW",
  departureDate: "Jun 3",
  arrivalDate: "Jun 12",
  country: "Poland",
  avg: 700,
  region: 7
},
 // ----------- Norway --------------- 
 {
  originCity: "New York-LGA",
  city: "Oslo",
  price: 234,
  id: "Oslo",
  cityCode: "OSL@05l64@oslo",
  departureDate: "Jun 3",
  arrivalDate: "Jun 12",
  country: "Norway",
  avg: 700,
  region: 7
},
 // ----------- Netherlands --------------- 
 {
  originCity: "New York-LGA",
  city: "Amsterdam",
  price: 234,
  id: "Amsterdam",
  cityCode: "AMS",
  departureDate: "Jun 3",
  arrivalDate: "Jun 12",
  country: "Netherlands",
  avg: 700,
  region: 7
},
 // ----------- Italy --------------- 
 {
  originCity: "New York-LGA",
  city: "Rome",
  price: 234,
  id: "Rome",
  cityCode: "ROM@06c62@rome",
  departureDate: "Jun 3",
  arrivalDate: "Jun 12",
  country: "Italy",
  avg: 700,
  region: 7
},
{
  originCity: "Toronto",
  city: "Milan",
  price: 333,
  id: "Milan",
  cityCode: "MIL@0947l@mila",
  departureDate: "Jun 3",
  arrivalDate: "Jun 12",
  country: "Italy",
  avg: 700,
  region: 7
},
{
  originCity: "Las Vegas",
  city: "Venice",
  price: 340,
  id: "Venice",
  cityCode: "VCE@07_pf@veni",
  departureDate: "Jun 3",
  arrivalDate: "Jun 12",
  country: "Italy",
  avg: 700,
  region: 7
},
{
  originCity: "San Francisco",
  city: "Florence",
  price: 447,
  id: "Florence",
  cityCode: "FLR",
  departureDate: "Jun 3",
  arrivalDate: "Jun 12",
  country: "Italy",
  avg: 700,
  region: 7
},
{
  originCity: "Las Vegas",
  city: "Pisa",
  price: 447,
  id: "Pisa",
  cityCode: "PSA",
  departureDate: "Jun 3",
  arrivalDate: "Jun 12",
  country: "Italy",
  avg: 700,
  region: 7
},
 //--------- Ireland
 {
  originCity: "Miami",
  city: "Dublin",
  price: 333,
  id: "Dublin",
  cityCode: "DUB",
  departureDate: "Jun 3",
  arrivalDate: "Jun 12",
  country: "Ireland",
  avg: 700,
  region: 3
},
 //--------- Iceland
 {
  originCity: "Miami",
  city: "Reykjavik",
  price: 333,
  id: "Reykjavik",
  cityCode: "KEF",
  departureDate: "Jun 3",
  arrivalDate: "Jun 12",
  country: "Iceland",
  avg: 700,
  region: 3
},
 //--------- Hungary
 {
  originCity: "Miami",
  city: "Budapest",
  price: 333,
  id: "Budapest",
  cityCode: "BUD",
  departureDate: "Jun 3",
  arrivalDate: "Jun 12",
  country: "Hungary",
  avg: 700,
  region: 3
},
 //--------- Greece
 {
  originCity: "Miami",
  city: "Athens",
  price: 333,
  id: "Athens",
  cityCode: "ATH",
  departureDate: "Jun 3",
  arrivalDate: "Jun 12",
  country: "Greece",
  avg: 700,
  region: 3
},
 //--------- Germany
 {
  originCity: "Miami",
  city: "Berlin",
  price: 333,
  id: "Berlin",
  cityCode: "BER@0156q@berl",
  departureDate: "Jun 3",
  arrivalDate: "Jun 12",
  country: "Germany",
  avg: 700,
  region: 3
},
{
  originCity: "San Francisco",
  city: "Munich",
  price: 340,
  id: "Munich",
  cityCode: "MUC",
  departureDate: "Jun 3",
  arrivalDate: "Jun 12",
  country: "Germany",
  avg: 700,
  region: 3
},
{
  originCity: "Denver",
  city: "Hamburg",
  price: 447,
  id: "Hamburg",
  cityCode: "HAM",
  departureDate: "Jun 3",
  arrivalDate: "Jun 12",
  country: "Germany",
  avg: 700,
  region: 3
},
{
  originCity: "New York-JFK",
  city: "Frankfurt",
  price: 1233,
  id: "Frankfurt",
  cityCode: "FRA",
  departureDate: "Jun 2019",
  arrivalDate: "Jul 2019",
  country: "Germany",
  avg: 700,
  region: 3
},

 //--------- France
 {
  originCity: "Miami",
  city: "Paris",
  price: 333,
  id: "Paris",
  cityCode: "PAR@05qtj@pari",
  departureDate: "Jun 3",
  arrivalDate: "Jun 12",
  country: "France",
  avg: 700,
  region: 3
},
{
  originCity: "San Francisco",
  city: "Marseille",
  price: 340,
  id: "Marseille",
  cityCode: "MRS",
  departureDate: "Jun 3",
  arrivalDate: "Jun 12",
  country: "France",
  avg: 700,
  region: 3
},
{
  originCity: "Denver",
  city: "Bordeaux",
  price: 447,
  id: "Bordeaux",
  cityCode: "BOD",
  departureDate: "Jun 3",
  arrivalDate: "Jun 12",
  country: "France",
  avg: 700,
  region: 3
},
   //--------- Finland
   {
    originCity: "Miami",
    city: "Helsinki",
    price: 447,
    id: "Helsinki",
    cityCode: "HEL",
    departureDate: "Jun 3",
    arrivalDate: "Jun 12",
    country: "Finland",
    avg: 700,
    region: 3
  },
   //--------- Denmark
   {
    originCity: "Miami",
    city: "Copenhagen",
    price: 447,
    id: "Copenhagen",
    cityCode: "CPH",
    departureDate: "Jun 3",
    arrivalDate: "Jun 12",
    country: "Denmark",
    avg: 700,
    region: 3
  },
   //--------- Croatia
   {
    originCity: "New Jork-LGA",
    city: "Zagreb",
    price: 447,
    id: "Zagreb",
    cityCode: "ZAG",
    departureDate: "Jun 3",
    arrivalDate: "Jun 12",
    country: "Croatia",
    avg: 700,
    region: 3
  },
   //--------- Canary Islands 
   {
    originCity: "Denver",
    city: "Prague",
    price: 447,
    id: "Prague",
    cityCode: "PRG",
    departureDate: "Jun 3",
    arrivalDate: "Jun 12",
    country: "Czech Republic",
    avg: 700,
    region: 3
  },
   //--------- Canary Islands 
   {
    originCity: "San Francisco",
    city: "Las Palmas",
    price: 340,
    id: "LasPalmas",
    cityCode: "LPA",
    departureDate: "Jun 3",
    arrivalDate: "Jun 12",
    country: "Canary Islands",
    avg: 700,
    region: 3
  },
  {
    originCity: "Denver",
    city: "Tenerife",
    price: 447,
    id: "Tenerife",
    cityCode: "TFN",
    departureDate: "Jun 3",
    arrivalDate: "Jun 12",
    country: "Canary Islands",
    avg: 700,
    region: 3
  },
  {
    originCity: "New York-JFK",
    city: "Lanzarote",
    price: 1233,
    id: "Lanzarote",
    cityCode: "ACE",
    departureDate: "Jun 2019",
    arrivalDate: "Jul 2019",
    country: "Canary Islands",
    avg: 700,
    region: 3
  },
//------ Bulgaria 
{
  originCity: "San Francisco",
  city: "Sofia",
  price: 340,
  id: "Sofia",
  cityCode: "SOF",
  departureDate: "Jun 3",
  arrivalDate: "Jun 12",
  country: "Bulgaria",
  avg: 700,
  region: 3
},
//------ Belgium 
{
  originCity: "San Francisco",
  city: "Brussels",
  price: 340,
  id: "Brussels",
  cityCode: "BRU",
  departureDate: "Jun 3",
  arrivalDate: "Jun 12",
  country: "Belgium",
  avg: 700,
  region: 3
},
//------ Austria 
{
  originCity: "San Francisco",
  city: "Vienna",
  price: 340,
  id: "Vienna",
  cityCode: "VIE",
  departureDate: "Jun 3",
  arrivalDate: "Jun 12",
  country: "Austria",
  avg: 700,
  region: 3
},

// *********************** ASIA ***************

    //--------- Vietnam 
    {
      originCity: "San Francisco",
      city: "Hanoi",
      price: 340,
      id: "Hanoi",
      cityCode: "HAN",
      departureDate: "Jun 3",
      arrivalDate: "Jun 12",
      country: "Vietnam",
      avg: 700,
      region: 3
    },
    {
      originCity: "Denver",
      city: "Ho Chi Minh",
      price: 447,
      id: "Ho_Chi_Minh",
      cityCode: "SGN",
      departureDate: "Jun 3",
      arrivalDate: "Jun 12",
      country: "Vietnam",
      avg: 700,
      region: 3
    },
    {
      originCity: "New York-JFK",
      city: "Da Nang",
      price: 1233,
      id: "Da_Nang",
      cityCode: "DAD",
      departureDate: "Jun 2019",
      arrivalDate: "Jul 2019",
      country: "Vietnam",
      avg: 700,
      region: 3
    },
    //--------- Thailand
    {
      originCity: "San Francisco",
      city: "Bangkok",
      price: 340,
      id: "Bangkok",
      cityCode: "BKK",
      departureDate: "Jun 3",
      arrivalDate: "Jun 12",
      country: "Thailand",
      avg: 700,
      region: 3
    },
    {
      originCity: "Denver",
      city: "Phuket",
      price: 447,
      id: "Phuket",
      cityCode: "HKT",
      departureDate: "Jun 3",
      arrivalDate: "Jun 12",
      country: "Thailand",
      avg: 700,
      region: 3
    },
    {
      originCity: "New York-JFK",
      city: "Chiang Mai",
      price: 1233,
      id: "Chiang_Mai",
      cityCode: "CNX",
      departureDate: "Jun 2019",
      arrivalDate: "Jul 2019",
      country: "Thailand",
      avg: 700,
      region: 3
    },
    //--------- Taiwan
    {
      originCity: "Chicago",
      city: "Taipei",
      price: 340,
      id: "Taipei",
      cityCode: "TPE",
      departureDate: "Jun 3",
      arrivalDate: "Jun 12",
      country: "Taiwan",
      avg: 700,
      region: 3
    },
    //--------- South Korea

    {
      originCity: "San Francisco",
      city: "Seoul",
      price: 340,
      id: "Seoul",
      cityCode: "GMP",
      departureDate: "Jun 3",
      arrivalDate: "Jun 12",
      country: "South Korea",
      avg: 700,
      region: 3
    },
    {
      originCity: "Denver",
      city: "Gwangju",
      price: 447,
      id: "Gwangju",
      cityCode: "KWJ",
      departureDate: "Jun 3",
      arrivalDate: "Jun 12",
      country: "South Korea",
      avg: 700,
      region: 3
    },
    {
      originCity: "New York-JFK",
      city: "Busan",
      price: 1233,
      id: "Busan",
      cityCode: "PUS",
      departureDate: "Jun 2019",
      arrivalDate: "Jul 2019",
      country: "South Korea",
      avg: 700,
      region: 3
    },
    {
      originCity: "Miami",
      city: "Jeju City",
      price: 333,
      id: "Jeju_City",
      cityCode: "CJU",
      departureDate: "Jun 3",
      arrivalDate: "Jun 12",
      country: "South Korea",
      avg: 700,
      region: 3
    },
    //--------- Singapore
    {
      originCity: "Miami",
      city: "Singapore",
      price: 333,
      id: "Singapore",
      cityCode: "SIN",
      departureDate: "Jun 3",
      arrivalDate: "Jun 12",
      country: "Singapore",
      avg: 700,
      region: 3
    },
    //--------- Saudi Arabia
    {
      originCity: "Miami",
      city: "Riyadh",
      price: 333,
      id: "Riyadh",
      cityCode: "RUH",
      departureDate: "Jun 3",
      arrivalDate: "Jun 12",
      country: "Saudi Arabia",
      avg: 700,
      region: 3
    },
    //--------- Philippines
    {
      originCity: "Miami",
      city: "Manila",
      price: 333,
      id: "Manila",
      cityCode: "MNL",
      departureDate: "Jun 3",
      arrivalDate: "Jun 12",
      country: "Philippines",
      avg: 700,
      region: 3
    },
    {
      originCity: "San Francisco",
      city: "Cebu",
      price: 340,
      id: "Cebu",
      cityCode: "CEB",
      departureDate: "Jun 3",
      arrivalDate: "Jun 12",
      country: "Philippines",
      avg: 700,
      region: 3
    },
    //--------- Nepal
    {
      originCity: "New York-JFK",
      city: "Kathmandu",
      price: 333,
      id: "Kathmandu",
      cityCode: "KTM",
      departureDate: "Jun 3",
      arrivalDate: "Jun 12",
      country: "Nepal",
      avg: 700,
      region: 3
    },
    //--------- Maldives
    {
      originCity: "Denver",
      city: "Male",
      price: 333,
      id: "Male",
      cityCode: "MLE",
      departureDate: "Jun 3",
      arrivalDate: "Jun 12",
      country: "Maldives",
      avg: 700,
      region: 3
    },
    //--------- Malaysia
    {
      originCity: "San Diego",
      city: "Kuala Lumpur",
      price: 333,
      id: "KualaLumpur",
      cityCode: "KUL",
      departureDate: "Jun 3",
      arrivalDate: "Jun 12",
      country: "Malaysia",
      avg: 700,
      region: 3
    },
    {
      originCity: "San Francisco",
      city: "Kota Kinabalu",
      price: 340,
      id: "KotaKinabalu",
      cityCode: "BKI",
      departureDate: "Jun 3",
      arrivalDate: "Jun 12",
      country: "Malaysia",
      avg: 700,
      region: 3
    },
    //--------- Lebanon
    {
      originCity: "San Diego",
      city: "Beirut",
      price: 333,
      id: "Beirut",
      cityCode: "BEY",
      departureDate: "Jun 3",
      arrivalDate: "Jun 12",
      country: "Lebanon",
      avg: 700,
      region: 3
    },
    //--------- Japan
    {
      originCity: "Miami",
      city: "Tokyo",
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
