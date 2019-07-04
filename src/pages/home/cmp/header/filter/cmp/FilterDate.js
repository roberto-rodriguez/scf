import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import moment from "moment";
import * as postActions from "../../../../actions/PostActions";
import * as utilDates from "../../../../../../utils/dates";

class FilterDate extends React.Component {
  render() {
    var { name, updateFilter, val } = this.props;

    var title = name == "fromMonth" ? "Depart" : "Return";

    var bck = "";

    if (val) {
      title = utilDates.formatStringDate(val, "MMM, YYYY", "MM-DD-YYYY");
      bck = " pink-bck";
    }

    var months = this.buildList(name);

    var list = [
      <label key={-1} style={{ padding: 10 }} className="form-label-outside">
        {name == "fromMonth" ? "Departs on or after:" : "Return on or before:"}
      </label>,
      <hr key={0} style={{ marginTop: 0, marginBottom: 7 }} />
    ];

    list.push(
      <li
        key={"li-0"}
        className={"pink-text"}
        onClick={() => updateFilter(name, null)}
      >
        {"Any Date"}
      </li>
    );

    for (var i = 0; i < months.length; i++) {
      list.push(<hr key={"hr-" + i} className={"filter-date-hr"} />);
      list.push(
        (month => (
          <li key={"li-" + i} onClick={() => updateFilter(name, month.value)}>
            {month.name}
          </li>
        ))(months[i])
      );
    }

    list.push(<hr key={"hr-20"} className={"filter-date-hr"} style={{marginBottom: 0 }} />);

    return (
      <li onClick={this.doClick} className="toggle-menu-wrapper">
        <span className={"region-link" + bck}>{title}</span>

        <ul style={{ width: 200 }}>{list}</ul>
      </li>
    );
  }

  month = m => (
    <span key={m.name}>
      <hr />
      <li>{m.name}</li>
    </span>
  );

  buildList = name => {
    var dates = [];
    var currentDate = moment();

    for (var i = 0; i < 12; i++) {
      var futureMonth = moment(currentDate).add(i, "M");

      if (name == "fromMonth") {
        var futureMonthStart = moment(futureMonth).startOf("month");

        dates.push({
          name: moment(futureMonthStart).format("MMMM-YYYY"),
          value: moment(futureMonthStart).format("MM-DD-YYYY")
        });
      } else {
        var futureMonthEnd = moment(futureMonth).endOf("month");

        dates.push({
          name: moment(futureMonthEnd).format("MMMM-YYYY"),
          value: moment(futureMonthEnd).format("MM-DD-YYYY")
        });
      }
    }

    return dates;
  };
}

FilterDate.propTypes = {
  name: PropTypes.string,
  val: PropTypes.string,
  isDepart: PropTypes.bool,
  updateFilter: PropTypes.func
};

const mapStateToProps = ({ postReducer }, props) => ({
  val: postReducer.filters[props.name],
  holiday: postReducer.filters.holiday
});

export default connect(
  mapStateToProps,
  postActions
)(FilterDate);
