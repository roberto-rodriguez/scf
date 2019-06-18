import * as configActionsCreator from "./config.actions_creator";
import * as object from "../utils/object";

export function loadConfig() {
  return function(dispatch) {
    dispatch(configActionsCreator.initConfigsAction(loadConfigsAPI()));
  };
}

//-------------  TEST API ------------------------

function loadConfigsAPI() {
  var cities = [
    { name: "Atlanta", code: "ATL", region: 1 },
    { name: "Miami", code: "MIA", region: 1 },
    { name: "Orlando", code: "ORL@0ply0@orlb", region: 1 },
    { name: "Fort Lauderdale", code: "FLL", region: 1 },
    { name: "Tampa", code: "TPA", region: 1 },
    { name: "Jacksonville", code: "JAX", region: 1 },
    { name: "Nashville", code: "BNA", region: 1 },
    { name: "Charleston", code: "CHS", region: 1 },
    { name: "Chicago", code: "CHI@01_d4@chia", region: 2 },
    { name: "Minneapolis", code: "MSP", region: 2 },
    { name: "Detroit", code: "DTT@02dtg@dtta", region: 2 },
    { name: "St. Louis", code: "STL", region: 2 },
    { name: "New York (JFK)", code: "JFK", region: 3 },
    { name: "New York (LGA)", code: "LGA", region: 3 },
    { name: "Newark", code: "EWR", region: 3 },
    { name: "Washington D.C", code: "WAS@0rh6k@wasa", region: 3 },
    { name: "Philadelphia", code: "PHL@0dclg@phla", region: 3 },
    { name: "Boston", code: "BOS", region: 3 },
    { name: "Charlotte", code: "CLT", region: 3 },
    { name: "Baltimore", code: "BWI", region: 3 },
    { name: "Austin", code: "AUS", region: 4 },
    { name: "Dallas", code: "DFW", region: 4 },
    { name: "Phoenix", code: "PHX", region: 4 },
    { name: "Denver", code: "DEN", region: 4 },
    { name: "Houston", code: "HOU@03l2n@houa", region: 4 },
    { name: "Las Vegas", code: "LAS", region: 4 },
    { name: "Salt Lake", code: "SLC", region: 4 },
    { name: "Portland", code: "PDX", region: 5 },
    { name: "San Francisco", code: "SFO", region: 5 },
    { name: "Seattle", code: "SEA", region: 5 },
    { name: "Los Angeles", code: "LAX", region: 5 },
    { name: "San Diego", code: "SAN", region: 5 },
    { name: "Oakland", code: "OAK", region: 5 },
    { name: "Toronto", code: "YYZ", region: 6 },
    { name: "Ottawa", code: "YOW", region: 6 },
    { name: "Quebec", code: "YQB", region: 6 },
    { name: "Vancouver", code: "YVR", region: 6 },
    { name: "Edmonton", code: "YEG", region: 6 },
    { name: "Montreal", code: "YMQ@052p7@ymqa", region: 6 },
    { name: "Winnipeg", code: "YWG", region: 6 },
    { name: "Halifax", code: "YHZ", region: 6 },
    { name: "St John's", code: "YYT", region: 6 },
    { name: "Calgary", code: "YYC", region: 6 } 
  ];
  return { cities: object.listToObject(cities, "code") };
}
