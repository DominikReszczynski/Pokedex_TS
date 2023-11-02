// @ts-nocheck
import { Link } from "react-router-dom";

export const PokemonInfo = ({ pokemon }) => {
  return (
    <div className="site_conteiner">
      <p>{pokemon}</p>
      <br />
      <Link to={'/pokedex/'}>Powrot do pokedexa</Link>
    </div>
  );
};
