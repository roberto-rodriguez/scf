import * as object from "../utils/object";
 

export const addPostListAction = response => ({
  type: "POST_LIST_ADD",
  data: {
    postList: object.listToObject(response.postList || []),
    expiredPostList: object.listToObject(response.expiredPostList || [])
  }
});

export const cleanPostListAction = () => ({
  type: "CLEAN_POST_LIST" 
});