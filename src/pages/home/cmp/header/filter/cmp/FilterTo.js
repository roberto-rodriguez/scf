import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import SwitchCmp from "../../../../../../cmp/SwitchCmp";
import InputField from "../../../../../../cmp/InputField";
import * as postActions from "../../../../actions/PostActions";

const regions = [
  { id: 2, name: "Europe" },
  { id: 3, name: "Asia" },
  { id: 4, name: "Oceania" },
  { id: 5, name: "Caribean" },
  { id: 6, name: "Central America" },
  { id: 8, name: "South America" },
  { id: 7, name: "Africa" }
];
class FilterTo extends React.Component {
  render() {
    var { regionNotIn, cityOrCountry, updateFilter } = this.props;

    var title = "To Anywhere";
    var bck = "";

    if (cityOrCountry) {
      title = cityOrCountry;
      bck = " pink-bck";
    } else {
      if (regionNotIn.length > 0) {
        bck = " pink-bck";
      }
    }

    return (
      <li onClick={this.doClick} className="toggle-menu-wrapper">
        <span className={"region-link" + bck}>{title}</span>

        <ul>
          <li style={{ padding: 10 }}>
            <InputField
              label="City or Country contains"
              name={"cityOrCountry"}
              value={cityOrCountry}
              onChange={updateFilter}
            />
          </li>
          <hr />
          <label className="form-label-outside">Or Select by Region</label>
          {regions.map((region, i) => (
            <li key={i}>
              <SwitchCmp
                label={region.name}
                value={regionNotIn.indexOf(region.id) == -1}
                onChange={() => updateFilter("regionNotIn", region.id)}
              />
            </li>
          ))}

          <li style={{ display: "inline-flex", width: "100%" }}>
            <span
              onClick={this.selectAll}
              className={"form-label-outside pink-text float-left bold-text"}
            >
              {"Select All"}
            </span>
            <span
              onClick={this.deselectAll}
              className={"form-label-outside pink-text float-right bold-text"}
            >
              {"Deselect All"}
            </span>
          </li>
        </ul>
      </li>
    );
  }

  selectAll = () => this.props.updateFilter("regionNotIn", [], true);
  deselectAll = () =>
    this.props.updateFilter(
      "regionNotIn",
      regions.map(region => region.id),
      true
    );
}

FilterTo.propTypes = {
  updateFilter: PropTypes.func,
  cityOrCountry: PropTypes.string,
  regionNotIn: PropTypes.any
};

const mapStateToProps = ({ postReducer }) => ({
  regionNotIn: postReducer.filters.regionNotIn || [],
  cityOrCountry: postReducer.filters.cityOrCountry
});

export default connect(
  mapStateToProps,
  postActions
)(FilterTo);
