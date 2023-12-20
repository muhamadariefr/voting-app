import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalAdd() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add <i class="fa-solid fa-plus"></i>
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Tambah Kandidat</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="#" method="post">
            <input
              type="file"
              className="form-control mb-2"
              name="gambar"
              placeholder=""
            />
            <p>Nama Lengkap</p>
            <input
              type="text"
              className="form-control mb-2"
              name="namaKandidat"
              placeholder="Nama Kandidat"
            />
            <p>Tanggal Lahir</p>
            <input
              type="date"
              className="form-control"
              value="date"
            />
            <p>Status</p>
            <input
              type="text"
              className="form-control"
              value="Status Jabatan"
            />
            <p>Partai</p>
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

export default ModalAdd;
