import React from "react";
import PokemonContext from "./contexts/PokemonContext";
import ListaPage from './pages/ListaPage'
import Pokedex from "./pages/Pokedex";

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap";


function App() {
  return (
    <div className="App">
      <PokemonContext>
        {/* <ListaPage /> */}
        <Pokedex />
      </PokemonContext>
    </div>
  );
}

export default App