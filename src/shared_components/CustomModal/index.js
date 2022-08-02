/* eslint-disable react/destructuring-assignment */
import React from "react";
import PropTypes from "prop-types";
import { Modal, Button } from "react-bootstrap";

/**
 *
 * @param {object} props all props
 *@function SimpleModal
 * @returns {React.createElement} SimpleModal
 */
export default function SimpleModal(props) {
  return (
    <Modal
      show={props.showModal}
      onHide={props.handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Body>
        <h5>{props.modalContent}</h5>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          {props.closeText}
        </Button>
        <Button variant="primary" onClick={props.handleAction}>
          {props.actionText}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

SimpleModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  handleClose: PropTypes.func,
  modalContent: PropTypes.string,
  closeText: PropTypes.string,
  handleAction: PropTypes.func,
  actionText: PropTypes.string,
};

SimpleModal.defaultProps = {
  showModal: false,
};
