import React from "react";

import { GlobalStateProvider } from "./context/GlobalState"
import GolGrid from "./golgrid/GolGrid";
import GolForm from "./golform/GolForm";

const App: React.FC = () => {
  
  return (
    <GlobalStateProvider>
      <GolForm />     
      <GolGrid />
    </GlobalStateProvider>
  );
};

export default App;
