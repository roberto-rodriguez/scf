import React from "react";
import { connect } from "react-redux";
import * as postActions from "../../../../actions/PostActions";
import PropTypes from "prop-types";
import "../dealsFilterStyles.scss";
import Select from "../../../../../../cmp/Select";
import moment from "moment";

const holidays = [
  { name: "New Year's Day (Jan 1)", value: "01-01-2020" },
  { name: "Martin Luther King, Jr. Day (Jan 20)", value: "01-20-2020" },
  { name: "George Washington’s Birthday (Feb 17)", value: "02-17-2020" },
  { name: "Memorial Day (May 25)", value: "05-25-2020" },
  { name: "Independence Day (July 4)", value: "02-17-2019" },
  { name: "Labor Day (Sep 2)", value: "09-02-2019" },
  { name: "Columbus Day (Oct 14)", value: "10-14-2019" },
  { name: "Veterans Day (Nov 11)", value: "11-11-2019" },
  { name: "Thanksgiving Day (Nov 28)", value: "11-28-2019" },
  { name: "Christmas Day (Dic 25)", value: "12-25-2019" }
];

class FilterDates extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    var { fromMonth, toMonth, holiday, updateFilter } = this.props;

    var fromDates = [];
    var toDates = [];
    var currentDate = moment();

    for (var i = 0; i < 12; i++) {
      var futureMonth = moment(currentDate).add(i, "M");
      var futureMonthStart = moment(futureMonth).startOf("month");
      var futureMonthEnd = moment(futureMonth).endOf("month");
      fromDates.push({
        name: moment(futureMonthStart).format("MMMM-YYYY"),
        value: moment(futureMonthStart).format("MM-DD-YYYY")
      });
      toDates.push({
        name: moment(futureMonthEnd).format("MMMM-YYYY"),
        value: moment(futureMonthEnd).format("MM-DD-YYYY")
      });
    }

    return (
      <div
        className="height100 width100 filter-origin centered"
        style={{ paddingTop: 15 }}
      >
        <Select
          label={"From Month"}
          items={fromDates}
          value={fromMonth}
          onChange={value => updateFilter("fromMonth", value)}
        />
        <Select
          label={"To Month"}
          items={toDates}
          value={toMonth}
          onChange={value => updateFilter("toMonth", value)}
        />
        <Select
          label={"Around Holidays"}
          items={holidays}
          value={holiday}
          onChange={value => updateFilter("holiday", value)}
        />
      </div>
    );
  }
}

FilterDates.propTypes = {
  fromMonth: PropTypes.string,
  toMonth: PropTypes.string,
  holiday: PropTypes.string,
  updateFilter: PropTypes.func
};

const mapStateToProps = ({ postReducer }) => ({
  fromMonth: postReducer.filters.fromMonth,
  toMonth: postReducer.filters.toMonth,
  holiday: postReducer.filters.holiday
});

export default connect(
  mapStateToProps,
  postActions
)(FilterDates);
