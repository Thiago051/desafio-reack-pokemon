import './App.css';
import PokemonsList from './conponents/PokemonsList';

function App() {
  return (
    <>
      <PokemonsList limit={20} offset={5}/>
    </>
  );
}

export default App;
