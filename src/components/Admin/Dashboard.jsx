import {
  Row,
  Col,
  Card,
  Table,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import DataPie from "../Chart/PieChart";
import DataLine from "../Chart/LineChart";
import DataBar from "../Chart/BarChart";
import DataArea from "../Chart/AreaChart";

function Dashboard() {
  return (
    <div className="admin">
      <>
        {[false, "sm", "md", "lg", "xl", "xxl"].map((expand) => (
          <Navbar key={expand} expand={expand} className="bg-light mb-3 w-100">
            <Container fluid className="px-5 md-me-5">
              <Navbar.Brand href="#" className="fw-bold">
                <i className="fa-solid fa-dragon px-2"></i>Voting
                <span className="text-primary">App</span>
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
                className="border border-o"
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="/admin" className="active">
                      <i className="fs-5 fa fa-gauge px-2"></i>
                      Dashboard
                    </Nav.Link>
                    <Nav.Link href="/user">
                      <i className="fs-5 fa fa-user px-2"></i>
                      User
                    </Nav.Link>
                    <Nav.Link href="/candidate">
                      <i className="fs-5 fa fa-users px-2"></i>
                      Candidate
                    </Nav.Link>
                    <Nav.Link href="#">
                      <i className="fs-5 fa fa-file-lines px-2"></i>
                      Report
                    </Nav.Link>
                    <NavDropdown
                      title="Admin"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="#action3">
                        <i className="fa-solid fa-gear me-2"></i>Setting
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        <i className="fa-solid fa-circle-user me-2"></i>Profile
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="/login">
                        <i className="fa-solid fa-arrow-right-from-bracket me-2"></i>
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
      <div className="container admin-content" id="page-content-wrapper">
        <div className="container-fluid px-4">
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
            <Col md={6} className="pt-2 pb-2">
              <Card>
                <Card.Body>
                  <i className="fa-solid fa-circle-info px-2 py-2"></i>
                  <span className="fw-bold fs-5">INFORMASI PEMILIHAN</span>
                  <hr />
                  <DataLine />
                </Card.Body>
              </Card>
            </Col>
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
                  <span className="fw-bold fs-5">HASIL PEMILIHAN</span>
                  <hr />
                  <div style={{ maxWidth: "300px", margin: "0 auto" }}>
                    <DataPie />
                  </div>
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
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
