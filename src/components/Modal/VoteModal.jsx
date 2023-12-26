// VoteModal.js
import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const VoteModal = ({ show, closeVote }) => {
  let navigate = useNavigate();

  return (
    <Modal show={show} onHide={closeVote} centered>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="text-center">
          <i
            className="fa-solid fa-circle-exclamation"
            style={{ fontSize: "100px", color: "red" }}
          ></i>
          <h1 className="fw-bold p-2">Login Dulu!</h1>
          <p style={{ fontSize: "14px" }}>
            Untuk mengakses halaman ini, kamu wajib login terlebih dahulu
          </p>
          <Button variant="primary" onClick={() => navigate("/login")}>
            Login <i class="fa-solid fa-circle-arrow-right"></i>
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default VoteModal;
