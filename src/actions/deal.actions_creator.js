export const loadCityAction = (postId, sampleSearchCity, postListName) => ({
  type: "LOAD_SAMPLE_SEARCH_CITY",
  data: { postId, sampleSearchCity, postListName }
});

export const loadPostAction = post => ({
  type: "LOAD_POST",
  data: { post }
});

export const setSelectedPostId = (selectedPostId) => ({
  type: "SET_SELECTED_POST",
  data: selectedPostId 
});
