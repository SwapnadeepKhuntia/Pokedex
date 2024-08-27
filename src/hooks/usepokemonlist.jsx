import axios from 'axios';
import React, { useEffect, useState } from 'react'

function usepokemonlist(url) {
    const [pokemonlist,setpokemonlist] = useState({
        poke:[],
        islodding:false,
        pokemonapi:url,
        prev:'',
        next:''
      })
      //  const[poke,setpoke]=useState([]);
      //  const [islodding,setislodding]=useState(false);
      //  const [pokemonapi,setpokemonapi]=useState("https://pokeapi.co/api/v2/pokemon");
      //  const [prev,setprev]=useState();
      //  const [next,setnext]=useState();
    
       async function Downloadpokemon(){
          //  const feachdata = await fetch("https://pokeapi.co/api/v2/pokemon");
           const feachdata = await axios.get(pokemonlist.pokemonapi);
           setpokemonlist((state)=>({...state,prev:feachdata.data.previous}));
          //  setprev(feachdata.data.previous);
           setpokemonlist((state)=>({...state,next:feachdata.data.next}))
          //  setnext(feachdata.data.next);
           setpokemonlist((state)=>({...state,islodding:false}))
          //  setislodding(false);
           console.log(feachdata.data.results);
           const pokemondata = feachdata.data.results;
          //  console.log(feachdata.data);
         const pokeurl = pokemondata.map((el)=> axios.get(el.url));
         const allpokemon = await axios.all(pokeurl);
         console.log(allpokemon);
         const pokemon=allpokemon.map((el)=>{
           return{
                id:el.data.id,
                name:el.data.name,
                height:el.data.height,
                width:el.data.weight,
                image:el.data.sprites.other.dream_world.front_default
    
           }
         });
         
         setpokemonlist((state)=>({...state,poke:pokemon}))
        //  console.log(pokemonlist.poke);
        // setpoke(pokemon);
        // setislodding(true);
        setpokemonlist((state)=>({...state,islodding:true}))
        }
    
        
        // useEffect(()=>{
        //   Downloadpokemon();
        // },[pokemonapi])
        
        useEffect(()=>{
          Downloadpokemon();
        },[pokemonlist.pokemonapi])


        return {pokemonlist,setpokemonlist}
}

export default usepokemonlist;
