import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";

const Student = ({ name, className }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{className}</Card.Text>
      </Card.Body>
      <Button variant="primary">Go To Home</Button>
    </Card>
  );
};

Student.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
};

export default Student;
