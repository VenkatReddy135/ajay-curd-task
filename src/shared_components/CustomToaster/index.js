/* eslint-disable react/destructuring-assignment */
import React from "react";
import PropTypes from "prop-types";
import { ToastContainer, Toast } from "react-bootstrap";

/**
 *
 * @param {object} props all props
 *@function CustomToaster
 * @returns {React.createElement} CustomToaster
 */
export default function CustomToaster(props) {
  return (
    <ToastContainer position="top-end" className="p-3">
      <Toast
        onClose={props.handleClose}
        show={props.showToast}
        bg="success"
        autohide
      >
        <Toast.Body className="text-white">
          {props.successMessage || null}
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

CustomToaster.propTypes = {
  showToast: PropTypes.bool.isRequired,
  handleClose: PropTypes.func,
  successMessage: PropTypes.string,
};

CustomToaster.defaultProps = {
  showToast: false,
};
