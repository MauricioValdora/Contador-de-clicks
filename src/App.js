
import './App.css';
import Boton from './componentes/boton';
import Contador from './componentes/contador';
import logo192 from './img/logo192.png'
import {useState} from 'react';


function App() {
  
  const [numClicks, setNumClicks] = useState(0)

  const manejarClicks = () => {
    setNumClicks( numClicks +1)

  }
  
  const reiniciarContador= ()=>{
    setNumClicks(0)
  }
  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img className='logo'
        src={logo192}
        alt='logo de app'/>
      </div>
      <div className='contenedor-principal'>
        <Contador numClicks={numClicks} />
        <Boton
        texto ='Click'
        esBotonDeClick={true}
        manejarClicks={manejarClicks} />
        <Boton
        texto='Reiniciar'
        esBotonDeClick={false}
        manejarClicks={reiniciarContador} />

      </div>
    </div>
  );
}

export default App;
