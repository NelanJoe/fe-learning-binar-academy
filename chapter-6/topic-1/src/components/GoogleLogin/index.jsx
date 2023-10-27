import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { registerLoginWithGoogleAction } from "../../redux/actions/authActions";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

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
