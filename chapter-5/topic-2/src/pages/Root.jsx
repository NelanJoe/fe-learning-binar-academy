import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import NavbarComponent from "../components/Navbar";

const Root = () => {
  return (
    <>
      <header>
        <NavbarComponent />
      </header>
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
