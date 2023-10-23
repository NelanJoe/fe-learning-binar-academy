import PropTypes from "prop-types";
import { Navigate, Outlet } from "react-router-dom";

const NoAccessToken = ({ children }) => {
  const token = localStorage.getItem("token");
  if (token !== null) {
    <Navigate to="/" replace />;
  }

  return children ? children : <Outlet />;
};

NoAccessToken.propTypes = {
  children: PropTypes.node,
};

export default NoAccessToken;
