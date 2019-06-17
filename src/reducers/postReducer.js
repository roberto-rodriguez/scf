import objectAssign from "object-assign";
import initialState from "./initialState";

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function postReducer(state = initialState.deals, action) {
  var { type, data } = action;

  switch (type) {
    case "POST_LIST_ADD":
      var { postList, expiredPostList, currentPage, reload } = data;

      var newState = objectAssign({}, state, {
        currentPage,
        postList: reload ? postList : objectAssign({}, state.postList, postList),
        expiredPostList: reload ? expiredPostList : objectAssign(
          {},
          state.expiredPostList,
          expiredPostList
        )
      });
      return newState;

    case "REGION_UPDATE":
      return objectAssign({}, state, { region: action.region });

    case "LOAD_POST":
      var { post } = data;
      return {
        ...state,
        selectedPostId: post.postId,
        postList: {
          ...state.postList,
          [post.postId]: {
            ...post
          }
        }
      };

    case "LOAD_SAMPLE_SEARCH_CITY":
      var { postId, sampleSearchCity } = data;
      post = state.postList[postId] || { cityList: {} };
      return {
        ...state,
        selectedPostId: postId,
        postList: {
          ...state.postList,
          [postId]: {
            ...post,
            cityList: {
              ...post.cityList,
              [sampleSearchCity.cityCode]: {
                ...post.cityList[sampleSearchCity.cityCode],
                ...sampleSearchCity,
                loaded: true
              }
            }
          }
        }
      };

    case "SET_SELECTED_POST":
      return {
        ...state,
        selectedPostId: data
      };

    case "CLEAN_POST_LIST":
      return {
        ...state,
        selectedPostId: null,
        currentPage: 0,
        postList: {},
        expiredPostList: {}
      };

    case "UPDATE_FILTERS":
      return {
        ...state,
        filters: { ...data }
      };

   

    default:
      return state;
  }
}
