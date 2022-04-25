import React from 'react';
import CartContainer from './Componet/CartContainer/CartContainer';
import NavBar from './Componet/NavBar/NavBar';
import {Routes,Route} from 'react-router-dom';
import Home from './Componet/Home/Home';
function App() {
  return (
    <>
     <NavBar/>

    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/cart' element={<CartContainer/>}/>
    </Routes>
    </>
      
  )
}

export default App;
