import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalEdit() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    // Display alert when the "Yakin" button is clicked
    window.alert("Data Kandidat Berhasil dihapus");
    setShow(false);
  };

  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        <i class="fa-solid fa-trash-can"></i> Hapus
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Hapus Kandidat</Modal.Title>
        </Modal.Header>
        <Modal.Body>Anda yakin ingin menghapusnya?</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            <i class="fa-solid fa-xmark"></i> Batal
          </Button>
          <Button variant="primary" onClick={handleClose}>
            <i class="fa-solid fa-check"></i> Yakin
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalEdit;
