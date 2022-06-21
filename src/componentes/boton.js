import React from "react";
import '../hojas-de-estilo/boton.css'

function Boton({texto,esBotonDeClick,manejarClicks}){
  return(
    <button 
    className={ esBotonDeClick?'boton-click':'boton-reiniciar' }
    onClick={manejarClicks}>
      {texto}
    </button>
  )
}

export default Boton;