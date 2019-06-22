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
              <h5 style={{ color: "#ba0e6f" }}>
                {"Price: "}
                <span style={{ fontSize: 18 }} className="icon fa fa-dollar" />
                <span>{price}</span>{" "}
                <span style={{ color: "grey", fontSize: 18 }}>
                  (Regular +${avg})
                </span>
              </h5>
            </td>
            <td style={{ textAlign: "center" }}>
              <h6>{`${formattedStartDate} — ${formattedEndDate}`}</h6>
            </td>
            <td>
              <div style={{ float: "right", maxWidth: 180 }}>
                <select
                  className="form-input select-filter"
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
