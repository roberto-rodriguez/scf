import React from "react";
import { connect } from "react-redux";
import "../../../../authStyles.scss";
import USAMap from "react-usa-map";
import PropTypes from "prop-types";
import * as utils from "../../../../../../utils/util";
import CitiesPanel from "./CitiesPanel";

// chili-pepper, orange light, Galaxy Blue, Quetzal Green, Lime Punch
const colors = [
  "#9B1B30",
  "#E08119",
  "#2A4B7C",
  "#006E6D",
  "#00A591",
  "#9B1B30"
];
//const colors = ['#B4B7BA', '#C0AB8E', '#B4B7BA', '#F0EDE5', '#F3D6E4', '#EDCDC2']
class UsMapPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      region: props.selectedRegion || 0
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

      
    }
  };

  onBackToMap = () => {
    this.setState({ region: 0 });
    this.props.selectRegion(0);
  };

  /* optional customization of filling per state and calling custom callbacks per state */
  statesCustomConfig = () => {
    var config = {};
    var selectedRegion = this.state.region;

    Object.keys(this.stateAbbreviations).forEach((region) =>
      this.stateAbbreviations[region].reduce((obj, item) => {
        obj[item] = {
          fill:
            region == 0
              ? "#FFFFFF"
              : region == selectedRegion
              ? "gray" // "#22a9bf"
              : colors[region] // "rgba(1,1,1, 0.2)" //" " + (0.1 + 0.08 * (i + 1)) + ")"  //
        };
        return obj;
      }, config)
    );

    return config;
  };

  render() {
    var { region } = this.state;
    var { selectCity, departureCities, hideFooter } = this.props;

    var width, height;

    if (!document.getElementsByClassName("mobile").length) {
      width = screen.width / 3;
      height = screen.width / 3 - 120;
    }

    if (region == 0) {
      return (
        <USAMap
          title="Select Region"
          width={width}
          height={height}
          customize={this.statesCustomConfig()}
          onClick={this.mapHandler}
        />
      );
    } else {
      return (
        <div>
          <CitiesPanel
            regionId={region}
            selectCity={selectCity}
            departureCities={departureCities}
            onBackToMap={this.onBackToMap}  
            hideFooter={hideFooter}          
          />
        </div>
      );
    }
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

UsMapPanel.propTypes = {
  selectRegion: PropTypes.func,
  selectedRegion: PropTypes.any,
  regionId: PropTypes.any,
  selectCity: PropTypes.func,
  departureCities: PropTypes.any,
  hideFooter: PropTypes.func
};

export default connect()(UsMapPanel);
