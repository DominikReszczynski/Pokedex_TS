// @ts-nocheck
import { Link } from "react-router-dom";
import "./pokemonInfo.scss";
import { useEffect, useState } from "react";
import axios from "axios";

export const PokemonInfo = ({ pokemonName, pokemonIndex, getPokeLength }) => {
  const [getPokemonIndex, setPokemonIndex] = useState(pokemonIndex);
  const ONE_POKEMON_API_URL = `https://pokeapi.co/api/v2/pokemon/${getPokemonIndex}`;
  const [getPokemons, setPokemons] = useState([]);
  const [getNextPokemons, setNextPokemons] = useState([]);
  const [getPrevPokemons, setPrevPokemons] = useState([]);
  const [getIsLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(ONE_POKEMON_API_URL)
      .then((response) => response.json())
      .then((data) => setPokemons(data))
      .catch((error) => console.error("Error:", error));
    if (getPokemonIndex !== 1010) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${getPokemonIndex + 1}`)
        .then((response) => response.json())
        .then((data) => setNextPokemons(data))
        .catch((error) => console.error("Error:", error));
    }
    else {
      fetch(`https://pokeapi.co/api/v2/pokemon/${getPokemonIndex - 1}`)
        .then((response) => response.json())
        .then((data) => setPrevPokemons(data))
        .catch((error) => console.error("Error:", error));
    }
    if (getPokemonIndex !== 1) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${getPokemonIndex - 1}`)
        .then((response) => response.json())
        .then((data) => setPrevPokemons(data))
        .catch((error) => console.error("Error:", error));
    }
    else {
      fetch(`https://pokeapi.co/api/v2/pokemon/${getPokemonIndex + 1}`)
        .then((response) => response.json())
        .then((data) => setPrevPokemons(data))
        .catch((error) => console.error("Error:", error));
    }

  }, [getPokemonIndex]);

  const prevPokemon = () => {
    if (getPokemonIndex >= 0) setPokemonIndex(getPokemonIndex - 1);
  };

  const nextPokemon = () => {
    if (getPokemonIndex <= getPokeLength.length)
      setPokemonIndex(getPokemonIndex + 1);
  };
  console.log(getPokemonIndex)
  return (
    <div className="site_conteiner">
      <div className="pokemon_info_conteiner">
        <div className={`pokemon_navigation${getPokemonIndex === 1 ? '_first' : getPokemonIndex === 1010 ? '_last' : ''} `}>
          <Link className={getPokemonIndex === 1 ? 'disable' : ''} key={getPrevPokemons?.name} to={`/pokedex/${getPrevPokemons?.name}`}>
            <button disabled={getPokemonIndex === 1} className="prev" onClick={() => prevPokemon()}>
              <h5>{getPrevPokemons?.name}</h5>
              <img src={getPrevPokemons?.sprites?.front_default} alt={getPrevPokemons?.name} />
            </button>
          </Link>
          <Link className={getPokemonIndex === 1010 ? 'disable' : ''} key={getNextPokemons?.name} to={`/pokedex/${getNextPokemons?.name}`}>
            <button className="next" onClick={() => nextPokemon()}>
              <img src={getNextPokemons?.sprites?.front_default} alt={getNextPokemons?.name} />
              <h5>{getNextPokemons?.name}</h5>
            </button>
          </Link>
        </div>

        <div>
          <img
            src={
              getPokemons?.sprites?.front_default
            }
            alt={`pokemon ${pokemonName}`}
          />
        </div>
        <p>{pokemonName}</p>

        <br />
        <Link to={"/pokedex/"}>Powrot do pokedexa</Link>
      </div>
    </div>
  );
};