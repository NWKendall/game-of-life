import React from "react";
import { useStyles } from "./automata.style";

export default function Automata() {
  const classes = useStyles({});
  return (
    <div className={classes.divStyle}>
      <iframe
        className={classes.bgDisplay}
        src="https://giphy.com/embed/d7SnByEMkrdeoVQ2lT"
        // width="480"
        // height="346"
        frameBorder="0"
      ></iframe>
    </div>
  );
}
