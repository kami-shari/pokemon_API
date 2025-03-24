import { useState } from "react";
import { Pokemon } from "../lib/Interfaces";
import PokeCard from "../components/PokeCard";

const TypePage = () => {
  const [data, setData] = useState<Pokemon[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const types = [
    "bug",
    "dragon",
    "electric",
    "fairy",
    "ghost",
    "grass",
    "ground",
    "normal",
    "poison",
    "rock",
    "steel"
  ];

  const fetchWithRetry = async (url: string, retries = 3) => {
    for (let i = 0; i < retries; i++) {
      try {
        const response = await fetch(url, {
          headers: {
            'Accept': 'application/json',
            'User-Agent': 'Pokemon-App'
          }
        });
        if (response.ok) return response.json();
        if (response.status === 403) {
          await new Promise(resolve => setTimeout(resolve, 1000));
          continue;
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      } catch (error) {
        if (i === retries - 1) throw error;
      }
    }
  };

  const chooseByType = async (type: string) => {
    setIsLoading(true);
    setData(null);
    try {
      const pokemonUrl = `https://pokeapi.co/api/v2/type/${type}`;
      const json = await fetchWithRetry(pokemonUrl);
      
      const basicPokemon = json.pokemon
        .slice(0, 10)
        .filter((p: any) => {
          const name = p.pokemon.name;
          return !name.includes('-') && !name.includes('gmax');
        });
      
      const pokemonArray = await Promise.all(
        basicPokemon.map(async (pokemonItem: any) => {
          try {
            const pokemon = await fetchWithRetry(`https://pokeapi.co/api/v2/pokemon/${pokemonItem.pokemon.name}`);
            return pokemon;
          } catch (err) {
            return null;
          }
        })
      );

      const validPokemon = pokemonArray.filter((pokemon): pokemon is Pokemon => 
        pokemon !== null && pokemon.id !== undefined
      ).slice(0, 6);
      
      setData(validPokemon);
    } catch (error) {
      console.error("Error fetching Pokemon:", error);
      setData([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2 className="chooseTypeH2">Choose your Pokémon Type!</h2>
      <div className="type-buttons">
        {types.map((type) => (
          <button
            className={`poke-button ${type}`}
            key={type}
            onClick={() => chooseByType(type)}
          >
            {type.toUpperCase()}
          </button>
        ))}
      </div>
      {isLoading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading Pokémon...</p>
        </div>
      ) : (
        <div className="home-output">
          {data?.map((pokemon) => (
            <PokeCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TypePage;