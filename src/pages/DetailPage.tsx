import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPokemonDetails } from "../lib/api";
import PlaySound from "../components/PlaySound";
import { Pokemon } from "../lib/Interfaces";

export default function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const gotoTypePage = () => {
    navigate('/type');
  };

  const pokemonQuery = useQuery({
    queryKey: ["pokemon", id],
    queryFn: async () => {
      if (!id) throw new Error("No ID provided");
      const data = await getPokemonDetails(id);
      return data as Pokemon;
    },
  });

  if (pokemonQuery.isError) {
    return <div className="error-message">Failed to load Pokémon</div>;
  }

  if (pokemonQuery.isPending || !pokemonQuery.data) {
    return <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>Loading Pokémon...</p>
    </div>;
  }

  const pokemonData = pokemonQuery.data;

  return (
    <div className="rainbow-border">
      <div className="background">
        <img
          src={pokemonData.sprites?.other?.["home"]?.front_default || ''}
          alt={pokemonData.name || ''}
          className="pokemon-picture scale-up-bl"
        />
      </div>
      <h1 className="poke-name">
        #{pokemonData.id.toString().padStart(4, "0")} {pokemonData.name}
      </h1>
      <div className="type-buttons">
        {pokemonData.types && pokemonData.types.map((type) => (
          <button
            key={type.type.name}
            className={`poke-button ${type.type.name}`}
            onClick={gotoTypePage}
          >
            {type.type.name.toUpperCase()}
          </button>
        ))}
      </div>
      <h3>ATTACKS AND MOVEMENTS</h3>
      <div className="moves">
        {pokemonData?.moves?.map((move) => (
          <button key={move.move.name} className="move-button">
            {move.move.name}
          </button>
        ))}
      </div>

      {pokemonData?.cries?.latest && (
        <PlaySound audioURL={pokemonData.cries.latest} />
      )}
    </div>
  );
}
