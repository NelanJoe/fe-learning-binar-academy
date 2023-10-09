import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";
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

  const [movie, setMovie] = useState([]);
  const [movieTrailer, setMovieTrailer] = useState([]);

  const AUTH_TOKEN = import.meta.env.VITE_AUTH_TOKEN;
  useEffect(() => {
    const getDetailMovie = async (movieId) => {
      try {
        const { data } = await axios.get(
          `
        https://api.themoviedb.org/3/movie/${movieId}`,
          {
            headers: {
              Authorization: `Bearer ${AUTH_TOKEN}`,
            },
          }
        );

        setMovie(data);
      } catch (err) {
        throw new Error(err);
      }
    };

    const getVideos = async (movieId) => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
          {
            headers: {
              Authorization: `Bearer ${AUTH_TOKEN}`,
            },
          }
        );

        setMovieTrailer(data?.results);
      } catch (err) {
        throw new Error(err);
      }
    };

    getDetailMovie(movieId);
    getVideos(movieId);
  }, [AUTH_TOKEN, movieId]);

  const genres =
    movie?.genres?.map((genre) => genre.name)?.join(", ") || "Not found genres";

  const idTrailer = movieTrailer
    ?.filter((trailer) => trailer.type)
    ?.find((t) => t.type === "Trailer");

  return (
    <Suspense fallback={<div>Loading....</div>}>
      <Card>
        <CardBody>
          <Suspense fallback={<div>Loading Content....</div>}>
            <Row>
              <Col md={4}>
                <CardImg
                  src={`https://image.tmdb.org/t/p/original/${
                    movie?.poster_path || movie?.backdrop_path
                  }`}
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
                  {movieTrailer.length === 0 ? (
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
