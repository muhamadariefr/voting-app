import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { navLinks } from "../data/index";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  const logoutBtnUser = () => {
    localStorage.removeItem('keyLogin');
  }

  let keyLogin;
  keyLogin = JSON.parse(localStorage.getItem('keyLogin'));
  console.log(keyLogin);

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
          <i className="fa-solid fa-box-archive pe-2"></i>Voting
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
            <div className={keyLogin == 1 ? "d-none text-center" : "text-center" }>
              <button
                className="btn btn-outline-primary rounded-5"
                onClick={() => navigate("/login")}
              >
                Login/Register
              </button>
            </div>
            <Nav className={keyLogin == 1 ? "ms-auto d-flex flex-row align-items-center justify-content-center" : "d-none"}>
              <Nav.Link href="#" className="p-2" onClick={logoutBtnUser}>
                <img src="/profile.png" alt="" width={30}/>
              </Nav.Link>
              <Nav.Link href="/login" className="p-2" onClick={logoutBtnUser}>
                <i className="fa-solid fa-arrow-right-from-bracket"></i> Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
