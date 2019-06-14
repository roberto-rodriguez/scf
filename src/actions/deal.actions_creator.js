export const loadCityAction = (postId, sampleSearchCity) => ({
  type: "LOAD_SAMPLE_SEARCH_CITY",
  data: { postId, sampleSearchCity }
});

export const loadPostAction = post => ({
  type: "LOAD_POST",
  data: { post }
});

export const setSelectedPostId = (selectedPostId) => ({
  type: "SET_SELECTED_POST",
  data: selectedPostId 
});
