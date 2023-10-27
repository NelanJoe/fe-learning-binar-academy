import axios from "axios";
import {
  setDetailMovie,
  setPopular,
  setResultSearchMovies,
  setVideos,
} from "../reducers/movieReducer";
import { toast } from "sonner";

const { VITE_API_URL: API_URL } = import.meta.env;

const getPopularMovies = () => async (dispatch, getState) => {
  try {
    const { token } = getState().auth;

    if (!token) return;

    const { data } = await axios.get(`${API_URL}/api/v1/movie/popular`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch(setPopular(data?.data));
  } catch (error) {
    if (axios.AxiosError(error)) {
      toast.error(error?.reponse?.data?.status_message);
      return;
    }

    throw new Error(error);
  }
};

const getDetailMovie = (movieId) => async (dispatch, getState) => {
  try {
    const { token } = getState().auth;

    if (!token) return;

    const { data } = await axios.get(`${API_URL}/api/v1/movie/${movieId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch(setDetailMovie(data?.data));
    dispatch(setVideos(data?.data?.videos));
  } catch (err) {
    throw new Error(err);
  }
};

const getResultSearchMovies =
  (page, movieTitle) => async (dispatch, getState) => {
    try {
      const { token } = getState().auth;

      if (!token) return;

      const { data } = await axios.get(
        `${API_URL}/api/v1/search/movie?page=${page}&query=${movieTitle}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch(setResultSearchMovies(data?.data));
    } catch (error) {
      if (axios.AxiosError(error)) {
        toast.error(error?.reponse?.data?.status_message);
        return;
      }

      toast.error(error);
    }
  };

export { getPopularMovies, getDetailMovie, getResultSearchMovies };
