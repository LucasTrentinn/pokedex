import React, { useContext, useEffect } from "react"
import { Context } from "../contexts/PokemonContext"
import Detalhe from '../components/Detalhe'
import Lista from '../components/Lista'

function ListaPage() {
  const {pokemon, consultar} = useContext(Context)

  useEffect(() => {
    consultar()
  }, [])

  
  return (
    <div className="container">
        <h1>Pokedex</h1>
        <div className="row">
          <div className="col sticky-top" style={{'alignSelf': 'flex-start'}}>
            {pokemon && (<Detalhe pokemon={pokemon}/>)}  
          </div>
          <div className="col">
            <Lista/>  
          </div>
        </div>
      </div>
  )
}

export default ListaPage