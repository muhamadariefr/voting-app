import React, { useState } from "react";
import { Container, Row, Col, Modal, Button, Dropdown } from "react-bootstrap";
import { semuakandidat } from "../data/index";
import { useNavigate } from "react-router-dom";
import VoteModal from "../components/Modal/VoteModal";
import ThankYouModal from "../components/Modal/ThankYouModal";
import CandidateModal from "../components/Modal/CandidateModal";

const SecondPage = () => {
  let navigate = useNavigate();
  const [voteShow, setVoteShowSec] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const keyLogin = JSON.parse(localStorage.getItem("keyLogin"));
  console.log(keyLogin);

  const handleShowModal = (candidate) => {
    setSelectedCandidate(candidate);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const showVote = (candidate) => {
    if (keyLogin === 1) {
      setShowThankYouModal(true);
    } else {
      setSelectedCandidate(candidate);
      setVoteShowSec(true);
    }
  };

  const closeVote = () => {
    setVoteShowSec(false);
  };

  const closeThankYouModal = () => {
    setShowThankYouModal(false);
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
                    className="w-100 mb-3 rounded-top-4 animate__animated animate__fadeInUp"
                  />
                  <div className="star mb-2 px-3">
                    <i className={kandidat.star1}></i>
                    <i className={kandidat.star2}></i>
                    <i className={kandidat.star3}></i>
                    <i className={kandidat.star4}></i>
                    <i className={kandidat.star5}></i>
                  </div>
                  <h5 className="mb-1 px-3 pt-3">{kandidat.title}</h5>
                  <h6 className="px-3">{kandidat.jabatan}</h6>
                  <h6 className="px-3">{kandidat.born}</h6>
                  <div className="ket d-flex justify-content-between align-items-center px-3 pb-3 pt-3">
                    <p className="m-0 text-primary fw-semibold">
                      {kandidat.partai}
                    </p>
                    <div className="justify-content-between d-flex flex-row">
                      <button
                        className="btn btn-primary rounded-1 me-1"
                        onClick={() =>
                          keyLogin === 1
                            ? setShowThankYouModal(true)
                            : showVote(kandidat)
                        }
                      >
                        {kandidat.vote} <i className="fa-solid fa-thumbs-up"></i>
                      </button>
                      <button
                        className="btn btn-danger rounded-1 me-1"
                        onClick={() =>
                          keyLogin === 1
                            ? setShowThankYouModal(true)
                            : showVote(kandidat)
                        }
                      >
                        <i className="fa-solid fa-thumbs-down"></i>
                      </button>
                      <Dropdown>
                        <Dropdown.Toggle variant="light" className="">
                          <i className="fa-solid fa-ellipsis-vertical"></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item
                            href="#/action-1"
                            className="btn rounded-1"
                            onClick={() => handleShowModal(kandidat)}
                          >
                            <i className="fa-solid fa-circle-info"></i> Detail
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            <i className="fa-solid fa-share-nodes"></i> Bagikan
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            <i className="fa-regular fa-bookmark"></i> Simpan
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>      

     {/* Modal Login Dahulu */}
     <VoteModal show={voteShow} closeVote={closeVote} />
     
     {/* Modal "Thank You" */}
     <ThankYouModal show={showThankYouModal} closeThankYouModal={closeThankYouModal} />
     
     {/* Modal Candidate */}
     <CandidateModal show={showModal} handleCloseModal={handleCloseModal} selectedCandidate={selectedCandidate} />      
    </div>
  );
};

export default SecondPage;
