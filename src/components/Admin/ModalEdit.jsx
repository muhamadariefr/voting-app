import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalEdit() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        <i class="fa-solid fa-pen-to-square"></i>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Kandidat</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="#" method="post">
            <input
              type="file"
              className="form-control mb-2"
              name="gambar"
              placeholder=""
            />
            <input
              type="text"
              className="form-control mb-2"
              name="namaKandidat"
              placeholder="Nama Kandidat"
            />
            <input
              type="text"
              className="form-control mb-2"
              name="namaPartai"
              placeholder="Nama Partai"
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            <i class="fa-solid fa-xmark"></i> Batal
          </Button>
          <Button variant="primary" onClick={handleClose}>
            <i class="fa-regular fa-floppy-disk"></i> Simpan
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalEdit;
