export const initConfigsAction = configs => ({
  type: "INIT_CONFIGS",
  data: { configs }
});

export const updateDepartureCitiesAction = departureCities => ({
  type: "UPDATE_DEPARTURE_CITIES",
  data: departureCities
});
