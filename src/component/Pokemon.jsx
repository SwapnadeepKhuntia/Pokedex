import "./Pokemon.css";
import React, { useEffect, useState } from 'react'
import axios from "axios";
import Displaypokemon from './Displaypokemon';
import { ClipLoader } from "react-spinners";
import usepokemonlist from "../hooks/usepokemonlist";

// import fetch from 'react-fetch' ;
function Pokemon() {

  const {pokemonlist,setpokemonlist} = usepokemonlist("https://pokeapi.co/api/v2/pokemon");

  return (
    <>
    <div className="pokemon-list-wraper">
       { (pokemonlist.islodding)?
        <div>
       <div className='pokemon-wraper'>
       {pokemonlist.poke.map((el)=><Displaypokemon key={el.id} id={el.id} name={el.name} image={el.image} height={el.height} width={el.width}/>)}
       </div>
       <div className=" absolute left-1/3">
       <button type="button" disabled={pokemonlist.prev==null} onClick={(state)=>setpokemonlist(()=>({...state,pokemonapi:pokemonlist.prev}))} className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Previous</button>
      <button type="button" disabled={pokemonlist.next==null} onClick={()=> {
        setpokemonlist((state)=>({...state,pokemonapi:pokemonlist.next}))} }className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Next</button>
       </div>
       </div>
       :
       <ClipLoader
        color="green"
        className="loder"
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
       }
      
       </div>
    </>
  )
}

export default Pokemon