import { Link } from 'react-router-dom';
import './App.css';
import Pokemon from './component/Pokemon';
import Searchbox from './component/Searchbox';
import Customroutes from './routes/Customroutes';

function App() {

  return (
   <>
   <h1 className='text-2xl text-center'>
   <Link to={"/"}>
   Pokedex
   </Link>
   </h1>
   <Customroutes/>
   </>
  )
}

export default App
