/* eslint-disable react/destructuring-assignment */
import React from "react";
import PropTypes from "prop-types";

/**
 *
 * @param {object} props all props
 *@function CustomButton
 * @returns {React.createElement} CustomButton
 */
export default function CustomButton(props) {
  return (
    <button onClick={props.handleClick} className={props.buttonClass}>
      {props.buttonValue}
    </button>
  );
}

CustomButton.propTypes = {
  buttonClass: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  buttonValue: PropTypes.string,
};

CustomButton.defaultProps = {
  buttonValue: "",
  handleClick: () => {},
};
