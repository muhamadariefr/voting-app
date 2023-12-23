import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalSetAdm() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    // Display an alert when the "Simpan" button is clicked
    alert("Data profil berhasil diubah");
    setShow(false);
  };

  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        <i className="fa-solid fa-gear"></i> Setting
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Setting Admin</Modal.Title>
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
            <h5>
              <input type="file" className="form-control" />
            </h5>
          </div>
          <div className="detail-akun">
            <p>Username:</p>
            <input
              type="text"
              className="form-control"
              value="Masukkan Username"
            />
          </div>
          <div className="detail-akun">
            <p>Nama Lengkap:</p>
            <input
              type="text"
              className="form-control"
              value="Masukkan Nama Lengkap"
            />
          </div>
          <div className="detail-akun">
            <p>Tanggal Lahir:</p>
            <input
              type="date"
              className="form-control"
              value="date"
            />
          </div>
          <div className="detail-akun">
            <p>Email:</p>
            <input
              type="text"
              className="form-control"
              value="Masukkan Email"
            />
          </div>
          <div className="detail-akun">
            <p>Status:</p>
            <input
              type="text"
              className="form-control"
              value="Admin"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            <i className="fa-solid fa-xmark"></i> Batal
          </Button>
          <Button variant="primary" onClick={handleClose}>
            <i className="fa-regular fa-floppy-disk"></i> Simpan
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalSetAdm;
