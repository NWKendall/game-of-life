import React from "react";
import { Typography, Link } from "@material-ui/core";

const GolHeader: React.FC = () => {
  return (
    <>
      <Typography variant="h1">Game of Life</Typography>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Link
          target="__blank"
          href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"
        >
          Conway's Game of Life
        </Link>
        <Link
          target="__blank"
          href="https://en.wikipedia.org/wiki/John_Horton_Conway"
        >
          John Horton Conway
        </Link>
        <Link
          target="__blank"
          href="https://en.wikipedia.org/wiki/Cellular_automaton"
        >
          Cellular Automaton
        </Link>
      </div>
    </>
  );
};

export default GolHeader;
