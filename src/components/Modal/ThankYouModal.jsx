// ThankYouModal.js
import React from "react";
import { Modal } from "react-bootstrap";

const ThankYouModal = ({ show, closeThankYouModal }) => {
  return (
    <Modal show={show} onHide={closeThankYouModal} centered>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="text-center">
          <i
            className="fa-solid fa-circle-check"
            style={{ fontSize: "100px", color: "green" }}
          ></i>
          <h1 className="fw-bold p-2">Terimakasih!</h1>
          <p style={{ fontSize: "14px" }}>Anda sudah melakukan Voting.</p>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ThankYouModal;
