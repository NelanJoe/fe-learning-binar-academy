import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { toast } from "sonner";
import PropTypes from "prop-types";

import { registerLoginWithGoogleAction } from "../../redux/actions/authActions";

const GoogleLogin = ({ text }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: (res) => {
      dispatch(registerLoginWithGoogleAction(res.access_token, navigate));
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  return <Button onClick={() => login()}>{text}</Button>;
};

GoogleLogin.propTypes = {
  text: PropTypes.string,
};

export default GoogleLogin;
