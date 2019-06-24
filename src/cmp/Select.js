import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./cmpStyles.scss";

class Select extends React.Component {
  render() {
    var { value, label, items, onChange, style } = this.props;

    return (
      <div className="margin-top-10" style={{ width: 200 }}>
        <label className="form-label-outside">{label}</label>
        <select onChange={e => onChange(e.target.value)} defaultValue={value}>
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

Select.propTypes = {
  value: PropTypes.any,
  label: PropTypes.string,
  items: PropTypes.any,
  onChange: PropTypes.func,
  style: PropTypes.any
};

export default connect()(Select);
