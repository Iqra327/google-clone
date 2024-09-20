import { useEffect, useState } from "react";
import PokemonCards from "./PokemonCards";

export const Pokemon = () => {

  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');

  const API = 'https://pokeapi.co/api/v2/pokemon?limit=300';

  const fetchPokemon =async () => {
    try {
      const response =await fetch(API);
      const data = await response.json();

      const pokemonData = data.results.map(async (currPokemon) => {
        const response = await fetch(currPokemon.url);
        const data = await response.json();

        return data;
      })
      
      const detailedPokemonData =await Promise.all(pokemonData);
      setPokemonData(detailedPokemonData);
      setLoading(false);

    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }
  
  useEffect(() => {
    fetchPokemon();
  }, []);

  
   const searchData =  pokemonData.filter((value) => value.name.toLowerCase().includes(search.toLowerCase()));

  if(loading){
    return (
      <div>
        <h1>
          Loading...
        </h1>
      </div>
    )
  }

  if(error){
    return (
      <div>
        <h1>
          Something went wrong...Try again later
        </h1>
      </div>
    )
  }

  return (
    <>
      <section className="container">
        <header>
          <h1>Lets Catch Pokemon</h1>
        </header>
        <div className="pokemon-search">
          <input type="text" placeholder="search Pokemon" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <PokemonCards searchData={searchData}/>
      </section>
    </>
  )
}