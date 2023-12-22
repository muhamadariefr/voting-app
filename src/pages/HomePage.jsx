import { Container, Row, Col, Modal, Button, Dropdown } from "react-bootstrap";
import HeroImage from "../assets/img/voting.svg";
import { kandidatTerbaru, dataSwiper } from "../data/index";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Faq from "../components/FaqComponent";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const HomePage = () => {
  let navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [voteShow, setvoteShow] = useState(false);

  const handleShowModal = (candidate) => {
    setSelectedCandidate(candidate);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Vote Show
  const showVote = (candidate) => {
    if (keyLogin === 1) {
      setShowThankYouModal(true);
    } else {
      setSelectedCandidate(candidate);
      setvoteShow(true);
    }
  };

  const closeVote = () => {
    setvoteShow(false);
  };

  const closeThankYouModal = () => {
    setShowThankYouModal(false);
  };

  let keyLogin;
  keyLogin = JSON.parse(localStorage.getItem("keyLogin"));
  console.log(keyLogin);

  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center pt-lg-5">
            <Col lg="6" data-aos="fade-down" data-aos-duration="1000">
              <h1 className="mb-4">
                Gerakan <br /> <span>Demokrasi Digital</span> <br /> Bersama
                Kami!
              </h1>
              <p className="mb-4">
                Pilih Kandidat Secara Online dengan Demokrasi Digital untuk Masa
                Depan yang Lebih Baik!
              </p>
              <Button
                variant="primary"
                onClick={() => navigate("/login")}
                className="me-2 btn-lg"
              >
                <i class="fa-solid fa-circle-play"></i> Mulai
              </Button>
              <Button
                variant="outline-primary"
                onClick={() => navigate("/Kandidat")}
                className="me-2 btn-lg"
              >
                <i class="fa-solid fa-eye"></i> Lihat Kandidat
              </Button>
            </Col>
            <Col
              lg="6"
              className="pt-lg-0 pt-5"
              data-aos="fade-down"
              data-aos-duration="1500"
            >
              <img src={HeroImage} alt="hero-img" />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="kandidat w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold ">Kandidat Terbaru</h1>
              <p className="text-center">
                Ayo berpartisipasi dalam pemilihan online dan pilihlah kandidat
                terbaik yang mampu mewujudkan perubahan positif bagi kita semua.
              </p>
            </Col>
          </Row>
          <Row>
            {kandidatTerbaru.map((kandidat) => {
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
                        {kandidat.vote} <i class="fa-solid fa-thumbs-up"></i>
                      </button>
                      <button
                        className="btn btn-danger rounded-1 me-1"
                        onClick={() =>
                          keyLogin === 1
                            ? setShowThankYouModal(true)
                            : showVote(kandidat)
                        }
                      >
                        <i class="fa-solid fa-thumbs-down"></i>
                      </button>
                      <Dropdown>
                        <Dropdown.Toggle variant="light" className="">
                          <i class="fa-solid fa-ellipsis-vertical"></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item
                            href="#/action-1"
                            className="btn rounded-1"
                            onClick={() => handleShowModal(kandidat)}
                          >
                            <i class="fa-solid fa-circle-info"></i> Detail
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            <i class="fa-solid fa-share-nodes"></i> Bagikan
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            <i class="fa-regular fa-bookmark"></i> Simpan
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
          <Row>
            <Col className="text-center">
              <button
                className="btn btn-primary rounded-1 btn-lg"
                onClick={() => navigate("/kandidat")}
              >
                Lihat Semua Kandidat
                <i className="fa-solid fa-arrow-right ms-3"></i>
              </button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="testimonial py-5">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold my-5">Testimonial</h1>
            </Col>
          </Row>
          <Row>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                992: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {dataSwiper.map((data) => {
                return (
                  <SwiperSlide key={data.id} className="shadow rounded-5">
                    <p style={{ textAlign: "center" }} className="desc">
                      {data.desc}
                    </p>
                    <div className="people">
                      <img src={data.image} alt="" />
                      <div>
                        <h5 className="mb-1">{data.name}</h5>
                        <p className="m-0">{data.skill}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Row>
        </Container>
      </div>
      <Faq />

      {/* Modal Login Dahulu */}
      <Modal show={voteShow} onHide={closeVote} centered>
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
      
      {/* Modal "Thank You" */}
      <Modal show={showThankYouModal} onHide={closeThankYouModal} centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <i
              className="fa-solid fa-circle-check"
              style={{ fontSize: "100px", color: "green" }}
            ></i>
            <h1 className="fw-bold p-2">Terimakasih!</h1>
            <p style={{ fontSize: "14px" }}>Anda sudah melakukan Voting.</p>
          </div>
        </Modal.Body>
      </Modal>
      
      {/* Modal Candidate */}
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
    </div>
  );
};

export default HomePage;
