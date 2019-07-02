import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
class ToolBar extends React.Component {
  render() {
    var { avg, price, startDate, endDate, onSortChange } = this.props;

    var formattedStartDate = startDate
      ? moment(startDate).format("MMM YYYY")
      : "";
    var formattedEndDate = endDate ? moment(endDate).format("MMM YYYY") : "";

    return (
      <table style={{ width: "100%" }}>
        <tbody>
          <tr>
            <td style={{ textAlign: "left" }}>
              <h5  className="font-18" style={{ color: "#ba0e6f" }}>
                {"Price: "}
                <span className="icon fa fa-dollar font-18" />
                <span>{price}</span>{" "}
                <span className="grey-text font-18">
                  (Regular +${avg})
                </span>
              </h5>
            </td>
            <td className="hide-for-mobile" style={{ textAlign: "center" }}>
              <h6>{`${formattedStartDate} — ${formattedEndDate}`}</h6>
            </td>
            <td>
              <div style={{ float: "right", maxWidth: 180 }}>
                <select
                  className="form-input select-filter font-18"
                  data-placeholder="Select an option"
                  data-minimum-results-for-search="Infinity"
                  data-constraints="@Required"
                  onChange={e => onSortChange(e.target.value)}
                >
                  <option value="price">Sort by Price</option>
                  <option value="departureDate">Sort by Date</option>
                  <option value="nights">Sort by Days</option>
                </select>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

ToolBar.propTypes = {
  avg: PropTypes.number,
  price: PropTypes.number,
  startDate: PropTypes.number,
  endDate: PropTypes.number,
  onSortChange: PropTypes.func
};

export default ToolBar;
