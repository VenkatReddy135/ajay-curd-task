/* eslint-disable react/destructuring-assignment */
import React from "react";
import PropTypes from "prop-types";

/**
 *
 * @param {object} props all props
 *@function CustomInput
 * @returns {React.createElement} CustomToaster
 */
export default function CustomInput(props) {
  return (
    <input
      type={props.inputType}
      placeholder={props.placeHolderText}
      onChange={props.handleOnChange}
      className={props.inputClass}
      value={props.inputValue}
    />
  );
}

CustomInput.propTypes = {
  inputType: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func,
  placeHolderText: PropTypes.string,
  inputClass: PropTypes.string,
  inputValue: PropTypes.any,
};

CustomInput.defaultProps = {
  inputType: "",
  placeHolderText: "",
};
