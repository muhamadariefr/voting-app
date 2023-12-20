import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalEdit() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        <i className="fa-solid fa-circle-user"></i> Profile
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Data Profil</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <img
              src="/admin.png"
              alt="Profile Image"
              className="img-fluid rounded-circle mb-3"
              style={{ width: "100px", height: "auto" }}
            />
          </div>
          <div className="detail-akun">
            <p>Username:</p>
            <h5>Admin1</h5>
          </div>
          <div className="detail-akun">
            <p>Nama Lengkap:</p>
            <h5>Ellen Leoniz</h5>
          </div>
          <div className="detail-akun">
            <p>Tanggal Lahir:</p>
            <h5>10-01-1995</h5>
          </div>
          <div className="detail-akun">
            <p>Email:</p>
            <h5>admin@gmail.com</h5>
          </div>
          <div className="detail-akun">
            <p>Status:</p>
            <h5>Administrator</h5>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalEdit;
