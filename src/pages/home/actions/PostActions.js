export function listFreePost(page, callback,  params, reset) {
  return function (dispatch, getState) {

    var userId = 1;
    callback(apiListJobs(userId, page, params));
  }
}

export function listPremiumPost(page, callback, params, reset) {
  return function (dispatch, getState) {
    var userId = 1;
    callback(apiListJobs(userId, page, params));
  }
}




function apiListJobs(userId, page = 0, params) {
  console.log('Retrieving Jobs. page: ' + page)

  //  if(page === 0)jobs = []

  var list = [{
      city: 'Venice',
      country: 'Italy',
    },
    {
      city: 'Copenhagen',
      country: 'Denmark',
    },
    {
      city: 'Tokyo',
      country: 'Japan',
    },
    {
      city: 'New York',
      country: 'United States',
    },
    {
      city: 'Frankfurt',
      country: 'Germany',
    },
    {
      city: 'San Francisco',
      country: 'United States',
    },
    {
      city: 'Phuket',
      country: 'Thailand',
    },
    {
      city: 'Viena',
      country: 'Austria',
    },
    {
      city: 'Honolulu',
      country: 'Hawaii',
    },
    {
      city: 'Sydney',
      country: 'Australia',
    },
    {
        city: 'Cancun',
        country: 'Mexico',
      },
      {
        city: 'London',
        country: 'United Kingdom' 
      }
  ];

  var listWithId = list.map((item, i) => ({
    ...item,
    id: page * 10 + i + 1
  }));

  return listWithId;
}
