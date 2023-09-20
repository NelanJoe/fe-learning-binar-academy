import PropTypes from "prop-types";
import { useEffect } from "react";
import { Form, InputGroup } from "react-bootstrap";

const ComparisonComponent = ({
  personOne,
  personTwo,
  isChecked,
  isSamePerson,
  setPersonOne,
  setPersonTwo,
  setIsChecked,
  checkIsSamePerson,
  children,
}) => {
  useEffect(() => {
    if (personOne && personTwo) {
      setIsChecked(true);
      checkIsSamePerson();
    } else {
      setIsChecked(false);
    }
  }, [personOne, personTwo, setIsChecked, checkIsSamePerson]);

  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text id="person-one">Person One</InputGroup.Text>
        <Form.Control
          placeholder="Adding here..."
          aria-label="personOne"
          value={personOne}
          aria-describedby="person-one"
          onChange={(e) => setPersonOne(e.target.value)}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="person-two">Person Two</InputGroup.Text>
        <Form.Control
          placeholder="Adding here..."
          aria-label="personTwo"
          value={personTwo}
          aria-describedby="person-one"
          onChange={(e) => setPersonTwo(e.target.value)}
        />
      </InputGroup>

      <div>
        <h2>
          {isChecked &&
            (isSamePerson ? "The person is same" : "Yep, different person!")}
        </h2>
      </div>
      {children}
    </>
  );
};

ComparisonComponent.propTypes = {
  personOne: PropTypes.string,
  personTwo: PropTypes.string,
  isLoading: PropTypes.bool,
  isChecked: PropTypes.bool,
  isSamePerson: PropTypes.bool,
  setPersonOne: PropTypes.func,
  setPersonTwo: PropTypes.func,
  setIsChecked: PropTypes.func,
  checkIsSamePerson: PropTypes.func,
  children: PropTypes.node,
};

export default ComparisonComponent;
