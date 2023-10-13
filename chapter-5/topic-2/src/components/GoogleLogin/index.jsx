import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const GoogleLogin = ({ text }) => {
  const API_URL = import.meta.env.VITE_API_URL;

  const handleGoogleLogin = async (access_token) => {
    try {
      const { data } = await axios.post(`${API_URL}/api/v1/auth/google`, {
        access_token: access_token,
      });

      const token = data?.data?.token;

      // Save token to localStorage
      localStorage.setItem("token", token);

      window.location.replace("/");
    } catch (error) {
      console.error("~ 🎯", error?.message);

      if (axios.AxiosError(error)) {
        console.error(error?.reponse?.data?.status_message);
        return;
      }

      throw new Error(error);
    }
  };

  const login = useGoogleLogin({
    onSuccess: (res) => {
      handleGoogleLogin(res.access_token);
    },
  });

  return <Button onClick={() => login()}>{text}</Button>;
};

GoogleLogin.propTypes = {
  text: PropTypes.string,
};

export default GoogleLogin;
