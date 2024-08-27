import axios from 'axios';
import "./Pokemondetails.css";
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import usepokemonlist from '../hooks/usepokemonlist';
import usepokemondetails from '../hooks/usepokemondetails';

function Pokemondetails({pokemonname}) {
  const {id} = useParams();
  const {snpokemon,alltypepoke} = usepokemondetails(id,pokemonname);

  return (
    <>
      <img src={snpokemon.image} alt="" />
      <h1 className='text-2xl'>{snpokemon.name}</h1>
      <p className='typesmain'>{snpokemon.types && snpokemon.types.map((el)=><> <div className='types' key={el}>{el}</div><h1>ALL {el} type Pokemon</h1> </>)}</p>
      
      {alltypepoke.map((el)=> <div key={el.allurl}> <ul><li>{el.alltype}</li></ul> </div> )}
     
      {/* {allsecondtypepokemon.map((el)=> <div key={el.allurl}> <h1>{el.alltype}</h1> </div> )} */}
    </>
  )
}

export default Pokemondetails