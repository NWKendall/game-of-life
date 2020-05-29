import React, { useState, useContext } from "react";
import { GlobalState } from "../context/GlobalState";
import { TextField, Button, ButtonGroup } from "@material-ui/core";
import { useStyles } from './golform.styles';

const GolForm: React.FC = () => {
  const [inputs, setInputs] = useState({
    rows: "",
    columns: "",
    speed: "",
  });
  const context = useContext(GlobalState);
  const classes = useStyles({});

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
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className={classes.formDiv}>
        <TextField
          id="outlined-basic"
          label="Rows"
          type="number"
          name="rows"
          placeholder="Min = 25, Max = 100"
          onChange={(e: any) => handleInputChange(e)}
          value={inputs.rows}
        />
        <TextField
          id="outlined-basic"
          label="Columns"
          type="number"
          name="columns"
          placeholder="Min = 25, Max = 100"
          onChange={(e: any) => handleInputChange(e)}
          value={inputs.columns}
        />
        <TextField
          id="outlined-basic"
          label="Speed"
          type="number"
          name="speed"
          placeholder="Seconds per Generation"
          onChange={(e: any) => handleInputChange(e)}
          value={inputs.speed}
        />
        <Button variant="outlined" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
    </div>
      </form>
  );
};

export default GolForm;
