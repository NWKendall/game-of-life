import React from "react";
import { Container } from '@material-ui/core';
import { GlobalStateProvider } from "./context/GlobalState";
import GolForm from './golform/GolForm';
import GolGrid from './golgrid/GolGrid';

const App: React.FC = () => {
  
  return (
    <Container maxWidth="sm">
      <GlobalStateProvider>
        <GolForm />     
        <GolGrid />
      </GlobalStateProvider>
    </Container>
  );
};

export default App;
