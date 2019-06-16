import React from "react";
import { connect } from "react-redux";
import * as postActions from "../../../../actions/PostActions";
import PropTypes from "prop-types";
import "../dealsFilterStyles.scss";
import Select from "../../../../../../cmp/Select";

const months = [
  { name: "January", value: 0 },
  { name: "February", value: 1 },
  { name: "March", value: 2 },
  { name: "April", value: 3 },
  { name: "May", value: 4 },
  { name: "June", value: 5 },
  { name: "Jaly", value: 6 },
  { name: "August", value: 7 },
  { name: "September", value: 8 },
  { name: "October", value: 9 },
  { name: "November", value: 10 },
  { name: "December", value: 11 }
];

const hollydays = [
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
    var { fromMonth, toMonth, hollyday } = this.pops;

    return (
      <div
        className="height100 width100 filter-origin centered"
        style={{ paddingTop: 15 }}
      >
        <Select label={"From Month"} items={months} style={{ marginTop: 25 }} />
        <Select label={"To Month"} items={months} style={{ marginTop: 25 }} />
        <Select
          label={"Around Hollydays"}
          items={hollydays}
          style={{ marginTop: 25 }}
        />
      </div>
    );
  }
}

FilterDates.propTypes = {
  fromMonth: PropTypes.number,
  toMonth: PropTypes.number,
  hollyday: PropTypes.number
};

const mapStateToProps = ({ postReducer }) => ({
  fromMonth: postReducer.fromMonth,
  toMonth: postReducer.toMonth,
  hollyday: postReducer.hollyday
});

export default connect(mapStateToProps)(FilterDates);
