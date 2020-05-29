import React, { useState, useRef, useCallback, useContext } from "react";
import produce from "immer";
import { ButtonGroup, Button, Container, Typography } from '@material-ui/core';
import { GlobalState } from "../context/GlobalState";
import { useStyles } from './golgrid.styles';

const App: React.FC = () => {
  const context = useContext(GlobalState);
  const classes = useStyles({});
  
  // game settings
  let numRows = context.rows;
  let numCols = context.columns;
  let gameSpeed = (val: number) => val * 100
  const operations = [
    [0, 1],
    [0, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
    [-1, -1],
    [-1, 0],
    [1, 0],
  ];
  
  // generates empty grid
  const blankCanvas = () => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => 0));
    }
    return rows;
  };


  // generates randomly populated grid
  const randomCanvas = () => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => (Math.random() > 0.7 ? 1 : 0)));
    }
    return rows;
  };
  // game grid
  const [grid, setGrid] = useState(() => {
    return blankCanvas();
  });

  // for generation counter display
  let [generation, setGen] = useState(0);

  // for game loop
  const [running, setRunning] = useState(false);

  // so value running is accessible within callback
  const runningRef = useRef(running);
  runningRef.current = running;

  // game function
  // use callback repeats function execution with new values (doesn't create new instance of function)
  const start = useCallback(() => {
    // quit game
    if (!runningRef.current) {
      return;
    }
    // g = current value of grid
    setGrid((g) => {
      // can mutate gridCopy
      return produce(g, (gridCopy) => {
        for (let i = 0; i < numRows; i++) {
          for (let j = 0; j < numCols; j++) {
            let neighbours = 0;
            operations.forEach(([x, y]) => {
              const newI = i + x;
              const newJ = j + y;
              // controls for boundaries
              if (newI >= 0 && newI < numRows && newJ >= 0 && newJ < numCols) {
                // adds one to neighbours per operation
                neighbours += g[newI][newJ];
              }
            });
            // kill condition
            if (neighbours < 2 || neighbours > 3) {
              gridCopy[i][j] = 0;
              // survive condition
            } else if (g[i][j] === 0 && neighbours === 3) {
              gridCopy[i][j] = 1;
            }
          }
        }
      });
    });
    setTimeout(start, gameSpeed(context.speed));
    setGen(generation++);
  }, [context, generation, operations, numCols, numRows]);

  return (
    <Container>
      <ButtonGroup className={classes.btngroupStyle} size="large">
        <Button
          onClick={() => {
            setRunning(!running);
            if (!running) {             
              runningRef.current = true;
              start();
              setGen(generation++);

            }
          }}
        >
          {running ? "Stop" : "Start"}
        </Button>

        <Button
          onClick={() => {
            setRunning(false);
            setGen(0);
            setGrid(blankCanvas());
          }}
        >
          Clear
        </Button>

        <Button
          onClick={() => {
            setRunning(false);
            setGen(0);
            setGrid(randomCanvas());
          }}
        >
          Random
        </Button>
      </ButtonGroup>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${numCols}, 20px)`,
          justifyContent: "center",
        }}
      >
        {grid.map((rows: any, i: number) =>
          rows.map((col: any, k: number) => (
            <canvas
            key={`${i}-${k}`}
            className={classes.canvasStyle}
            onClick={() => {
              // passing current grid value, cloning it
              const newGrid = produce(grid, (gridCopy) => {
                // toggle state per cell
                gridCopy[i][k] = grid[i][k] ? 0 : 1;
              });
              setGrid(newGrid);
            }}
            style={{
              width: 20,
              height: 20,
              backgroundColor: grid[i][k] ? "pink" : undefined,
              border: "solid 1px black",
            }}
            />
          ))
        )}
      </div>
      <div className={classes.btngroupStyle}>
        <Typography variant="h3" className={classes.generationDisplay}>Generation: {generation}</Typography>
      </div>
    </Container>
  );
};

export default App;
