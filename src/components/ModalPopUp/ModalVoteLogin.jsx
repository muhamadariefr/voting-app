import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

function ModalVoteLogin() {
  let navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="info" onClick={handleShow} className="btn-lg text-light">
        Vote <i class="fa-solid fa-check-to-slot"></i>
      </Button>

      <Modal show={show} onHide={handleClose} centered>
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
    </>
  );
}

export default ModalVoteLogin;
