import React from "react";
import PropTypes from "prop-types";

const TextField = ({ value, onChange, text, fieldName }) => (
  <div className="text-field">
    <label htmlFor={fieldName} className="text-field__label">
      {text}
      <br />
      <textarea value={value} onChange={onChange} />
    </label>
  </div>
);

TextField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default TextField;
