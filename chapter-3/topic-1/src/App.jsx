import { useState } from "react";
import "./App.css";

const App = () => {
  const [personOne, setPersonOne] = useState("");
  const [personTwo, setPersonTwo] = useState("");
  const [isSamePerson, setIsSamePerson] = useState(false);
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const checkIsSamePerson = (e) => {
    e.preventDefault();

    setIsLoading(true);

    setTimeout(() => {
      if (personOne.toLocaleLowerCase() === personTwo.toLocaleLowerCase()) {
        setIsSamePerson(true);
        return;
      }
      setIsLoading(false);
    }, 1000);

    setIsSamePerson(false);

    setPersonOne("");
    setPersonTwo("");
  };

  return (
    <>
      <h1 style={{ color: color }}>{name}</h1>
      <div>
        <label htmlFor="name">My Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
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
        <button type="button" onClick={checkIsSamePerson}>
          {!isLoading ? "Check!" : "Checking..."}
        </button>
      </div>

      <div>
        <p>{isSamePerson ? "The person is same" : "Yep, different person!"}</p>
      </div>
    </>
  );
};

export default App;
