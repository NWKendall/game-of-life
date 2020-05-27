import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

interface Igame {
  rows: number,
  columns: number,
  speed: number
}
// initial state for gol grid
const gameSettings:Igame = {
  rows: 25,
  columns: 25,
  speed: 1,
};

// create context
export const GlobalState = createContext<Igame>(gameSettings);

// Provider component
export const GlobalStateProvider = (props: any) => {
  const [state, dispatch] = useReducer(AppReducer, gameSettings);
  return (
    <GlobalState.Provider value={state}>{props.children}</GlobalState.Provider>
  );
};
