
import React from 'react';
import { Link } from 'react-router-dom';
import "./Displaypokemon.css";
function Displaypokemon({id,name,image,height,width}) {
  return (
    <div className="pokemon">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <Link to={`/pokemon/${id}`}>
          <img src={image} className=" h-60 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700" alt="" />
          </Link>

  <div className="py-4">
    <div className="font-bold text-xl mb-2">Name :- {name}</div>
    <h3 className='text-gray-700 text-base'>height :- {height}</h3>
    <h3 className='text-gray-700 text-base'>width :- {width}</h3>
  </div>
</div>
  </div>
  )
}

export default Displaypokemon;