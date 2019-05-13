import * as object from "../utils/object";
 

export const addPostListAction = (response, currentPage) => ({
  type: "POST_LIST_ADD",
  data: {
    currentPage,
    postList: object.listToObject(response.postList || [], 'postId'),
    expiredPostList: object.listToObject(response.expiredPostList || [], 'postId')
  }
});

export const cleanPostListAction = () => ({
  type: "CLEAN_POST_LIST" 
});