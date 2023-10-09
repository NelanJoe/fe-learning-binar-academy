import axios from "axios";
import { Suspense, useEffect, useState } from "react";
import Search from "../components/Search";
import MovieList from "../components/MovieList";

const Home = () => {
  const AUTH_TOKEN = import.meta.env.VITE_AUTH_TOKEN;
  const API_URL = import.meta.env.VITE_API_URL;

  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const getPopularMovies = async () => {
      try {
        const { data } = await axios.get(
          `${API_URL}/3/movie/popular?language=en-US&page=1`,
          {
            headers: {
              Authorization: `Bearer ${AUTH_TOKEN}`,
            },
          }
        );

        setPopularMovies(data?.results);
      } catch (error) {
        if (axios.AxiosError(error)) {
          console.error(error?.reponse?.data?.status_message);
          return;
        }

        throw new Error(error);
      }
    };
    getPopularMovies();
  }, [AUTH_TOKEN, API_URL]);

  return (
    <>
      <Search />
      <Suspense fallback={<div>Loading Content...</div>}>
        <MovieList movies={popularMovies} />
      </Suspense>
    </>
  );
};

export default Home;
