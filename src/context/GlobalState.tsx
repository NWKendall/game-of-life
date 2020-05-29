import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

interface IGame {
  rows: number,
  columns: number,
  speed: number
}
// initial state for gol grid
const gameSettings:IGame = {
  rows: 25,
  columns: 25,
  speed: 1,
};

// create context
export const GlobalState = createContext<IGame | any>(gameSettings);

// Provider component
export const GlobalStateProvider = (props: any) => {
  const [state, dispatch] = useReducer(AppReducer, gameSettings);
  console.log("GLOBALSTATE: ", state)
  return (
    <GlobalState.Provider value={{...state, dispatch}}>{props.children}</GlobalState.Provider>
  );
};
