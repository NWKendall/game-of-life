import React, { useState, useRef, useCallback, useContext } from "react";
import produce from "immer";
import { ButtonGroup, Button, Container, Typography } from '@material-ui/core';
import { GlobalState } from "../context/GlobalState";
import { useStyles } from './golgrid.styles';

const App: React.FC = () => {
  const context = useContext(GlobalState);
  let numRows = context.rows;
  let numCols = context.columns;
  let gameSpeed = (val: number) => val * 100
  const classes = useStyles({});
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
  
  const blankCanvas = () => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => 0));
    }
    return rows;
  };
  
  const randomCanvas = () => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => (Math.random() > 0.7 ? 1 : 0)));
    }
    return rows;
  };

  const [grid, setGrid] = useState(() => {
    return blankCanvas();
  });

  let [generation, setGen] = useState(0);
  const [running, setRunning] = useState(false);

  const runningRef = useRef(running);
  runningRef.current = running;

  const start = useCallback(() => {
    if (!runningRef.current) {
      return;
    }
    setGen(generation++);
    setGrid((g) => {
      return produce(g, (gridCopy) => {
        for (let i = 0; i < numRows; i++) {
          for (let j = 0; j < numCols; j++) {
            let neighbours = 0;
            operations.forEach(([x, y]) => {
              const newI = i + x;
              const newJ = j + y;
              if (newI >= 0 && newI < numRows && newJ >= 0 && newJ < numCols) {
                neighbours += g[newI][newJ];
              }
            });

            if (neighbours < 2 || neighbours > 3) {
              gridCopy[i][j] = 0;
            } else if (g[i][j] === 0 && neighbours === 3) {
              gridCopy[i][j] = 1;
            }
          }
        }
      });
    });
    setTimeout(start, gameSpeed(context.speed));
  }, [context, generation, operations]);

  return (
    <Container>
      <ButtonGroup className={classes.btngroupStyle} size="large">
        <Button
          onClick={() => {
            setRunning(!running);
            if (!running) {
              runningRef.current = true;
              start();
            }
          }}
        >
          {running ? "Stop" : "Start"}
        </Button>

        <Button
          onClick={() => {
            setGrid(blankCanvas());
            setGen(0);
          }}
        >
          Clear
        </Button>

        <Button
          onClick={() => {
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
        {grid.map((rows, i) =>
          rows.map((col, k) => (
            <canvas
            key={`${i}-${k}`}
            className={classes.canvasStyle}
            onClick={() => {
              const newGrid = produce(grid, (gridCopy) => {
                gridCopy[i][k] = grid[i][k] ? 0 : 1;
              });
              setGrid(newGrid);
            }}
            style={{
              width: 20,
              height: 20,
              backgroundColor: grid[i][k] ? "green" : undefined,
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
