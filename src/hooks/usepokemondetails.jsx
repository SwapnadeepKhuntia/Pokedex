import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function usepokemondetails(id,pokemonname) {
  
  const [snpokemon,setsnpokemon] = useState({});
  const [alltypepoke,setalltypepoke] = useState([]);
  const [allsecondtypepokemon,setallsecondtypepokemon]=useState([]);
  async function downloadsinglepokemon(){

    try {

      let fetchdata;
    if(pokemonname){
      fetchdata=await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonname}/`);
    }else{
      fetchdata=await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    }
        

    const typeurl=await axios.get(`https://pokeapi.co/api/v2/type/${fetchdata.data.types?fetchdata.data.types[0].type.name : ""}`);
    console.log(typeurl);
    // const typeurl2=await axios.get(`https://pokeapi.co/api/v2/type/${fetchdata.data.types?fetchdata.data.types[1].type.name : ""}`);

    // console.log(typeurl2);
    const type1 = typeurl.data.pokemon.map((el)=>{
        return {
            allurl:el.pokemon.url,
            alltype:el.pokemon.name
        }
    }
    );
    // const type2 = typeurl2.data.pokemon.map((el)=>{
    //   return{
    //      allurl:el.pokemon.url,
    //      alltype:el.pokemon.name
    //   }
    // })
    setalltypepoke(type1);
     setsnpokemon({
       name:fetchdata.data.name,
       image:fetchdata.data.sprites.other.dream_world.front_default,
       types:fetchdata.data.types.map((t)=>t.type.name)
     })
     
    // const aa= snpokemon.types && snpokemon.types.map((t)=>t)
    //  console.log(aa);
     
      
    } catch (error) {
      console.log("sumthing wrong");
    }
    
  }

  
  useEffect(()=>{
    downloadsinglepokemon();
  },[]);

  return {snpokemon,alltypepoke,setalltypepoke}
}

export default usepokemondetails
