import React from "react";
import { connect } from "react-redux";
import "../../../../authStyles.scss";
import PropTypes from "prop-types";

import { UsMapPanel, CitiesPanel, SelectedCities } from "./cmp/";

class SelectOrigin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      country: "us", //or 'canada'
      region: null,
      selectedCities: []
    };
  }

  selectCountry = country => this.setState({ country });

  selectRegion = region => this.setState({ region });

  selectCity = city => {
    if (this.state.selectedCities.length < 4) {
      this.setState({ selectedCities: [...this.state.selectedCities, city] });
    }
  };

  deleteCity = city => {
    var newList = this.state.selectedCities.filter(c => c.code != city.code);
    this.setState({ selectedCities: [...newList] });
  };

  render() {
    var { country, region, selectedCities } = this.state;
    var { onNext, onBack } = this.props;

    return (
      <div>
        <br />
        <div>
          <h5 className="text-center h-margin-20 hr-title">
            <span className=" button-xs float-left cursor-pointer"  onClick={onBack}>
              <span className="bold-text pink-text margin-left-10">
                {"Back"}
              </span>
              <i className="fa fa-long-arrow-left float-left bold-text pink-text" />
            </span>
            Select upto 4 departing cities
            <span className=" button-xs float-right cursor-pointer" onClick={onNext}>
              <span className="bold-text pink-text margin-right-10">
                {"Next"}
              </span>
              <i className="fa fa-long-arrow-right float-right bold-text pink-text" />
            </span>
          </h5>
        </div>

        <div
          className="responsive-tabs responsive responsive-tabs-classic horizontal text-left"
          data-type="horizontal"
          style={{ display: "block", width: "100%" }}
        >
          <SelectedCities
            selectedCities={selectedCities}
            deleteCity={this.deleteCity}
          />
          <br />
          <ul className="resp-tabs-list tabs-1 text-center tabs-group-default select-origin-tab-panel">
            <li
              className={`resp-tab-item ${
                country == "us" ? "resp-tab-active" : ""
              }`}
              aria-controls="tab_item-0"
              role="tab"
              onClick={() => this.selectCountry("us")}
            >
              United States
            </li>
            <li
              className={`resp-tab-item ${
                country == "canada" ? "resp-tab-active" : ""
              }`}
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
            <UsMapPanel selectRegion={this.selectRegion} />
            <CitiesPanel
              regionId={region}
              selectCity={this.selectCity}
              selectedCities={selectedCities}
            />
          </div>
        ) : (
          <div>
            <br /> <br /> <br />
            <CitiesPanel
              regionId={6}
              selectCity={this.selectCity}
              selectedCities={selectedCities}
            />
          </div>
        )}

        <div style={{ height: 300, width: 300 }} />
      </div>
    );
  }
}

SelectOrigin.propTypes = {
  onNext: PropTypes.func,
  onBack: PropTypes.any
}; 

export default connect()(SelectOrigin);
