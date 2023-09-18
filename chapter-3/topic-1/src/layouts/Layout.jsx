import { Container } from "react-bootstrap";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return <Container className="mt-2">{children}</Container>;
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
