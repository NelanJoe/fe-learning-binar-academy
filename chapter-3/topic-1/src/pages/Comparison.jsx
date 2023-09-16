import { useState } from "react";
import ComparisonComponent from "../components/ComparisonComponent";
import "../App.css";

const Comparison = () => {
  const [personOne, setPersonOne] = useState("");
  const [personTwo, setPersonTwo] = useState("");
  const [isSamePerson, setIsSamePerson] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const checkIsSamePerson = () => {
    // event.preventDefault();

    // if (!personOne || !personTwo) {
    //   alert("Person one or person two is not valid!");
    // }

    setIsChecked(true);

    // setTimeout(() => {
    if (personOne === personTwo) {
      setIsSamePerson(true);
    } else {
      setIsSamePerson(false);
    }

    // }, 1000);
  };

  return (
    <div className="app">
      <ComparisonComponent
        personOne={personOne}
        personTwo={personTwo}
        isChecked={isChecked}
        isSamePerson={isSamePerson}
        setPersonOne={setPersonOne}
        setPersonTwo={setPersonTwo}
        checkIsSamePerson={checkIsSamePerson}
        setIsChecked={setIsChecked}
      >
        <div>
          <h1>Children nih</h1>
        </div>
      </ComparisonComponent>
    </div>
  );
};

export default Comparison;
