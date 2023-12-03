import React, { useState, useEffect } from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Modal,
  Button,
} from "react-bootstrap";
import { navLinks } from "../data/index";
import { NavLink, useNavigate } from "react-router-dom";

const UserProfileModal = ({ show, handleClose, userData }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Profil Saya</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="text-center">
          <img
            src="/profile.jpg" // Replace with the actual path to your image
            alt="Profile Image"
            className="img-fluid rounded-circle mb-3"
            style={{ width: "100px", height: "auto" }}
          />
        </div>
        <div className="detail-akun">
          <p>Username:</p>
          <h5>{userData.username}</h5>
        </div>
        <div className="detail-akun">
          <p>Nama Lengkap:</p>
          <h5>{userData.fullName}</h5>
        </div>
        <div className="detail-akun">
          <p>Tanggal Lahir:</p>
          <h5>{userData.dateOfBirth}</h5>
        </div>
        <div className="detail-akun">
          <p>Email:</p>
          <h5>{userData.email}</h5>
        </div>
        <div className="detail-akun">
          <p>Status:</p>
          <h5>{userData.status}</h5>
        </div>        
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();
    window.addEventListener("scroll", changeBackgroundColor);
  });

  let navigate = useNavigate();

  return (
    <div className="navbar-home">
      <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
        <Container>
          <Navbar.Brand href="#home" className="fs-4 fw-bold">
          <i class="fa-solid fa-box-archive pe-2"></i>Voting
            <span className="text-primary">App</span>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="nav-toggle"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
              {navLinks.map((link) => {
                return (
                  <div className="nav-link" key={link.id}>
                    <NavLink
                      to={link.path}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                      }
                      end
                    >
                      {link.text}
                    </NavLink>
                  </div>
                );
              })}
            </Nav>
            <div className="text-center">
              <button
                className="btn btn-outline-primary rounded-5"
                onClick={() => navigate("/login")}
              >
                Login/Register
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <UserProfileModal
        show={showProfileModal}
        handleClose={closeProfileModal}
        userData={userData}
      />
    </div>
  );
};

export default NavbarComponent;
