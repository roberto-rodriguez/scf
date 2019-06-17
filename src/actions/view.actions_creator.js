export const setViewStateAction = (prop, value) => ({
  type: "SET_VIEW_STATE",
  data: { prop, value }
});

export const increaseFilterCountAction = () => ({
  type: "INCREASE_FILTER_COUNT" 
});
