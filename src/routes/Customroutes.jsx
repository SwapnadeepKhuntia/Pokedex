import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Pokedex from '../component/pokedex';
import Pokemondetails from '../component/Pokemondetails';
function Customroutes() {

 return(
     <>
      <Routes>
          <Route path='/' element={<Pokedex/>}/>
          <Route path='/pokemon/:id' element={<Pokemondetails/>}/>
      </Routes>
     </>
 )

}

export default Customroutes;