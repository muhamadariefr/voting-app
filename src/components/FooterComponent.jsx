import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5">
            <h3 className="fw-bold">
              Voting<span className="text-primary">App</span>
            </h3>
            <p className="desc">
              Demokrasi Tanpa Batas <br /> Pemilihan Online untuk Semua
              Generasi!
            </p>
            <div className="no mb-1 mt-4">
              <Link
                className="text-decoration-none"
                to="https://whatsapp.com"
                target="_blank"
              >
                <i className="fa-brands fa-whatsapp"></i>
                <p className="m-0">+62 123-4567-8910</p>
              </Link>
            </div>
            <div className="mail">
              <Link
                className="text-decoration-none"
                to="https://gmail.com"
                target="_blank"
              >
                <i className="fa-regular fa-envelope"></i>
                <p className="m-0">email@gmail.com</p>
              </Link>
            </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
            <h5 className="fw-bold">Menu</h5>
            <Link to="">Home</Link>
            <Link to="kandidat">Kandidat</Link>
            <Link to="testimonial">Testimonial</Link>
            <Link to="faq">FAQ</Link>
            <Link to="syaratketen">Syarat & Ketentuan</Link>
          </Col>
          <Col lg="4" className="mt-lg-0 mt-5">
            <h5 className="fw-bold mb-3">Subscribe untuk info Menarik</h5>
            <div className="subscribes">
              <input type="text" placeholder="Subscribe..." />
              <button className="btn btn-primary rounded-end rounded-0">
                Subscribe
              </button>
            </div>
            <div className="social mt-3">
              <a href="https://instagram.com/muhamadariefr" target="_blank">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://facebook.com/" target="_blank">
                <i className="fa-brands fa-facebook"></i>{" "}
              </a>
              <a href="https://github.com/muhamadariefr" target="_blank">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://linkedin.com/" target="_blank">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center px-md-0 px-3">
              &copy; {new Date().getFullYear()}{" "}
              <span className="fw-bold">
                Voting<span className="text-primary">App</span>{" "}
              </span>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
