import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalEdit() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSimpan = () => {
    // Add your save logic here

    // Show alert when saving is successful
    alert("Data kandidat berhasil diubah");

    // Close the modal
    handleClose();
  };

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        <i className="fa-solid fa-pen-to-square"></i> Edit       
      </Button>

      <Modal show={show} onHide={handleClose} centered>
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
              type="date"
              className="form-control mb-2"
              name="date"
              placeholder="Tanggal Lahir"
            />
            <input
              type="text"
              className="form-control mb-2"
              name="status"
              placeholder="Status"
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
            <i className="fa-solid fa-xmark"></i> Batal
          </Button>
          <Button variant="primary" onClick={handleSimpan}>
            <i className="fa-regular fa-floppy-disk"></i> Simpan
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalEdit;
