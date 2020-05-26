import React, { useState, useRef, useCallback } from "react";
import produce from "immer";
import GlobalStateProvider from './stores/GlobalState';
import GolForm from './form/golForm';

const numRows = 25;
const numCols = 25;
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

const App: React.FC = () => {
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
    setTimeout(start, 1000);
  }, []);

  return (
    <>
      <GlobalStateProvider>
        <p>Generation: {generation}</p>
        <GolForm />
        <button
          onClick={() => {
            setRunning(!running);
            if (!running) {
              runningRef.current = true;
              start();
            }
          }}
        >
          {running ? "Stop" : "Start"}
        </button>

        <button
          onClick={() => {
            setGrid(blankCanvas());
            setGen(0);
          }}
        >
          Clear
        </button>

        <button
          onClick={() => {
            setGen(0);
            setGrid(randomCanvas());
          }}
        >
          Random
        </button>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${numCols}, 20px)`,
          }}
        >
          {grid.map((rows, i) =>
            rows.map((col, k) => (
              <canvas
                key={`${i}-${k}`}
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
      </GlobalStateProvider>
    </>
  );
};

export default App;
