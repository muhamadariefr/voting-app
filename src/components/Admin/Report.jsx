import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import DataBar from "../Chart/BarChart";
import DataArea from "../Chart/AreaChart";
import NavAdm from "./NavAdm";
import Sidebar from "./Sidebar";
function Report() {
    return (
        <div className="d-flex">
            <div className="w-auto">
                <Sidebar />
            </div>
            <div className="col">
                <NavAdm />
                <div className="container">
                    <Row>
                        <Col md={6} className="pt-2 pb-2">
                            <Card>
                                <Card.Body>
                                    <i class="fa-solid fa-circle-user px-2 py-2"></i>
                                    <span className="fw-bold fs-5">INFORMASI AKUN</span>
                                    <hr />
                                    <DataBar />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} className="pt-2 pb-2">
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
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default Report;
