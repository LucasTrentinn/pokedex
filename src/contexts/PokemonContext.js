import React, { createContext, useState } from 'react'
import { API } from '../settings'

export const Context = createContext()

function PokemonContext({children}) {
  const [pokemons, setPokemons] = useState([])
  const [pokemon, setPokemon] = useState()
  const [next, setNext] = useState()

  const proximos = async () => {
    const req = await fetch(next)
    const data = await req.json()
    setNext(data.next)
    setPokemons([...pokemons, ...data.results])
  }

  const selecionar = (pokemon) => {
    setPokemon(pokemon)
  }

  const consultar = async () => {
    const req = await fetch(`${API}/pokemon/`)
    const data = await req.json()
    setNext(data.next)
    setPokemons(data.results) 
  }

  return (
    <div>
      <Context.Provider value={{pokemon, pokemons, proximos, selecionar, consultar}}>
        {children}
      </Context.Provider>
    </div>
  )
}

export default PokemonContext