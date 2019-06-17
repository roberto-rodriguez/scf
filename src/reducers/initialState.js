export default {
  deals: {
    selectedPostId: null,
    expiredPostList: {},
    postList: {},
    region: 0, 
    filters: {
      // originNotIn: [],
      // regionNotIn: [],
      // cityOrCountry: null,
      // fromMonth: null,
      // toMonth: null,
      // holiday: null
    }
  },
<<<<<<< HEAD
  configs:{ 
  },
  auth:{
    appStarted: true,
    plan:0  // 0-visitor, 1-free, 2-trial, 3-premium,
=======
  configs: {},
  auth: {
    appStarted: false,
    plan: 0, // 0-visitor, 1-free, 2-trial, 3-premium,
    departureCities: null
>>>>>>> 7a9f5844f123730a579c4b992c7875a4f4e5bea1
  },
  viewState: {
    showFilters: false,
    filterCount: 0, //Used to notify home to update when filters change
  }
};
