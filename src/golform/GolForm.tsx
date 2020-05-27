import React, { useState, useContext } from "react";
import { GlobalState } from '../context/GlobalState';

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
  const handleSubmit = (e: any) => {
    if (e) {
      e.preventDefault();
    }
  };
  console.log(`context`, context)
  return (
    <>
    {/* <p>{context.default.rows}</p> */}
      <form onSubmit={handleSubmit}>
        <label>Rows:</label>
        <input
          type="number"
          name="rows"
          placeholder="Min = 25, Max = 100"
          onChange={handleInputChange}
          // value={inputs.rows}
        />
        <label>Columns:</label>
        <input
          type="number"
          name="columns"
          placeholder="Min = 25, Max = 100"
          onChange={handleInputChange}
          // value={inputs.columns}
        />
        <label>Speed:</label>
        <input
          type="number"
          name="speed"
          placeholder="Seconds per Generation"
          onChange={handleInputChange}
          // value={inputs.speed}
        />
      </form>
    </>
  );
};

export default GolForm;
