import PokeCard from "../components/PokeCard";
import { getPokemonDetails } from "../lib/api";
import { useEffect, useState } from "react";
import { Pokemon } from "../lib/Interfaces";

export default function Homepage() {
  const [data, setData] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const setPokemonData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const promises = Array.from({ length: 20 }, (_, i) => 
        getPokemonDetails(i + 1).catch(err => {
          console.error(`Error fetching Pokemon ${i + 1}:`, err);
          return null;
        })
      );
      const pokemonArray = (await Promise.all(promises)).filter((pokemon): pokemon is Pokemon => pokemon !== null);
      setData(pokemonArray);
    } catch (err) {
      const error = err as Error;
      console.error("Error fetching Pokemon:", error);
      setError(error.message || "Failed to load Pokémon");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setPokemonData();
  }, []); 

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (isLoading) {
    return <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>Loading Pokémon...</p>
    </div>;
  }

  return (
    <div className="home-output">
      {data.map((pokemon: Pokemon) => (
        <PokeCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}
