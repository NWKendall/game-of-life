import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer';

// initial state for gol grid
const initialState = {
  rows: 25,
  columns: 25,
  speed: 1,
}

// create context
export const GlobalState = createContext(initialState);

// Provider component
export const GlobalStateProvider = (props: any) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)
  return (
    <GlobalState.Provider value={{...state}}>
      {props.children}
    </GlobalState.Provider>
  );
};


