import PropTypes from "prop-types";
import { Suspense } from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const MovieItem = ({ movie }) => {
  return (
    <Col key={movie?.id} sm={12} md={4} xl={4}>
      <Card className="shadow-sm">
        <Suspense fallback={<div>Loading content...</div>}>
          <CardBody>
            <CardImg
              src={`https://image.tmdb.org/t/p/original/${
                movie?.poster_path || movie?.backdrop_path
              }`}
              alt={movie?.title}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                objectPosition: "top",
              }}
            />
            <CardTitle className="my-2" style={{ color: "skyblue" }}>
              {movie?.title}
            </CardTitle>
            <CardText className="fst-italic">{movie?.release_date}</CardText>
            <CardText>
              Rating: <span>⭐</span> {movie?.vote_average}
            </CardText>
            <CardText
              className={`${movie?.overview.length >= 50 && "text-truncate"}`}
            >
              {movie?.overview}
            </CardText>
            <Link to={`/movie/${movie?.id}`}>See Detail</Link>
          </CardBody>
        </Suspense>
      </Card>
    </Col>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.object,
};

export default MovieItem;
