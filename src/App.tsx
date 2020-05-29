import React from "react";
import { Container } from '@material-ui/core';
import { GlobalStateProvider } from "./context/GlobalState";
import GolHeader from './components/golheader/golHeader'
import GolForm from './golform/GolForm';
import GolGrid from './golgrid/GolGrid';
import Automata from './components/automata/automata'

const App: React.FC = () => {
  
  return (
    <Container maxWidth="sm">
      <Automata />
      <GlobalStateProvider>
        <GolHeader />
        <GolForm />     
        <GolGrid />
      </GlobalStateProvider>
    </Container>
  );
};

export default App;
