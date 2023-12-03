import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalEdit() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
      <i class="fa-solid fa-trash-can"></i>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Hapus Kandidat</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Anda yakin ingin menghapusnya?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Batal
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Yakin
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalEdit;