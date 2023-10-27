import { Suspense, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getResultSearchMovies } from "../redux/actions/movieActions";

import MovieList from "../components/MovieList";

const SearchMovies = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { resultSearchMovie } = useSelector((state) => state.movie);

  const query = searchParams.get("query");
  const page = searchParams.get("page");

  useEffect(() => {
    dispatch(getResultSearchMovies(page, query));
  }, [dispatch, page, query]);

  return (
    <>
      <p>Search movies: {`"${query || "example: avatar"}"`}</p>

      {resultSearchMovie.length ? (
        <Suspense fallback={<div>Loading...</div>}>
          <MovieList movies={resultSearchMovie} />
        </Suspense>
      ) : (
        <div className="grid place-content-center">
          <h2>Not found movies with title {`"${query}"`}</h2>
          <Link to="/">Back to home</Link>
        </div>
      )}
    </>
  );
};

export default SearchMovies;
