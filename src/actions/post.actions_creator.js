import * as object from "../utils/object";

export const addPostListAction = (response, currentPage, reload) => ({
  type: "POST_LIST_ADD",
  data: {
    reload,
    currentPage,
    postList: object.listToObject(response.postList || [], "postId"),
    expiredPostList: object.listToObject(
      response.expiredPostList || [],
      "postId"
    )
  }
});

export const cleanPostListAction = () => ({
  type: "CLEAN_POST_LIST"
});

export const updateFiltersAction = filters => ({
  type: "UPDATE_FILTERS",
  data: filters
});


