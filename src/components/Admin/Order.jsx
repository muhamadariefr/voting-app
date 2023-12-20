import React, { useEffect, useState } from "react";
import NavAdm from "./NavAdm";
import Sidebar from "./Sidebar";
import ModalAdd from "./ModalAdmin/ModalAdd";
import ModalEdit from "./ModalAdmin/ModalEdit";
import ModalHapus from "./ModalAdmin/ModalHapus";
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
                          <td>Anies Baswedan</td>
                          <td className="d-none d-md-table-cell">7 Mei 1969</td>
                          <td className="d-none d-md-table-cell">Gubernur DKI Jakarta</td>
                          <td className="d-none d-md-table-cell">Partai NASDEM</td>
                          <td className="d-flex flex-row justify-content-center border-2">
                            <ModalEdit />
                            <span className="p-1"></span> <ModalHapus />
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Prabowo Subianto</td>
                          <td className="d-none d-md-table-cell">17 Oktober 1951</td>
                          <td className="d-none d-md-table-cell">Menteri Pertahanan RI</td>
                          <td className="d-none d-md-table-cell">Partai GERINDRA</td>
                          <td className="d-flex flex-row justify-content-center border-2">
                            <ModalEdit />
                            <span className="p-1"></span> <ModalHapus />
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Ganjar Pranowo</td>
                          <td className="d-none d-md-table-cell">28 Oktober 1968</td>
                          <td className="d-none d-md-table-cell">Gubernur Jawa Tengah</td>
                          <td className="d-none d-md-table-cell">Partai PDIP</td>
                          <td className="d-flex flex-row justify-content-center border-2">
                            <ModalEdit />
                            <span className="p-1"></span> <ModalHapus />
                          </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Muhaimin Iskandar</td>
                          <td className="d-none d-md-table-cell">24 September 1966</td>
                          <td className="d-none d-md-table-cell">Ketua PKB</td>
                          <td className="d-none d-md-table-cell">Partai PKB</td>
                          <td className="d-flex flex-row justify-content-center border-2">
                            <ModalEdit />
                            <span className="p-1"></span> <ModalHapus />
                          </td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>Mohammad Mahfud Mahmodin</td>
                          <td className="d-none d-md-table-cell">13 Mei 1957</td>
                          <td className="d-none d-md-table-cell">Menteri Polhukam</td>
                          <td className="d-none d-md-table-cell">Partai PKB</td>
                          <td className="d-flex flex-row justify-content-center border-2">
                            <ModalEdit />
                            <span className="p-1"></span>
                            <ModalHapus />
                          </td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>Gibran Rakabuming</td>
                          <td className="d-none d-md-table-cell">1 Oktober 1987</td>
                          <td className="d-none d-md-table-cell">Walikota Solo</td>
                          <td className="d-none d-md-table-cell">Partai PDIP</td>
                          <td className="d-flex flex-row justify-content-center border-2">
                            <ModalEdit />
                            <span className="p-1"></span>
                            <ModalHapus />
                          </td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td>Ridwan Kamil</td>
                          <td className="d-none d-md-table-cell">4 Oktober 1971</td>
                          <td className="d-none d-md-table-cell">Gubernur Jawa Barat</td>
                          <td className="d-none d-md-table-cell">Partai GOLKAR</td>
                          <td className="d-flex flex-row justify-content-center border-2">
                            <ModalEdit />
                            <span className="p-1"></span>
                            <ModalHapus />
                          </td>
                        </tr>
                        <tr>
                          <td>8</td>
                          <td>Sandiaga Uno</td>
                          <td className="d-none d-md-table-cell">28 Juni 1969</td>
                          <td className="d-none d-md-table-cell">Menteri Parekraf</td>
                          <td className="d-none d-md-table-cell">Partai PPP</td>
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
