import React from "react";
import styled from "styled-components";

function Pokedex() {
  
  const Titulo = styled.h1`
  font-size: 80px;
  display: flex;
  justify-content: center
  `

  const Pokedex = styled.div`
  background-color: #DC0A2D;
  height: 500px;
  width: 1390px;
  position: relative;
  ` 

  return (
    <div className="pokedex container-fluid">
      <Titulo>
        Pokedéx
      </Titulo>
      <Pokedex>
        
      </Pokedex>
    </div>
  )
}

export default Pokedex