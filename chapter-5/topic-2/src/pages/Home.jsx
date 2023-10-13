import axios from "axios";
import { Suspense, useEffect, useState } from "react";
import Search from "../components/Search";
import MovieList from "../components/MovieList";

const Home = () => {
  const API_URL = import.meta.env.VITE_API_URL;

  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const getPopularMovies = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) return;

        const { data } = await axios.get(`${API_URL}/api/v1/movie/popular`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setPopularMovies(data?.data);
      } catch (error) {
        if (axios.AxiosError(error)) {
          console.error(error?.reponse?.data?.status_message);
          return;
        }

        throw new Error(error);
      }
    };
    getPopularMovies();
  }, [API_URL]);

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
