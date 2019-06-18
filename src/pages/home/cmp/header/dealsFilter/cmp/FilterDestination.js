import React from "react";
import { connect } from "react-redux";
import * as postActions from "../../../../actions/PostActions";
import PropTypes from "prop-types";
import "../dealsFilterStyles.scss";
import SwitchCmp from "../../../../../../cmp/SwitchCmp";

const regions = [
  "Europe", //2
  "Asia", //3
  "Oceania", //4
  "Caribean", //5
  "America", //6
  "Africa" //7
];

class FilterDestination extends React.Component {
  render() {
    var { regionNotIn, updateFilter } = this.props;

    return (
      <div className="height100 width100 filter-origin centered">
        <table cellPadding="10">
          <tbody>
            <tr>
              <td>
                <SwitchCmp
                  label={"Europe"}
                  value={regionNotIn.indexOf(2) == -1}
                  onChange={() => updateFilter("regionNotIn", 2)}
                  key={2}
                />
              </td>
              <td>
                <SwitchCmp
                  label={"Asia"}
                  value={regionNotIn.indexOf(3) == -1}
                  onChange={() => updateFilter("regionNotIn", 3)}
                  key={3}
                />
              </td>
            </tr>
            <tr>
              <td>
                <SwitchCmp
                  label={"Oceania"}
                  value={regionNotIn.indexOf(4) == -1}
                  onChange={() => updateFilter("regionNotIn", 4)}
                  key={4}
                />
              </td>
              <td>
                <SwitchCmp
                  label={"Caribean"}
                  value={regionNotIn.indexOf(5) == -1}
                  onChange={() => updateFilter("regionNotIn", 5)}
                  key={5}
                />
              </td>
            </tr>
            <tr>
              <td>
                <SwitchCmp
                  label={"America"}
                  value={regionNotIn.indexOf(6) == -1}
                  onChange={() => updateFilter("regionNotIn", 6)}
                  key={6}
                />
              </td>
              <td>
                <SwitchCmp
                  label={"Africa"}
                  value={regionNotIn.indexOf(7) == -1}
                  onChange={() => updateFilter("regionNotIn", 7)}
                  key={7}
                />
              </td>
            </tr>
          </tbody>
        </table>

        <br />

        <div className="form-wrap has-error" style={{ width: 300 }}>
          <label className="form-label-outside" htmlFor="subscribe-email">
            City or Country Name
          </label>
          <input
            className="form-input form-control-has-validation form-control-last-child"
            id="subscribe-email"
            onChange={e => updateFilter("cityOrCountry", e.target.value)}
          />
        </div>
      </div>
    );
  }
}

FilterDestination.propTypes = {
  updateFilter: PropTypes.func,
  regionNotIn: PropTypes.any
};

const mapStateToProps = ({ postReducer }) => {
  return {
    regionNotIn: postReducer.filters.regionNotIn || []
  };
};

export default connect(
  mapStateToProps,
  postActions
)(FilterDestination);
