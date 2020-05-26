import React, { createContext } from "react";


const initialState = {
  rows: 25,
  columns: 25,
  speed: 1,
}
const GlobalState = createContext(initialState);

const GlobalStateProvider = (props: any) => {

  return (
    <GlobalState.Provider value={{ ...initialState }}>
      {props.children}
    </GlobalState.Provider>
  );
};

export default GlobalStateProvider;
