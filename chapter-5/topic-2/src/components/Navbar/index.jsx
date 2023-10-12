import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  const [user, setUser] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token || token === null) return;

        const { data } = await axios.get(`${API_URL}/api/v1/auth/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(data?.data);
      } catch (error) {
        if (axios.AxiosError(error)) {
          console.error(error?.reponse?.data?.status_message);
          return;
        }

        throw new Error(error);
      }
    };
    getUserProfile();
  }, [user, API_URL]);

  const handleLogout = (e) => {
    e.preventDefault();

    localStorage.removeItem("token");

    setUser(null);

    window.location.replace("/");
  };

  return (
    <Navbar expand="lg" className="navbar navbar-dark bg-primary">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          MovieReview
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            {user ? (
              <>
                <Nav.Link as={Link} to="/profile">
                  {user?.name}
                </Nav.Link>
                <Nav.Link as={Button} to="/logout" onClick={handleLogout}>
                  Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register">
                  Register
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
