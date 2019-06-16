export default {
  deals: {
    selectedPostId: null,
    expiredPostList: {},
    postList: {},
    region: 0,
    filterCount: 0, //Used to notify home to update when filters change
    filters: {
      originNotIn: [],
      regionNotIn: [],
      cityOrCountry: null,
      fromMonth: null,
      toMonth: null,
      hollyday: null
    }
  },
  configs: {},
  auth: {
    appStarted: false,
    plan: 0, // 0-visitor, 1-free, 2-trial, 3-premium,
    departureCities: null
  },
  viewState: {
    showFilters: false
  }
};
