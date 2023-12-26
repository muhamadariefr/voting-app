// CandidateModal.js
import React from "react";
import { Modal } from "react-bootstrap";

const CandidateModal = ({ show, handleCloseModal, selectedCandidate }) => {
    return (
        <Modal show={show} onHide={handleCloseModal} centered>
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
                            <h5 className="fw-bold">{selectedCandidate?.title}</h5>
                            <p>{selectedCandidate?.jabatan}</p>
                            <p>{selectedCandidate?.born}</p>
                            <p>{selectedCandidate?.partai}</p>
                            <i
                                className={selectedCandidate?.star1}
                                style={{ color: "gold" }}
                            ></i>
                            <i
                                className={selectedCandidate?.star2}
                                style={{ color: "gold" }}
                            ></i>
                            <i
                                className={selectedCandidate?.star3}
                                style={{ color: "gold" }}
                            ></i>
                            <i
                                className={selectedCandidate?.star4}
                                style={{ color: "gold" }}
                            ></i>
                            <i
                                className={selectedCandidate?.star5}
                                style={{ color: "gold" }}
                            ></i>
                            <p style={{ fontSize: "14px" }}>Very Positive</p>
                        </div>
                        <p style={{ textAlign: "justify", fontSize: "14px" }}>
                            {selectedCandidate?.desc}
                        </p>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default CandidateModal;
