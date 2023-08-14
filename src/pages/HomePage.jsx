import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/img/voting.svg";
import { kandidatTerbaru, dataSwiper } from "../data/index";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import Faq from "../components/FaqComponent";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const HomePage = () => {
  let navigate = useNavigate();

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
              <button
                className="btn btn-primary btn-lg rounded-1 me-2 mb-xs-0 mb-2"
                onClick={() => navigate("/kandidat")}
              >
                Lihat Kandidat
              </button>
              <button className="btn btn-info text-light btn-lg rounded-1 me-2 mb-xs-0 mb-2">
                Voting Sekarang
              </button>
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
                    <button className="btn btn-primary rounded-1 text-light">
                      {kandidat.vote}
                    </button>
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
                    <p className="desc">{data.desc}</p>
                    <div className="people">
                      <img src={data.image} alt="" />
                      <div>
                        <h5 className="mb-1">{data.name}</h5>
                        <p className="m-0 fw-bold">{data.skill}</p>
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
    </div>
  );
};

export default HomePage;
