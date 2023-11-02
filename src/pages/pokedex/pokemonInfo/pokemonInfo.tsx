// @ts-nocheck
import { Link } from "react-router-dom";
import "./pokemonInfo.scss";
import { useEffect, useState } from "react";
import axios from "axios";

export const PokemonInfo = ({ pokemonName }) => {
  const ONE_POKEMON_API_URL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
  const [getPokemons, setPokemons] = useState([]);
  const [getIsLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(ONE_POKEMON_API_URL)
      .then((response) => response.json())
      .then((data) => setPokemons(data))
      .catch((error) => console.error("Error:", error));
  }, []);
  console.log(getPokemons);
  return (
    <div className="site_conteiner">
      <div className="pokemon_info_conteiner">
        <img
          src={
            getPokemons.sprites?.versions['generation-vii']['ultra-sun-ultra-moon'].front_default
          }
          alt={`pokemon ${pokemonName}`}
        />
        <p>{pokemonName}</p>
        <br />
        <Link to={"/pokedex/"}>Powrot do pokedexa</Link>
      </div>
    </div>
  );
};
