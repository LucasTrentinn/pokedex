import React, { useEffect, useState } from "react";
import {API} from '../settings'

function ListaItem({pokemon}) {
  const [item, setItem] = useState()
  
  useEffect(() => {

    (
      async () => {
        const req = await fetch(`${API}/pokemon/${pokemon.name}`)
        setItem(await req.json())
      }
    )()
    
  }, [pokemon]) 

  if(!item) return "Carregando..."

  return(
    <div className="ListaItem" style={{display: 'flex', 'alignItems': 'center'}}>
      <img src={item.sprites.front_default} alt='Imagem do pokemon'/>
      <h3 style={{textTransform: 'capitalize'}}> {pokemon.name} </h3>
    </div>
  )
}

export default ListaItem