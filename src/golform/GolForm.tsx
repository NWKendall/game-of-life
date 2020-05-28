import React, { useState, useContext } from "react";
import { GlobalState } from "../context/GlobalState";

const GolForm: React.FC = () => {
  const [inputs, setInputs] = useState({
    rows: "",
    columns: "",
    speed: "",
  });
  const context = useContext(GlobalState);

  const handleInputChange = (e: any) => {
    e.persist();
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e: any) => {
    e.preventDefault();
    context.dispatch({
      // Ensures state receives a number type to render grid correctly
      type: "NEW_SETTINGS",
      payload: {
        rows: Number(inputs.rows),
        columns: Number(inputs.columns),
        speed: Number(inputs.speed),
      },
    });
  };

  return (
    <>
      {/* <p>CONTEXT: {context.rows}</p> */}
      <form onSubmit={handleSubmit}>
        <label>Rows:</label>
        <input
          type="number"
          name="rows"
          placeholder="Min = 25, Max = 100"
          onChange={e => handleInputChange(e)}
          value={inputs.rows}
        />
        <label>Columns:</label>
        <input
          type="number"
          name="columns"
          placeholder="Min = 25, Max = 100"
          onChange={e => handleInputChange(e)}
          value={inputs.columns}
        />
        <label>Speed:</label>
        <input
          type="number"
          name="speed"
          placeholder="Seconds per Generation"
          onChange={e => handleInputChange(e)}
          value={inputs.speed}
        />
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </>
  );
};

export default GolForm;
