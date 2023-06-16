
import './App.css';
/* importamos a los componentes para las rutas de la app */
import { Routes, Route } from 'react-router-dom';
import Navegacion from './Componentes/Navegacion';
import Home from './Componentes/Home';
import Formulario from './Componentes/Formulario';
import Clientes from './Componentes/Clientes';


function App() {
  return (
    <>
      <Navegacion />
      <Routes>
        <Route index element={ <Home/> }></Route>
        <Route exact path='/formulario' element={<Formulario/>}></Route>
        <Route exact path='/clientes' element={<Clientes/>}></Route>
      </Routes>
    </>
  );
}

export default App;
