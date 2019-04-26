import React from "react"; 
import PropTypes from "prop-types";

class ToolBar extends React.Component {
  render() {
    var { avg, price, departureDate, arrivalDate } = this.props;

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
              <h6>
                {departureDate} — {arrivalDate}
              </h6>
            </td>
            <td>
              <div style={{ float: "right", maxWidth: 180 }}>
                <select
                  className="form-input select-filter"
                  data-placeholder="Select an option"
                  data-minimum-results-for-search="Infinity"
                  data-constraints="@Required"
                >
                  <option>Sort by Price</option>
                  <option value="2">Sort by Date</option>
                  <option value="3">Sort by Nights</option>
                </select>
              </div>

              <div
                style={{
                  float: "right",
                  maxWidth: 180,
                  marginRight: 10
                }}
              >
                <span
                  className="filter-button button button-icon button-icon-left button-no-shadow  button-sm"
                  href="#"
                >
                  <span className="icon fa fa-filter" />
                  <span>Filter</span>
                </span>
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
  departureDate: PropTypes.string,
  arrivalDate: PropTypes.string
};

export default ToolBar;
