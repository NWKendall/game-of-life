import React, { useState, useContext } from "react";
import { GlobalState } from "../context/GlobalState";

const GolForm: React.FC = () => {
  const [inputs, setInputs] = useState({
    rows: NaN,
    columns: NaN,
    speed: NaN,
  });
  const context = useContext(GlobalState);
  // Something possibly wrong here?
  const handleInputChange = (e: any) => {
    e.persist();
    console.log(`asdasd`)
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  console.log("Context: ", context);

  console.log("Inputs: ", inputs);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    context.dispatch({
      // THIS KINDA WORKS
      type: "NEW_SETTINGS",
      payload: {
        rows: inputs.rows,
        columns: inputs.columns,
        speed: inputs.speed,
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
