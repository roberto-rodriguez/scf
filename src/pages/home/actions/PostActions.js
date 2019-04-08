import * as object from "../../../utils/object";

var id = 1;

const addPostListAction = response => ({
  type: "POST_LIST_ADD",
  data: {
    freePostList: object.listToObject(response.freePostList),
    expiredPostList: object.listToObject(response.expiredPostList)
  }
});

const updateRegionAction = region => ({ type: "REGION_UPDATE", region });

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

export function updateRegion(region) {
  return function(dispatch) {
    console.log("PostActions::updateRegion -> region = " + region);
    dispatch(updateRegionAction(region));
  };
}

//-------------  TEST API ------------------------

function apiListJobs(page = 0, params = {}) {
 

  var freePostList = buildList( params);

  var expiredPostList = buildList( params);

  return { freePostList, expiredPostList };
}

function buildList( params) {
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

  do{
    var filteredList =  list.filter(item => !params.region || params.region == item.region);
    resultList = resultList.concat(filteredList)
  }while(filteredList != 0 && resultList.length < 10);

  return resultList 
    .map((item) => ({
      ...item,
      city: (++id) + "-" + item.city,
      id: id
    }));
}
