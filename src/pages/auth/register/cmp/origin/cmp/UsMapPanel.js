import React from "react";
import { connect } from "react-redux";
import "../../../../authStyles.scss";
import USAMap from "react-usa-map";
import PropTypes from "prop-types";
import * as utils from "../../../../../../utils/util";

// chili-pepper, orange light, Galaxy Blue, Quetzal Green, Lime Punch
//  const colors = ['#9B1B30', '#E08119', '#2A4B7C', '#006E6D', '#00A591', '#9B1B30']
//const colors = ['#B4B7BA', '#C0AB8E', '#B4B7BA', '#F0EDE5', '#F3D6E4', '#EDCDC2']
class SelectOrigin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      region: props.selectedRegion
    };
  }

  mapHandler = event => {
    var selectRegion = this.props.selectRegion;
    var list = this.stateAbbreviations;
    var regionId = Object.keys(list).filter(
      region => list[region].indexOf(event.target.dataset.name) >= 0
    );

    regionId = regionId[0];

    if (regionId != 0) {
      this.setState({
        region: regionId
      });

      selectRegion(regionId);

      if (window.scrollY < 300) {
        utils.scrollTo(600, 1000);
      }
    }
  };

  /* optional customization of filling per state and calling custom callbacks per state */
  statesCustomConfig = () => {
    var config = {};
    var selectedRegion = this.state.region;

    Object.keys(this.stateAbbreviations).forEach((region, i) =>
      this.stateAbbreviations[region].reduce((obj, item) => {
        obj[item] = {
          fill:
            region == 0
              ? "#FFFFFF"
              : region == selectedRegion
              ?  "#22a9bf"
              : "rgba(1,1,1, 0.2)" //" " + (0.1 + 0.08 * (i + 1)) + ")"  //
        };
        return obj;
      }, config)
    );

    return config;
  };

  render() {
    return (
      <div>
        <USAMap
        title="Select Region"
          width={screen.width/3}
          height={screen.width/3 - 120}
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

SelectOrigin.propTypes = {
  selectRegion: PropTypes.func,
  selectedRegion: PropTypes.any
};

export default connect()(SelectOrigin);
