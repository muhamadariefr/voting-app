import React from "react";
import { Link } from "react-router-dom";
import { Container, Dropdown, Row, Col, Card } from "react-bootstrap";

function AdminComponent() {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="bg-dark col-auto col-md-4 col-lg-2 min-vh-100 d-flex flex-column justify-content-between">
          <div className="bg-dark p-2">
            <a
              href=""
              className="d-flex align-items-center mt-1 text-decoration-none text-white"
            >
              <span className="fs-4 d-none d-sm-inline fw-bold pt-3">
                Voting <span className="text-primary">App</span>
              </span>
            </a>
            <ul className="nav nav-pills flex-column mt-4">
              <li className="nav-item py-2 py-sm-0">
                <a
                  href="#"
                  className="nav-link text-white active"
                  aria-current="page"
                >
                  <i className="fs-5 fa fa-gauge"></i>
                  <span className="fs-5 ms-1 d-none d-sm-inline">
                    Dashboard
                  </span>
                </a>
              </li>
              <li className="nav-item py-2 py-sm-0">
                <a href="#" className="nav-link text-white">
                  <i className="fs-5 fa fa-house"></i>
                  <span className="fs-5 ms-1 d-none d-sm-inline">Home</span>
                </a>
              </li>
              <li className="nav-item py-2 py-sm-0">
                <a href="#" className="nav-link text-white">
                  <i className="fs-5 fa fa-table-list"></i>
                  <span className="fs-5 ms-1 d-none d-sm-inline">Articles</span>
                </a>
              </li>
              <li className="nav-item py-2 py-sm-0">
                <a href="#" className="nav-link text-white">
                  <i className="fs-5 fa fa-table-list"></i>
                  <span className="fs-5 ms-1 d-none d-sm-inline">Product</span>
                </a>
              </li>
              <li className="nav-item py-2 py-sm-0">
                <a href="#" className="nav-link text-white">
                  <i className="fs-5 fa fa-clipboard"></i>
                  <span className="fs-5 ms-1 d-none d-sm-inline">Orders</span>
                </a>
              </li>
              <li className="nav-item py-2 py-sm-0">
                <a href="#" className="nav-link text-white">
                  <i className="fs-5 fa fa-users"></i>
                  <span className="fs-5 ms-1 d-none d-sm-inline">
                    Customers
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <Dropdown className="m-2">
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
              <i className="fa fa-user me-2"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Setting</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Profile</Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                <Link to="/login" className="text-decoration-none text-dark">
                  Logout
                </Link>{" "}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="col-md-2 col-lg-10">
          <Container>
            <h1 className="fs-1 pt-5">Admin Dashboard</h1>
            <Row>
              <Col className="col-6 col-sm-5 py-2 py-sm-0">
                <Card>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="col-6 col-sm-5 py-2 py-sm-0">
                <Card>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>            
          </Container>
        </div>
      </div>
    </div>
  );
}

export default AdminComponent;
