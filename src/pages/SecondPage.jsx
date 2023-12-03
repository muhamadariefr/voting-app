import React, { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { semuakandidat } from "../data/index";
import Faq from "../components/FaqComponent";

const SecondPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const handleShowModal = (candidate) => {
    setSelectedCandidate(candidate);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="kandidat-page">
      <div className="kandidat min-vh-100">
        <Container>
          <Row data-aos="fade-down" data-aos-duration="1000">
            <Col>
              <h1 className="fw-bold text-center">Semua Kandidat</h1>
              <p className="text-center">
                Setiap kandidat memiliki visi yang kuat, pengalaman yang luas,
                dan komitmen yang tinggi untuk menjalankan tugas dengan
                integritas dan kebijaksanaan. Jelajahi profil mereka dan temukan
                kandidat yang paling sesuai dengan nilai-nilai dan aspirasi
                Anda. Suara Anda penting dalam membentuk masa depan yang lebih
                baik.
              </p>
            </Col>
          </Row>
          <Row data-aos="fade-up" data-aos-duration="1500">
            {semuakandidat.map((kandidat) => {
              return (
                <Col key={kandidat.id} className="shadow rounded-4">
                  <img
                    src={kandidat.image}
                    alt="unsplash.com"
                    className="w-100 mb-3 rounded-top-4"
                  />
                  <div className="star mb-2 px-3">
                    <i className={kandidat.star1}></i>
                    <i className={kandidat.star2}></i>
                    <i className={kandidat.star3}></i>
                    <i className={kandidat.star4}></i>
                    <i className={kandidat.star5}></i>
                  </div>
                  <h5 className="mb-1 px-3 pt-3">{kandidat.title}</h5>
                  <h6 className="px-3 ">{kandidat.jabatan}</h6>
                  <h6 className="px-3 ">{kandidat.born}</h6>
                  <div className="ket d-flex justify-content-between align-items-center px-3 pb-3 pt-3">
                    <p className="m-0 text-primary fw-bold">
                      {kandidat.partai}
                    </p>
                    <div>
                      <button
                        className="btn btn-primary rounded-1 me-2"
                        onClick={() => handleShowModal(kandidat)}
                      >
                        {kandidat.vote}
                      </button>
                      <button
                        className="btn btn-info rounded-1"
                        onClick={() => handleShowModal(kandidat)}
                      >
                        About
                      </button>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
      <Faq />

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Data Kandidat</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <img
                  src={selectedCandidate?.image}
                  alt={selectedCandidate?.title}
                  className="w-100 mb-3 rounded"
                />
              </div>
              <div className="col-md-6">
                <h5>{selectedCandidate?.title}</h5>
                <p>{selectedCandidate?.jabatan}</p>
                <p>{selectedCandidate?.born}</p>
                <p>{selectedCandidate?.partai}</p>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SecondPage;
