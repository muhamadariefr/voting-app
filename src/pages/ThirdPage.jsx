import { Container, Row, Col } from "react-bootstrap";
import { testimonial } from "../data/index";

import Faq from "../components/FaqComponent";

const ThirdPage = () => {
  return (
    <div className="testimonial-page">
      <div className="testimonial">
        <Container>
          <Row className="mb-5" data-aos="fade-down" data-aos-duration="1000">
            <Col>
              <h1 className="text-center fw-bold">Semua Testimonial</h1>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
                iusto.
              </p>
            </Col>
          </Row>
          <Row
            className="row-cols-lg-3 row-cols-1"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            {testimonial.map((data) => {
              return (
                <Col key={data.id} className="mb-5">
                  <p className="desc shadow p-5">{data.desc}</p>
                  <div className="people">
                    <img src={data.image} alt="" />
                    <div>
                      <h5 className="mb-1">{data.name}</h5>
                      <p className="m-0 fw-bold">{data.skill}</p>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
      <Faq />
    </div>
  );
};

export default ThirdPage;
