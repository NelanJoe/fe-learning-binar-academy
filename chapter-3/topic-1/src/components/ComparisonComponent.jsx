import PropTypes from "prop-types";
import { useEffect } from "react";

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
    console.log("Hello, World");
  });

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
      <div>
        <label htmlFor="personOne">Person One:</label>
        <input
          type="text"
          value={personOne}
          onChange={(e) => setPersonOne(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="personTwo">Person Two:</label>
        <input
          type="text"
          value={personTwo}
          onChange={(e) => setPersonTwo(e.target.value)}
        />
      </div>
      <div>
        {/* <button type="button" onClick={checkIsSamePerson}>
          {!isLoading ? "Check!" : "Checking..."}
        </button> */}
      </div>
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
