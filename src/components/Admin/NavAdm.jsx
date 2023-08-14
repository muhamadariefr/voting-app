import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavAdm({ Toggle }) {
  return (
    <Navbar expand="lg" className="bg-dark navbar-dark">
      <Container>
        <Navbar.Brand href="#home" className="d-none d-md-block">Dashboard</Navbar.Brand>
        <Navbar.Brand
          className="navbar-brand d-block d-sm-none"
          onClick={Toggle}
        >
          <i className="bi bi-justify"></i>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#setting" className="p-2">
              <i class="fa-solid fa-gear"></i> Setting
            </Nav.Link>
            <Nav.Link href="#profile" className="p-2">
              <i class="fa-solid fa-circle-user"></i> Profile
            </Nav.Link>
            <Nav.Link href="/login" className="p-2">
              <i class="fa-solid fa-arrow-right-from-bracket"></i> Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavAdm;
