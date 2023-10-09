import { Container, Navbar, Nav } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Navbar expand="lg" className="navbar navbar-dark bg-primary">
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold">
            MovieReview
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/register">
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main>
        <Container className="my-4">
          <Outlet />
        </Container>
      </main>
      <footer>
        <p className="text-center fw-semibold fs-3">
          Created with 💖 and ☕ By Nelan &copy;2023
        </p>
      </footer>
    </>
  );
};

export default Root;
