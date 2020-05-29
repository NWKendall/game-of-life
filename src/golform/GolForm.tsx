import React, { useState, useContext } from "react";
import { GlobalState } from "../context/GlobalState";
import { TextField, Button } from "@material-ui/core";
import { useStyles } from './golform.styles';

const GolForm: React.FC = () => {
  const context = useContext(GlobalState);
  const classes = useStyles({});
  const [inputs, setInputs] = useState({
    rows: "",
    columns: "",
    speed: "",
  });

  const handleInputChange = (e: any) => {
    e.persist();
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (Number(inputs.rows) <= 101 && Number(inputs.columns) <= 101) {
      context.dispatch({
        // Ensures state receives a number type to render grid correctly
        type: "NEW_SETTINGS",
        payload: {
          rows: Number(inputs.rows),
          columns: Number(inputs.columns),
          speed: Number(inputs.speed),
        }
      });
    } else {
      alert("Rows and Columns are too big! \nValues must be below 100.")
      setInputs({
        rows: "",
        columns: "",
        speed: ""
      })
    }
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className={classes.formDiv}>
        <TextField
          id="outlined-basic"
          label="Rows"
          type="number"
          name="rows"
          placeholder= " < 100 "
          onChange={(e: any) => handleInputChange(e)}
          value={inputs.rows}
          error={Number(inputs.rows) <= 100 ? false : true}
        />
        <TextField
          id="outlined-basic"
          label="Columns"
          type="number"
          name="columns"
          placeholder=" < 100 "
          onChange={(e: any) => handleInputChange(e)}
          value={inputs.columns}
          error={Number(inputs.rows) <= 100 ? false : true}
        />
        <TextField
          id="outlined-basic"
          label="Speed"
          type="number"
          name="speed"
          placeholder=" x 100ms "
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
