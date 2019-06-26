import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Switch from "react-switch";

class SwitchCmp extends React.Component {
  handleChange = () => {};

  render() {
    var { value, label, onChange, style } = this.props;

    return (
      <div
        style={{ height: 30, ...style }}
        className={"cursor-pointer"}
        onClick={onChange}
      >
        <Switch
          onChange={() => {}}
          checked={value || false}
          onColor={"#1f2746"}
        />
        <h5 className={"switch-label"}>
          {label}
        </h5>
      </div>
    );
  }
}

SwitchCmp.propTypes = {
  label: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func,
  style: PropTypes.any
};

export default connect()(SwitchCmp);
