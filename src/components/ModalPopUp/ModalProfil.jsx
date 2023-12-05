import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const UserProfileModal = ({ show, handleClose, userData }) => {
    return (
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>User Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <img
              src="/profile.jpg"
              alt="Profile Image"
              className="img-fluid rounded-circle mb-3"
              style={{ width: "100px", height: "auto" }}
            />
          </div>
          <p>Username: {userData.username}</p>
          <p>Full Name: {userData.fullName}</p>
          <p>Date of Birth: {userData.dateOfBirth}</p>
          <p>Email: {userData.email}</p>
          <p>Status: {userData.status}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };