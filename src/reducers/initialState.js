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
  configs: {},
  auth: {
    appStarted: false,
    plan: 0, // 0-visitor, 1-free, 2-trial, 3-premium,
    departureCities: null,
    clientId: null
  },
  viewState: {
    showFilters: false,
    filterCount: 0, //Used to notify home to update when filters change
    showTour: false,
    showWelcome: false
  }
};
