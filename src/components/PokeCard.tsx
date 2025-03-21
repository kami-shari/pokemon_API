import { Pokemon } from "../lib/Interfaces";
import { Link } from "react-router-dom";

export default function PokeCard(props: { pokemon: Pokemon }) {
  return (
    <div className="pokeCard">
      <div>
        <Link to={`/pokemon/${props.pokemon.id}`}>
          <div className="background">
            {" "}
            <img
              src={props.pokemon.sprites.other?.home.front_default}
              alt="pokemon-picture"
              className="pokemon-picture"
            />
          </div>
        </Link>
      </div>
      <div className="info">
        <p>#{props.pokemon.id.toString().padStart(4, "0")}</p>
        <p>{props.pokemon.name}</p>
      </div>
    </div>
  );
}
