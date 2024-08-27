import React, { useState } from 'react'
import Pokemon from './Pokemon'
import Pokemondetails from './Pokemondetails';
import Searchbox from './Searchbox'
function Pokedex() {
    const[searchterm,setsearchterm] = useState('');
    
  return (
    <>
        <Searchbox setsearchbox={setsearchterm} />
        {(searchterm.length == 0)?<Pokemon/>: <Pokemondetails key={searchterm} pokemonname={searchterm}/>}
        
    </>
  )
}

export default Pokedex;