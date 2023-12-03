import React, { useEffect, useState } from "react";
import NavAdm from "./NavAdm";
import Sidebar from "./Sidebar";
import ModalAdd from "./ModalAdd";
import ModalEdit from "./ModalEdit";
import ModalHapus from "./ModalHapus";
import { Row, Col, Card, Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
function Order() {
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
        <div className={toggle ? "d-none" : "w-auto position-fixed"} style={{zIndex: 1}}>
          <Sidebar value="3" />
        </div>
        <div className={toggle ? "d-none" : "invisible"}>
          <Sidebar value="3" />
        </div>
      </div>
      <div className="col">
        <NavAdm Toggle={Toggle} />
        <div className="container">
          <Row>
            <Col className="kandidat p-2">
              <Card>
                <Card.Body>
                  <i className="fa-solid fa-users px-2 py-2"></i>
                  <span className="fw-bold fs-5">DAFTAR KANDIDAT</span>
                  <hr />
                  <div className="pb-2 d-flex flex-row justify-content-between">
                    <div className="justify-content-start">
                      <ModalAdd />
                    </div>
                    <div className="justify-content-end">
                      <Button variant="outline-primary">
                        <i class="fa-solid fa-print"></i> Print
                      </Button>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <Table striped bordered>
                      <thead>
                        <tr>
                          <th className="text-center">No</th>
                          <th className="text-center">Nama Kandidat</th>
                          <th className="text-center d-none d-md-table-cell">
                            Tanggal Lahir
                          </th>
                          <th className="text-center d-none d-md-table-cell">Status</th>
                          <th className="text-center d-none d-md-table-cell">
                            Partai Politik
                          </th>
                          <th className="text-center md-text-center d-md-table-cell">
                            Aksi
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>John Doe</td>
                          <td className="d-none d-md-table-cell">01/01/1990</td>
                          <td className="d-none d-md-table-cell">Aktif</td>
                          <td className="d-none d-md-table-cell">Partai A</td>
                          <td className="d-flex flex-row justify-content-center border-2">
                            <ModalEdit />
                            <span className="p-1"></span> <ModalHapus />
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Jane Smith</td>
                          <td className="d-none d-md-table-cell">01/01/1990</td>
                          <td className="d-none d-md-table-cell">Aktif</td>
                          <td className="d-none d-md-table-cell">Partai B</td>
                          <td className="d-flex flex-row justify-content-center border-2">
                            <ModalEdit />
                            <span className="p-1"></span> <ModalHapus />
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Michael Johnson</td>
                          <td className="d-none d-md-table-cell">01/01/1990</td>
                          <td className="d-none d-md-table-cell">Aktif</td>
                          <td className="d-none d-md-table-cell">Partai C</td>
                          <td className="d-flex flex-row justify-content-center border-2">
                            <ModalEdit />
                            <span className="p-1"></span> <ModalHapus />
                          </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Sarah Lee</td>
                          <td className="d-none d-md-table-cell">01/01/1990</td>
                          <td className="d-none d-md-table-cell">Aktif</td>
                          <td className="d-none d-md-table-cell">Partai D</td>
                          <td className="d-flex flex-row justify-content-center border-2">
                            <ModalEdit />
                            <span className="p-1"></span> <ModalHapus />
                          </td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>Robert Williams</td>
                          <td className="d-none d-md-table-cell">01/01/1990</td>
                          <td className="d-none d-md-table-cell">Aktif</td>
                          <td className="d-none d-md-table-cell">Partai E</td>
                          <td className="d-flex flex-row justify-content-center border-2">
                            <ModalEdit />
                            <span className="p-1"></span>
                            <ModalHapus />
                          </td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>Robert Williams</td>
                          <td className="d-none d-md-table-cell">01/01/1990</td>
                          <td className="d-none d-md-table-cell">Aktif</td>
                          <td className="d-none d-md-table-cell">Partai E</td>
                          <td className="d-flex flex-row justify-content-center border-2">
                            <ModalEdit />
                            <span className="p-1"></span>
                            <ModalHapus />
                          </td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td>Robert Williams</td>
                          <td className="d-none d-md-table-cell">01/01/1990</td>
                          <td className="d-none d-md-table-cell">Aktif</td>
                          <td className="d-none d-md-table-cell">Partai E</td>
                          <td className="d-flex flex-row justify-content-center border-2">
                            <ModalEdit />
                            <span className="p-1"></span>
                            <ModalHapus />
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

export default Order;
