import PropTypes from "prop-types";
import { Row } from "react-bootstrap";
import MovieItem from "../MovieItem";

const MovieList = ({ movies }) => {
  return (
    <Row className="justify-content-sm-center gx-4 gy-4">
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </Row>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array,
};

export default MovieList;
