import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./cmpStyles.scss";

class Select extends React.Component {
  handleChange = () => {};

  render() {
    var { value, label, items, onChange, style } = this.props;

    return (
      <div className="form-wrap has-error" style={{ width: 200 }}>
        <label className="form-label-outside" htmlFor="subscribe-email">
          {label}
        </label>
        <select>
          <option />
          {items.map((item, i) => (
            <option value={item.value} key={i}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default connect()(Select);
