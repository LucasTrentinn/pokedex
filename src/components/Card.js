import React from "react"

function Card({pokemon}) {
  return (
    <div className="Card">
      <h2 style={{textTransform: 'capitalize'}}>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt="Foto do Pokemon"/>
      <h6>ID: {pokemon.id}</h6>
    </div>
  )
}

export default Card