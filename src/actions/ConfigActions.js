import * as configActionsCreator from "./config.actions_creator";

export function loadConfigs() {
  return function(dispatch) {
    dispatch(configActionsCreator.setRegionsAction(loadRegionsAPI()));
  };
}

//-------------  TEST API ------------------------

function loadRegionsAPI() {
  return {
    1: [
      { name: "Atlanta", code: "ATL" },
      { name: "Miami", code: "MIA" },
      { name: "Orlando", code: "ORL@0ply0@orlb" },
      { name: "Fort Lauderdale", code: "FLL" },
      { name: "Tampa", code: "TPA" },
      { name: "Jacksonville", code: "JAX" },
      { name: "Nashville", code: "BNA" },
      { name: "Charleston", code: "CHS" }
    ],
    2: [
      { name: "Chicago", code: "CHI@01_d4@chia" },
      { name: "Minneapolis", code: "MSP" },
      { name: "Detroit", code: "DTT@02dtg@dtta" },
      { name: "St. Louis", code: "STL" }
    ],
    3: [
      { name: "New York (JFK)", code: "JFK" },
      { name: "New York (LGA)", code: "LGA" },
      { name: "Newark", code: "EWR" },
      { name: "Washington D.C", code: "WAS@0rh6k@wasa" },
      { name: "Philadelphia", code: "PHL@0dclg@phla" },
      { name: "Boston", code: "BOS" },
      { name: "Charlotte", code: "CLT" },
      { name: "Baltimore", code: "BWI" }
    ],
    4: [
      { name: "Austin", code: "AUS" },
      { name: "Dallas", code: "DFW" },
      { name: "Phoenix", code: "PHX" },
      { name: "Denver", code: "DEN" },
      { name: "Houston", code: "HOU@03l2n@houa" },
      { name: "Las Vegas", code: "LAS" },
      { name: "Salt Lake", code: "SLC" }
    ],
    5: [
      { name: "Portland", code: "PDX" },
      { name: "San Francisco", code: "SFO" },
      { name: "Seattle", code: "SEA" },
      { name: "Los Angeles", code: "LAX" },
      { name: "San Diego", code: "SAN" },
      { name: "Oakland", code: "OAK" }
    ],
    6: [
      { name: "Toronto", code: "YYZ" },
      { name: "Ottawa", code: "YOW" },
      { name: "Quebec", code: "YQB" },
      { name: "Vancouver", code: "YVR" },
      { name: "Edmonton", code: "YEG" },
      { name: "Montreal", code: "YMQ@052p7@ymqa" },
      { name: "Winnipeg", code: "YWG" }
    ]
  };
}
