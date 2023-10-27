import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { Form as FormRouter, useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const page = 1;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query) return;

    navigate({
      pathname: "/search",
      search: `?page=${page}&query=${query}`,
    });

    setQuery("");
  };

  return (
    <div className="my-4">
      <Form as={FormRouter} onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Search movie..."
            aria-label="Movie"
            aria-describedby="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <InputGroup.Text id="search">🔍</InputGroup.Text>
        </InputGroup>
        <Button type="submit" className="w-100">
          Search
        </Button>
      </Form>
    </div>
  );
};

export default Search;
