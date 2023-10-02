import axios from "axios";
import { Suspense, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import MovieList from "../components/MovieList";

const SearchMovies = () => {
  const [searchParams] = useSearchParams();
  const [dataSearchMovies, setDataSearchMovies] = useState([]);

  const title = searchParams.get("title");

  const AUTH_TOKEN = import.meta.env.VITE_AUTH_TOKEN;
  useEffect(() => {
    const getDataMovies = async (movieTitle) => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/search/movie?query=${movieTitle}&include_adult=false&language=en-US&page=1`,
          {
            headers: {
              Authorization: `Bearer ${AUTH_TOKEN}`,
            },
          }
        );
        setDataSearchMovies(data?.results);
      } catch (error) {
        throw new Error(error);
      }
    };

    getDataMovies(title);
  }, [AUTH_TOKEN, title]);

  return (
    <>
      <p>Search movies: {`"${title || "example: avatar"}"`}</p>

      {dataSearchMovies.length ? (
        <Suspense fallback={<div>Loading...</div>}>
          <MovieList movies={dataSearchMovies} />
        </Suspense>
      ) : (
        <div className="grid place-content-center">
          <h2>Not found movies with title {`"${title}"`}</h2>
          <Link to="/">Back to home</Link>
        </div>
      )}
    </>
  );
};

export default SearchMovies;
