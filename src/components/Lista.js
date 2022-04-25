import React, { useContext } from "react"
import { Context } from "../contexts/PokemonContext"
import ListaItem from "./ListaItem"

function Lista() {
  const {pokemons, proximos, selecionar} = useContext(Context)

  return(
    <div className="Lista">
      <h2>Pokemons</h2>
      <div className="list-group">
        {pokemons.map(p => 
          <button key={p.name} className={'list-group-item list-group-item-action'} onClick={() => selecionar(p)}>
            <ListaItem pokemon={p}/>
          </button>)
        }
        <button className="list-group-item list-group-item-action" onClick={() => proximos()}> Mais </button>
      </div>
    </div>
  )
}

export default Lista