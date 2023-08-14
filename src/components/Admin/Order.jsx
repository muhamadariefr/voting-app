import React from "react";
import NavAdm from "./NavAdm";
import Sidebar from "./Sidebar";
import { Row, Col, Card, Table } from "react-bootstrap";
function Order() {
    return (
        <div className="d-flex">
            <div className="w-auto">
                <Sidebar />
            </div>
            <div className="col">
                <NavAdm />
                <div className="container">
                    <Row>
                        <Col className="kandidat p-2">
                            <Card>
                                <Card.Body>
                                    <i class="fa-solid fa-users px-2 py-2"></i>
                                    <span className="fw-bold fs-5">DAFTAR KANDIDAT</span>
                                    {/* <h5>DAFTAR KANDIDAT</h5> */}
                                    <hr />
                                    <div className="table-responsive">
                                        <Table striped bordered>
                                            <thead>
                                                <tr>
                                                    <th>No.</th>
                                                    <th>Nama Kandidat</th>
                                                    <th className="d-none d-md-table-cell">Partai Politik</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>John Doe</td>
                                                    <td className="d-none d-md-table-cell">Partai A</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Jane Smith</td>
                                                    <td className="d-none d-md-table-cell">Partai B</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Michael Johnson</td>
                                                    <td className="d-none d-md-table-cell">Partai C</td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>Sarah Lee</td>
                                                    <td className="d-none d-md-table-cell">Partai D</td>
                                                </tr>
                                                <tr>
                                                    <td>5</td>
                                                    <td>Robert Williams</td>
                                                    <td className="d-none d-md-table-cell">Partai E</td>
                                                </tr>
                                                <tr>
                                                    <td>6</td>
                                                    <td>Robert Williams</td>
                                                    <td className="d-none d-md-table-cell">Partai E</td>
                                                </tr>
                                                <tr>
                                                    <td>7</td>
                                                    <td>Robert Williams</td>
                                                    <td className="d-none d-md-table-cell">Partai E</td>
                                                </tr>
                                                <tr>
                                                    <td>8</td>
                                                    <td>Robert Williams</td>
                                                    <td className="d-none d-md-table-cell">Partai E</td>
                                                </tr>
                                            </tbody>
                                        </Table>
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

export default Order;
