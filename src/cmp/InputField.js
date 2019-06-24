import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./cmpStyles.scss";

class InputField extends React.Component {
  render() {
    var { name, value, label, onChange, errorsObj, style, type } = this.props;
    //errorsObj ->  {fieldName: errorMessage}

    return (
      <div className="form-wrap has-error" style={{ ...style }}>
        <label className="form-label-outside">{label}</label>
        <input
          value={value}
          onChange={evt => onChange(name, evt.target.value)}
          className="form-input form-input-gray form-control-has-validation"
          type={type || "text"}
          name={name}
          data-constraints="@Required"
        />
        {errorsObj && errorsObj[name] && (
          <span className="form-validation">{errorsObj[name]}</span>
        )}
      </div>
    );
  }
}

InputField.propTypes = {
  value: PropTypes.any,
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  errorsObj: PropTypes.any,
  onChange: PropTypes.func,
  style: PropTypes.any
};

export default connect()(InputField);
