import PokeCard from "../components/PokeCard";
import { getPokemonDetails } from "../lib/api";
import { useEffect, useState } from "react";
import { Pokemon } from "../lib/Interfaces";

export default function Homepage() {
  const [data, setData] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const setPokemonData = async () => {
    try {
      setIsLoading(true);
      const pokemonArray: Pokemon[] = [];
      for (let i = 1; i <= 20; i++) {
        pokemonArray.push(await getPokemonDetails(i));
      }
      setData(pokemonArray);
    } catch (error) {
      console.error("Error fetching Pokemon:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setPokemonData();
  }, []); // Fixed dependency array

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="home-output">
      {data.map((pokemon: Pokemon) => (
        <PokeCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}
