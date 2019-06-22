import React from "react";
import { connect } from "react-redux";
import * as object from "../../../../../utils/object";
import "../../../authStyles.scss";
import PropTypes from "prop-types";

import { UsMapPanel, CitiesPanel, SelectedCities } from "./cmp/";

class SelectOrigin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      country: "us", //or 'canada'
      region: null
    };
  }

  selectCountry = country => this.setState({ country });

  selectRegion = region => {
    this.setState({ region });
    this.props.onUpdate("selectedRegion", region);
  };

  selectCity = city => {
    var { departureCities } = this.props;

    var containsCity = object.listContainsObjWithPropEqualTo(
      departureCities,
      "code",
      city.code
    );

    if (containsCity) {
      this.deleteCity(city);
    } else {
      if (departureCities.length < 4) {
        var newList = [...departureCities, city];
        this.callOnUpdate(newList);
      }
    }
  };

  deleteCity = city => {
    var { departureCities } = this.props;

    var newList = [...departureCities.filter(c => c.code != city.code)];
    this.callOnUpdate(newList);
  };

  callOnUpdate = newList => this.props.onUpdate("departureCities", newList);

  render() {
    var { departureCities } = this.props;
    var { country, region } = this.state;
    var selectedRegion = this.props.selectedRegion || 0;

    return (
      <div>
        <div
          className="responsive-tabs responsive responsive-tabs-classic horizontal text-left"
          data-type="horizontal"
          style={{ display: "block", width: "100%" }}
        >
          <SelectedCities
            departureCities={departureCities}
            deleteCity={this.deleteCity}
          />
          <br />
          <ul className="resp-tabs-list tabs-1 text-center tabs-group-default select-origin-tab-panel">
            <li
              className={
                "resp-tab-item" + (country == "us" ? "resp-tab-active" : "")
              }
              aria-controls="tab_item-0"
              role="tab"
              onClick={() => this.selectCountry("us")}
            >
              United States
            </li>
            <li
              className={
                "resp-tab-item" + (country == "canada" ? "resp-tab-active" : "")
              }
              aria-controls="tab_item-1"
              role="tab"
              onClick={() => this.selectCountry("canada")}
            >
              Canada
            </li>
          </ul>
        </div>

        {country == "us" ? (
          <div>
            <UsMapPanel
              selectRegion={this.selectRegion}
              selectedRegion={selectedRegion}
              regionId={region}
              selectCity={this.selectCity}
              departureCities={departureCities}
            />
          </div>
        ) : (
          <CitiesPanel
            regionId={6}
            selectCity={this.selectCity}
            departureCities={departureCities}
          />
        )}
        <br />
        <br />
        <br />
      </div>
    );
  }
}

SelectOrigin.propTypes = {
  onUpdate: PropTypes.func,
  departureCities: PropTypes.any,
  selectedRegion: PropTypes.any
};

export default connect()(SelectOrigin);
