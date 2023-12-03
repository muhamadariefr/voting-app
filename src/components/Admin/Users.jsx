import React, { useEffect, useState } from "react";
import NavAdm from "./NavAdm";
import Sidebar from "./Sidebar";
import { Row, Col, Card, Table } from "react-bootstrap";

function Users() {
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

  return (
    <div className="d-flex">
      <div className="d-flex">
        <div className={toggle ? "d-none" : "w-auto position-fixed"}>
          <Sidebar value="2" />
        </div>
        <div className={toggle ? "d-none" : "invisible"}>
          <Sidebar value="2" />
        </div>
      </div>
      <div className="col">
        <NavAdm Toggle={Toggle} />
        <div className="container">
          <Row>
            <Col className="pemilih p-2">
              <Card>
                <Card.Body>
                  <i className="fa-solid fa-user px-2 py-2"></i>
                  <span className="fw-bold fs-5">DAFTAR PEMILIH</span>
                  {/* <h5>DAFTAR PEMILIH</h5> */}
                  <hr />
                  <div className="table-responsive">
                    <Table striped bordered>
                      <thead>
                        <tr>
                          <th>No</th>
                          <th>Nama</th>
                          <th className="d-none d-md-table-cell">Email</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>John Doe</td>
                          <td className="d-none d-md-table-cell">
                            johndoe@example.com
                          </td>
                          <td className="text-success">
                            Sudah Memilih <i className="fa fa-check-circle"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Jane Smith</td>
                          <td className="d-none d-md-table-cell">
                            janesmith@example.com
                          </td>
                          <td className="text-success">
                            Sudah Memilih <i className="fa fa-check-circle"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Michael Johnson</td>
                          <td className="d-none d-md-table-cell">
                            michaelj@example.com
                          </td>
                          <td className="text-danger">
                            Belum Memilih <i className="fa fa-times-circle"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Sarah Lee</td>
                          <td className="d-none d-md-table-cell">
                            sarahlee@example.com
                          </td>
                          <td className="text-danger">
                            Belum Memilih <i className="fa fa-times-circle"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>John Doe</td>
                          <td className="d-none d-md-table-cell">
                            johndoe@example.com
                          </td>
                          <td className="text-success">
                            Sudah Memilih <i className="fa fa-check-circle"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>John Doe</td>
                          <td className="d-none d-md-table-cell">
                            johndoe@example.com
                          </td>
                          <td className="text-success">
                            Sudah Memilih <i className="fa fa-check-circle"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td>John Doe</td>
                          <td className="d-none d-md-table-cell">
                            johndoe@example.com
                          </td>
                          <td className="text-success">
                            Sudah Memilih <i className="fa fa-check-circle"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>8</td>
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
