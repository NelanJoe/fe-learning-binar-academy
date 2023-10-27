import axios from "axios";
import { setToken, setUser } from "../reducers/authReducer";
import { toast } from "sonner";

const API_URL = import.meta.env.VITE_API_URL;

const getMe =
  (navigate, navigatePathSuccess, navigatePathError) =>
  async (dispatch, getState) => {
    try {
      let { token } = getState().auth;

      const response = await axios.get(`${API_URL}/api/v1/auth/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const { data } = response.data;

      dispatch(setUser(data));

      if (navigatePathSuccess) navigate(navigatePathSuccess);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response.status === 401) {
          dispatch(logout());

          if (navigatePathError) navigate(navigatePathError);
          return;
        }

        toast.error(error?.response?.data?.message);
        return;
      }

      toast.error(error?.message);
    }
  };

const login = (navigate, formData) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${API_URL}/api/v1/auth/login`, formData);

    const token = data?.data?.token;

    dispatch(setToken(token));

    navigate("/");
    toast.success("Successfully login", { duration: 4000 });
  } catch (error) {
    if (axios.AxiosError(error)) {
      toast.error(error?.reponse?.data?.status_message);
      return;
    }
    toast.error(error?.message);
  }
};

const registerLoginWithGoogleAction =
  (accessToken, navigate) => async (dispatch) => {
    try {
      const { data } = await axios.post(`${API_URL}/api/v1/auth/google`, {
        access_token: accessToken,
      });

      const token = data?.data?.token;

      dispatch(setToken(token));

      navigate("/");
      toast.success("Successfully login with google", {
        duration: 2000,
      });
    } catch (error) {
      if (axios.AxiosError(error)) {
        toast.error(error?.reponse?.data?.status_message);
        return;
      }

      toast.error(error);
    }
  };

const logout = () => (dispatch) => {
  dispatch(setToken(null));
  dispatch(setUser(null));
};

export { getMe, login, registerLoginWithGoogleAction, logout };
