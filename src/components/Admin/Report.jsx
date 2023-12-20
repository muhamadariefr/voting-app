import React, { useEffect, useState } from "react";
import { Row, Col, Card, Table } from "react-bootstrap";
import DataBar from "../Chart/BarChart";
import DataArea from "../Chart/AreaChart";
import NavAdm from "./NavAdm";
import Sidebar from "./Sidebar";

function Report() {
    const [toggle, setToggle] = useState(false);

    function Toggle() {
        setToggle(!toggle);
    }

    useEffect(() => {
        const handleSize = () => {
            if (window.innerWidth > 768) {
                setToggle(false);
            }
        };
        window.addEventListener("resize", handleSize);

        return () => {
            window.removeEventListener("resize", handleSize);
        };
    });

    // Dummy data for the table
    const tableData = [
        { province: "DKI Jakarta", totalVoters: 10679951 },
        { province: "Jawa Barat", totalVoters: 49940000 },
        { province: "Jawa Tengah", totalVoters: 34550522 },
        { province: "Jawa Timur", totalVoters: 39740125 },
        { province: "Bali", totalVoters: 4290021 },
    ];
    const candidateData = [
        {
            name: "Anies Baswedan",
            totalVoting: 87616000,
            rating: 84,
            description: "Very Positive",
        },
        {
            name: "Prabowo Subianto",
            totalVoting: 104044000,
            rating: 92,
            description: "Very Positive",
        },
        {
            name: "Ganjar Pranowo",
            totalVoting: 82140000,
            rating: 80,
            description: "Very Positive",
        },
        {
            name: "Puan Maharani",
            totalVoting: 12810131,
            rating: 30,
            description: "Very Positive",
        },
        {
            name: "Joko Widodo",
            totalVoting: 92404113,
            rating: 88,
            description: "Very Positive",
        },

    ];

    return (
        <div className="d-flex">
            <div className="d-flex">
                <div
                    className={toggle ? "d-none" : "w-auto position-fixed"}
                    style={{ zIndex: 1 }}
                >
                    <Sidebar value="4" />
                </div>
                <div className={toggle ? "d-none" : "invisible"}>
                    <Sidebar value="4" />
                </div>
            </div>
            <div className="col">
                <NavAdm Toggle={Toggle} />
                <div className="container">
                    <Row>
                        <Col md={6} className="pt-2 pb-2">
                            <Card>
                                <Card.Body>
                                    <i className="fa-solid fa-circle-user px-2 py-2"></i>
                                    <span className="fw-bold fs-5">INFORMASI AKUN</span>
                                    <hr />
                                    <DataBar />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} className="pt-2 pb-2">
                            <Card>
                                <Card.Body>
                                    <i className="fa-solid fa-chart-simple px-2 py-2"></i>
                                    <span className="fw-bold fs-5">JUMLAH KANDIDAT</span>
                                    <hr />
                                    <div style={{ margin: "0 auto" }}>
                                        <DataArea />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    {/* Table */}
                    <Row>
                        <Col md={6} className="pt-2 pb-2">
                            <Card>
                                <Card.Body>
                                    <i class="fa-regular fa-id-card px-2 py-2"></i>
                                    <span className="fw-bold fs-5">
                                        JUMLAH PEMILIH TIAP PROVINSI
                                    </span>
                                    <hr />
                                    <Table striped bordered hover>
                                        <thead>
                                            <tr>
                                                <th>Provinsi</th>
                                                <th>Total Pemilih</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tableData.map((data, index) => (
                                                <tr key={index}>
                                                    <td>{data.province}</td>
                                                    <td>{data.totalVoters.toLocaleString()}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} className="pt-2 pb-2">
                            <Card>
                                <Card.Body>
                                    <i class="fa-solid fa-id-badge px-2 py-2"></i>
                                    <span className="fw-bold fs-5">DATA KANDIDAT</span>
                                    <hr />
                                    <Table striped bordered hover>
                                        <thead>
                                            <tr>
                                                <th>Kandidat</th>
                                                <th>Total Voting</th>
                                                <th>Rating</th>
                                                <th>Keterangan</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {candidateData.map((candidate, index) => (
                                                <tr key={index}>
                                                    <td>{candidate.name}</td>
                                                    <td>{candidate.totalVoting.toLocaleString()}</td>
                                                    <td className={`fw-bold ${candidate.rating < 50 ? 'text-danger' : 'text-success'}`}>
                                                        {candidate.rating}%{" "}
                                                        <i className={`fa-solid fa-thumbs-${candidate.rating < 50 ? 'down' : 'up'}`}></i>
                                                    </td>
                                                    <td className={`${candidate.rating < 50 ? 'text-danger' : 'text-success'}`}>
                                                        {`(${candidate.rating < 50 ? 'Very Bad' : 'Very Positive'})`}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
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
