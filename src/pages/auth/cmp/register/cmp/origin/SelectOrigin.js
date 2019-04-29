import React from "react";
import { connect } from "react-redux";
import "../../../../authStyles.scss";
import USAMap from "react-usa-map";

class SelectOrigin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      region: null
    };
  }

  mapHandler = event => {
    var list = this.stateAbbreviations;
    var regionId = Object.keys(list).filter(
      region => list[region].indexOf(event.target.dataset.name) >= 0
    );

    regionId = regionId[0];

    if (regionId != 0) {
      this.setState({
        region: regionId
      });
    }
  };

  /* optional customization of filling per state and calling custom callbacks per state */
  statesCustomConfig = () => {
    var config = {};
    var selectedRegion = this.state.region;

    Object.keys(this.stateAbbreviations).forEach((region, i) =>
      this.stateAbbreviations[region].reduce((obj, item) => {
        obj[item] = {
          fill: region == 0 ? '#FFFFFF' : ( region == selectedRegion ? "#22a9bf" : "rgba(1,1,1, " + (0.1 + 0.06 * (i + 1)) + ")")
           
        };
        return obj;
      }, config)
    );

    return config;
  };

  render() {
    return (
      <div>
        <br />
        <h5 className="text-center">Select upto 4 departing cities</h5>
        <USAMap
          width={600}
          height={460}
          customize={this.statesCustomConfig()}
          onClick={this.mapHandler}
        />
      </div>
    );
  }

  stateAbbreviations = {
    1: ["FL", "GA", "SC", "AL", "MS", "AR", "NC", "TN", "LA"],
    4: ["TX", "OK", "NM", "CO", "AZ", "UT", "NV"],
    3: [
      "AS",
      "CT",
      "DE",
      "DC",
      "FM",
      "GU",
      "ME",
      "MH",
      "MD",
      "MA",
      "NH",
      "NJ",
      "NY",
      "MP",
      "PW",
      "PA",
      "PR",
      "RI",
      "VT",
      "VI",
      "VA",
      "WV"
    ],
    5: ["CA", "OR", "WA", "ID", "MT", "WY"],
    2: [
      "ND",
      "SD",
      "NE",
      "KS",
      "MN",
      "IA",
      "MO",
      "WI",
      "IL",
      "KY",
      "IN",
      "OH",
      "MI"
    ],
    0: ["AK", "HI"]
  };
}

export default connect()(SelectOrigin);
