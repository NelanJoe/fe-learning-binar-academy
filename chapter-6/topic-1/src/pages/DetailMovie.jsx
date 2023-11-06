import { Link, useParams } from "react-router-dom";
import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailMovie } from "../redux/actions/movieActions";

import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Row,
  Col,
} from "react-bootstrap";

const DetailMovie = () => {
  const { movieId } = useParams();

  const { detailMovie: movie, videos } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetailMovie(movieId));
  }, [dispatch, movieId]);

  const genres =
    movie?.genres?.map((genre) => genre.name)?.join(", ") || "Not found genres";

  const idTrailer = videos
    ?.filter((trailer) => trailer.type)
    ?.find((t) => t.type === "Trailer");

  let imgSrc;
  if (!movie.poster_path || !movie.backdrop_path) {
    imgSrc = `https://fakeimg.pl/400x400/?text=Not+Image&font=noto`;
  } else {
    imgSrc = `https://image.tmdb.org/t/p/w780/${
      movie.poster_path || movie.backdrop_path
    }`;
  }

  return (
    <Suspense fallback={<div>Loading....</div>}>
      <Card>
        <CardBody>
          <Suspense fallback={<div>Loading Content....</div>}>
            <Row>
              <Col md={4}>
                <CardImg
                  src={imgSrc}
                  alt={movie?.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Col>
              <Col>
                <CardTitle className="my-3 fw-bold fs-1">
                  {movie?.title}
                </CardTitle>
                <CardText>Original title: {movie?.original_title}</CardText>
                <CardText>
                  Rating: <span>⭐</span> {movie?.vote_average}
                </CardText>
                <CardText>Genre: {genres}</CardText>
                <CardText>{movie?.overview}</CardText>
                <Suspense fallback={<div>Loading Content....</div>}>
                  {videos.length === 0 ? (
                    <div className="fst-italic fw-bold fs-5 text-danger">
                      <p>Not found tailer</p>
                    </div>
                  ) : (
                    <div className="d-flex flex-wrap gap-4">
                      <div>
                        <iframe
                          src={`https://www.youtube.com/embed/${idTrailer?.key}?rel=0`}
                          title={idTrailer?.name}
                        ></iframe>
                      </div>
                    </div>
                  )}
                </Suspense>
                <CardText>
                  <Link to="/">Back To Movies</Link>
                </CardText>
              </Col>
            </Row>
          </Suspense>
        </CardBody>
      </Card>
    </Suspense>
  );
};

export default DetailMovie;
