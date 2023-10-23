import PropTypes from "prop-types";
import { Navigate, Outlet } from "react-router-dom";

const Protected = () => {
  if (localStorage.getItem("token") === null) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

Protected.propTypes = {
  children: PropTypes.node,
};

export default Protected;
