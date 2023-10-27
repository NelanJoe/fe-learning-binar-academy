import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Search from "../components/Search";
import MovieList from "../components/MovieList";
import { getPopularMovies } from "../redux/actions/movieActions";

const Home = () => {
  const { popular } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularMovies());
  }, [dispatch]);

  return (
    <>
      <Search />
      <Suspense fallback={<div>Loading Content...</div>}>
        <MovieList movies={popular} />
      </Suspense>
    </>
  );
};

export default Home;
