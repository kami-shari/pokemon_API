import { useState } from "react";
import { getPokemonDetails } from "../lib/api";
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

  const chooseByType = async (type: string) => {
    setIsLoading(true);
    try {
      const pokemonUrl = `https://pokeapi.co/api/v2/type/${type}`;
      const response = await fetch(pokemonUrl);
      const json = await response.json();
      const pokemonArray = await Promise.all(
        json.pokemon.map((pokemonItem: any) => {
          return getPokemonDetails(pokemonItem.pokemon.name);
        })
      );
      setData(pokemonArray);
    } catch (error) {
      console.error("Error fetching Pokemon:", error);
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