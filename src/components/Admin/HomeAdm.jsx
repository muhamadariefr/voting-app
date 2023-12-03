import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import DataPie from "../Chart/PieChart";
import DataLine from "../Chart/LineChart";
// import DataBar from "../Chart/BarChart";
// import DataArea from "../Chart/AreaChart";
function HomeAdm() {
    return (
        <div className="p-2">
            <div className="container-fluid">
                <div className="row g-3 my-2">
                    <div className="col-md-3">
                        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2 fw-bold text-primary">500+</h3>
                                <p className="fs-5">Kandidat</p>
                            </div>

                            <i className="fa-solid fa-users fs-1 primary-text border rounded secondary-bg p-3"></i>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2 fw-bold text-primary">1500+</h3>
                                <p className="fs-5">Pemilih</p>
                            </div>
                            <i className="fa-solid fa-user fs-1 primary-text border rounded secondary-bg p-3"></i>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2 fw-bold text-primary">8700+</h3>
                                <p className="fs-5">Voting</p>
                            </div>
                            <i className="fa-sharp fa-solid fa-check-to-slot fs-1 primary-text border rounded secondary-bg p-3"></i>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2 fw-bold text-primary">85%</h3>
                                <p className="fs-5">Real Time</p>
                            </div>
                            <i className="fas fa-chart-line fs-1 primary-text border rounded secondary-bg p-3"></i>
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
                    {/* <Col md={6} className="pt-2 pb-2">
                        <Card>
                            <Card.Body>
                                <i class="fa-solid fa-circle-user px-2 py-2"></i>
                                <span className="fw-bold fs-5">INFORMASI AKUN</span>
                                <hr />
                                <DataBar />
                            </Card.Body>
                        </Card>
                    </Col> */}
                    <Col md={4} className="pt-2 pb-5">
                        <Card>
                            <Card.Body>
                                <i className="fa-solid fa-chart-simple px-2 py-2"></i>
                                <span className="fw-bold fs-5">HASIL PEMILIHAN</span>
                                <hr />
                                <DataPie />
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* <Col md={6} className="pt-2 pb-2">
                        <Card>
                            <Card.Body>
                                <i class="fa-solid fa-chart-simple px-2 py-2"></i>
                                <span className="fw-bold fs-5">JUMLAH KANDIDAT</span>
                                <hr />
                                <div style={{ margin: "0 auto" }}>
                                    <DataArea />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col> */}
                </Row>
            </div>
        </div>
    );
}

export default HomeAdm;
