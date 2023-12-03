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
    <Modal show={show} onHide={handleClose} centered >
      <Modal.Header closeButton>
        <Modal.Title>Profil Saya</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{zIndex: 10}}>
        <div className="text-center">
          <img
            src="/profile.jpg"
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

const UserSettingModal = ({ show, handleClose, userData }) => {
  return (
    <Modal show={show} onHide={handleClose} centered >
      <Modal.Header closeButton>
        <Modal.Title>Setting Profil</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{zIndex: 10}}>
        <div className="text-center">
          <img
            src="/profile.jpg"
            alt="Profile Image"
            className="img-fluid rounded-circle mb-3"
            style={{ width: "100px", height: "auto" }}
          />
        </div>
        <div className="detail-akun">
          <h5>
            <input type="file" className="form-control"/>
          </h5>
        </div>
        <div className="detail-akun">
          <p>Username:</p>
          <input type="text" className="form-control" value={userData.username}/>
        </div>
        <div className="detail-akun">
          <p>Nama Lengkap:</p>
          <input type="text" className="form-control" value={userData.fullName}/>
        </div>
        <div className="detail-akun">
          <p>Tanggal Lahir:</p>
          <input type="text" className="form-control" value={userData.dateOfBirth}/>
        </div>
        <div className="detail-akun">
          <p>Email:</p>
          <input type="text" className="form-control" value={userData.email}/>
        </div>
        <div className="detail-akun">
          <p>Status:</p>
          <input type="text" className="form-control" value={userData.status}/>
        </div>        
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Update
        </Button>
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

  const [showSettingModal, setShowSettingModal] = useState(false);
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  const logoutBtnUser = () => {
    localStorage.removeItem("keyLogin");
    navigate("/login");
  };

  let keyLogin;
  keyLogin = JSON.parse(localStorage.getItem("keyLogin"));
  console.log(keyLogin);

  useEffect(() => {
    changeBackgroundColor();
    window.addEventListener("scroll", changeBackgroundColor);

    return () => {
      window.removeEventListener("scroll", changeBackgroundColor);
    };
  }, []);

  // Profile Modal
  const openProfileModal = () => {
    // Fetch user data from an API or wherever you store it
    const fetchedUserData = {
      username: "johndoe123",
      fullName: "John Doe",
      dateOfBirth: "1990-01-01",
      email: "john.doe@example.com",
      status: "Pelajar/Mahasiswa",
    };
    setUserData(fetchedUserData);
    setShowProfileModal(true);
  };

  const closeProfileModal = () => {
    setShowProfileModal(false);
  };

  // Setting Modal
  const openSettingModal = () => {
    // Fetch user data from an API or wherever you store it
    const fetchedUserData = {
      username: "johndoe123",
      fullName: "John Doe",
      dateOfBirth: "1990-01-01",
      email: "john.doe@example.com",
      status: "Pelajar/Mahasiswa",
    };
    setUserData(fetchedUserData);
    setShowSettingModal(true);
  };

  const closeSettingModal = () => {
    setShowSettingModal(false);
  };

  return (
    <div className="navbar-home">
      <Navbar expand="lg" className={changeColor ? "color-active" : ""} style={{zIndex: 1}}>
        <Container>
          <Navbar.Brand href="#home" className="fs-4 fw-bold">
            <i className="fa-solid fa-box-archive pe-2"></i>Voting
            <span className="text-primary">App</span>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="nav-toggle"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
              {navLinks.map((link) => (
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
              ))}
            </Nav>
            {keyLogin ? (
              <Nav className="ms-auto">
                <NavDropdown
                  title={
                    <img
                      src="/profile.jpg"
                      alt=""
                      width={30}
                      className="profile-img rounded-circle"
                    />
                  }
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item onClick={openProfileModal}>
                    <i className="fa-solid fa-circle-user pe-2"></i>
                    {""} Profil
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={openSettingModal}>
                    <i className="fa-solid fa-gear pe-2"></i>
                    {""} Pengaturan
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={logoutBtnUser}>
                    <i className="fa-solid fa-arrow-right-from-bracket pe-2"></i>
                    {""} Keluar
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            ) : (
              <div className="text-center">
                <button
                  className="btn btn-outline-primary rounded-5"
                  onClick={() => navigate("/login")}
                >
                  Login/Register
                </button>
              </div>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <UserProfileModal
        show={showProfileModal}
        handleClose={closeProfileModal}
        userData={userData}
      />

      <UserSettingModal
        show={showSettingModal}
        handleClose={closeSettingModal}
        userData={userData}
      />
    </div>
  );
};

export default NavbarComponent;
