import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { getMe } from "../redux/actions/authActions";
import { useEffect } from "react";

const Protected = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token === null) {
      dispatch(getMe(navigate, null, "/login"));
    }
  }, [token, dispatch, navigate]);

  return children ? children : <Outlet />;
};

Protected.propTypes = {
  children: PropTypes.node,
};

export default Protected;
