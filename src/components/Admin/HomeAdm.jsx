import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import DataPie from "../Chart/PieChart";
import DataLine from "../Chart/LineChart";

function HomeAdm() {
  return (
    <div className="p-2">
      <div className="container-fluid">
        <div className="row g-3 my-2">
          <div className="col-md-3">
            <div className="p-2 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div className="align-items-start" style={{ width: "50%" }}>
                <h3 className="fs-4 fw-bold text-primary">500+</h3>
                <p className="fs-5">Kandidat</p>
              </div>
              <div className="justify-content-end">
                <i className="fa-solid fa-users fs-4 primary-text border rounded secondary-bg p-3"></i>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="p-2 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div className="align-items-start" style={{ width: "50%" }}>
                <h3 className="fs-4 fw-bold text-primary">1500+</h3>
                <p className="fs-5">Pengguna</p>
              </div>
              <div className="justify-content-end">
                <i className="fa-solid fa-user-group fs-4 primary-text rounded secondary-bg p-3"></i>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="p-2 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div className="align-items-start" style={{ width: "50%" }}>
                <h3 className="fs-4 fw-bold text-primary">8000+</h3>
                <p className="fs-5">Voting</p>
              </div>
              <div className="justify-content-end">
                <i className="fa-sharp fa-solid fa-check-to-slot fs-4 primary-text rounded secondary-bg p-3"></i>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="p-2 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div className="align-items-start" style={{ width: "50%" }}>
                <h3 className="fs-4 fw-bold text-primary">100%</h3>
                <p className="fs-5">Realtime</p>
              </div>
              <div className="justify-content-end">
                <i className="fas fa-chart-line fs-4 primary-text rounded secondary-bg p-3"></i>
              </div>
            </div>
          </div>
        </div>
        <Row>
          <Col md={8} className="pt-2 pb-2">
            <Card>
              <Card.Body>
                <i className="fa-solid fa-circle-info px-2 py-2"></i>
                <span className="fw-bold fs-5">INFORMASI PEMILIHAN</span>
                <hr />
                <DataLine />
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="pt-2 pb-5">
            <Card>
              <Card.Body>
                <i className="fa-solid fa-chart-simple px-2 py-2"></i>
                <span className="fw-bold fs-5">HASIL SEMENTARA</span>
                <hr />
                <DataPie />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default HomeAdm;
