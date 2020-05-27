import React, { useState, useContext } from "react";
import { GlobalState } from '../context/GlobalState';

type FormElem = React.FormEvent<HTMLFormElement>

const GolForm: React.FC = () => {
  const [inputs, setInputs] = useState();
  const context = useContext(GlobalState)
  
  const handleInputChange = (e: any) => {
    e.persist();
    setInputs((inputs: any) => ({
      ...inputs,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(context)
  const handleSubmit = (e: FormElem): void => {
      e.preventDefault();
    }
  return (
    <>
    <p>{context.rows}</p>
      <form >
        <label>Rows:</label>
        <input
          type="number"
          name="rows"
          placeholder="Min = 25, Max = 100"
          onChange={handleInputChange}
          value={inputs}
        />
        <label>Columns:</label>
        <input
          type="number"
          name="columns"
          placeholder="Min = 25, Max = 100"
          onChange={handleInputChange}
          value={inputs}
        />
        <label>Speed:</label>
        <input
          type="number"
          name="speed"
          placeholder="Seconds per Generation"
          onChange={handleInputChange}
          value={inputs}
        />
      </form>
    </>
  );
};

export default GolForm;
