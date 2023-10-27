import { useEffect } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { getMe, logout } from "../../redux/actions/authActions";

const NavbarComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token) {
      dispatch(getMe());
    }
  }, [dispatch, token]);

  const handleLogout = () => {
    dispatch(logout());

    toast.success("Successfully logout", {
      duration: 2000,
    });

    navigate("/login");
    window.location.reload();
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
                <Nav.Link as={Button} onClick={handleLogout}>
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
