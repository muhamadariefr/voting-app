import React from "react";
import NavAdm from "./NavAdm";
import Sidebar from "./Sidebar";
import { Row, Col, Card, Table } from "react-bootstrap";
function Users() {
    return (
        <div className="d-flex">
            <div className="w-auto">
                <Sidebar />
            </div>
            <div className="col">
                <NavAdm />
                <div className="container">
                    <Row>
                        <Col className="pemilih p-2">
                            <Card>
                                <Card.Body>
                                    <i class="fa-solid fa-user px-2 py-2"></i>
                                    <span className="fw-bold fs-5">DAFTAR PEMILIH</span>
                                    {/* <h5>DAFTAR PEMILIH</h5> */}
                                    <hr />
                                    <div className="table-responsive">
                                        <Table striped bordered>
                                            <thead>
                                                <tr>
                                                    <th>Nama</th>
                                                    <th className="d-none d-md-table-cell">Email</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>John Doe</td>
                                                    <td className="d-none d-md-table-cell">
                                                        johndoe@example.com
                                                    </td>
                                                    <td className="text-success">
                                                        Sudah Memilih <i className="fa fa-check-circle"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Jane Smith</td>
                                                    <td className="d-none d-md-table-cell">
                                                        janesmith@example.com
                                                    </td>
                                                    <td className="text-success">
                                                        Sudah Memilih <i className="fa fa-check-circle"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Michael Johnson</td>
                                                    <td className="d-none d-md-table-cell">
                                                        michaelj@example.com
                                                    </td>
                                                    <td className="text-danger">
                                                        Belum Memilih <i className="fa fa-times-circle"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Sarah Lee</td>
                                                    <td className="d-none d-md-table-cell">
                                                        sarahlee@example.com
                                                    </td>
                                                    <td className="text-danger">
                                                        Belum Memilih <i className="fa fa-times-circle"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>John Doe</td>
                                                    <td className="d-none d-md-table-cell">
                                                        johndoe@example.com
                                                    </td>
                                                    <td className="text-success">
                                                        Sudah Memilih <i className="fa fa-check-circle"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>John Doe</td>
                                                    <td className="d-none d-md-table-cell">
                                                        johndoe@example.com
                                                    </td>
                                                    <td className="text-success">
                                                        Sudah Memilih <i className="fa fa-check-circle"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>John Doe</td>
                                                    <td className="d-none d-md-table-cell">
                                                        johndoe@example.com
                                                    </td>
                                                    <td className="text-success">
                                                        Sudah Memilih <i className="fa fa-check-circle"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>John Doe</td>
                                                    <td className="d-none d-md-table-cell">
                                                        johndoe@example.com
                                                    </td>
                                                    <td className="text-success">
                                                        Sudah Memilih <i className="fa fa-check-circle"></i>
                                                    </td>
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

export default Users;
