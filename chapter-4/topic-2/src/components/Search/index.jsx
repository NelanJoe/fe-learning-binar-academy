import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { Form as FormRouter, useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title) return;

    navigate({
      pathname: "/search",
      search: `?title=${title}`,
    });

    setTitle("");
  };

  return (
    <div className="my-4">
      <Form as={FormRouter} onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Search movie..."
            aria-label="Movie"
            aria-describedby="search"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
