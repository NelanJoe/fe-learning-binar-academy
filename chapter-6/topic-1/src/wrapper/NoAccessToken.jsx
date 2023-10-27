import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Outlet } from "react-router-dom";
import { getMe } from "../redux/actions/authActions";
import { useEffect } from "react";

const NoAccessToken = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token !== null) {
      dispatch(getMe(navigate, "/", null));
    }
  }, [token, dispatch, navigate]);

  return children ? children : <Outlet />;
};

NoAccessToken.propTypes = {
  children: PropTypes.node,
};

export default NoAccessToken;
