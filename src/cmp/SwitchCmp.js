import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Switch from "react-switch";

class SwitchCmp extends React.Component {
  handleChange = () => {};

  render() {
    var { value, label, onChange, style } = this.props;

    return (
      <table
        className="cursor-pointer switch-cmp"
        width="100%" 
        onClick={onChange}
        style={{ ...style }}
      >
        <tbody>
          <tr>
            <td width="25%">
              <Switch
                onChange={() => {}}
                checked={value || false}
                onColor={"#1f2746"}
              />
            </td>
            <td width="75%" style={{ textAlign: "left" }}>
              {" "}
              {label}
            </td>
          </tr>
        </tbody>
      </table>
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
