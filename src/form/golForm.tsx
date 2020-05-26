import React, { useState } from "react";

const GolForm: React.FC = () => {
  const [inputs, setInputs] = useState({
      rows: 25,
      columns: 25,
      speed: 1
  });
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

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Rows:</label>
        <input
          type="number"
          name="rows"
          placeholder="Min = 25, Max = 100"
          onChange={handleInputChange}
          value={inputs.rows}
        />
        <label>Columns:</label>
        <input
          type="number"
          name="columns"
          placeholder="Min = 25, Max = 100"
          onChange={handleInputChange}
          value={inputs.columns}
        />
        <label>Speed:</label>
        <input
          type="number"
          name="speed"
          placeholder="Seconds per Generation"
          onChange={handleInputChange}
          value={inputs.speed}
        />
      </form>
    </>
  );
};

export default GolForm;
