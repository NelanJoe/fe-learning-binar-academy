import axios from "axios";
import { Suspense, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import MovieList from "../components/MovieList";
import { Container } from "react-bootstrap";
import { PaginationControl } from "react-bootstrap-pagination-control";

const SearchMovies = () => {
  const [searchParams] = useSearchParams();
  const [dataSearchMovies, setDataSearchMovies] = useState([]);

  const [page, setPage] = useState(1);

  const title = searchParams.get("title");

  const AUTH_TOKEN = import.meta.env.VITE_AUTH_TOKEN;
  const API_URL = import.meta.env.VITE_API_URL;
  useEffect(() => {
    // Token
    const token = localStorage.getItem("token");

    if (!token) return;

    const getDataMovies = async (movieTitle) => {
      try {
        const { data } = await axios.get(
          `${API_URL}/api/v1/search/movie?page=${page}&query=${movieTitle}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setDataSearchMovies(data?.data);
      } catch (error) {
        if (axios.AxiosError(error)) {
          console.error(error?.reponse?.data?.status_message);
          return;
        }

        throw new Error(error);
      }
    };

    getDataMovies(title);
  }, [AUTH_TOKEN, API_URL, title, page]);

  return (
    <>
      <p>Search movies: {`"${title || "example: avatar"}"`}</p>

      {dataSearchMovies.length ? (
        <Suspense fallback={<div>Loading...</div>}>
          <MovieList movies={dataSearchMovies} />
          <Container className="my-4">
            <PaginationControl
              page={page}
              between={4}
              total={5}
              limit={2}
              changePage={(page) => {
                setPage(page);
              }}
              ellipsis={1}
            />
          </Container>
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
