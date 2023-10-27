// @ts-nocheck
import React, { useEffect, useState } from "react";
import "./pokedex.css";

import { OnePokemon } from "./onePokemon";
import { Link } from "react-router-dom";

export function Pokedex({ getPokemons }) {
  // const [getAllPokemons, setAllPokemons] = useState(getPokemons);
  // const [getIsLoading, setIsLoading] = useState(true);
  // const [setError] = useState(null);
  // const BASE_POKEMON_API_URL = "https://pokeapi.co/api/v2/pokemon?limit=1015";

  // useEffect(() => {
  //   fetch(BASE_POKEMON_API_URL)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const pokemonList = data.results;
  //       const pokemonPromises = pokemonList.map((pokemon) =>
  //         fetch(pokemon.url).then((response) => response.json())
  //       );
  //       Promise.all(pokemonPromises)
  //         .then((pokemonsData) => {
  //           console.log(pokemonsData);
  //           setPokemons(pokemonsData);
  //           setIsLoading(false);
  //         })
  //         .catch((error) => {
  //           setError(error?.message);
  //           setIsLoading(false);
  //         });
  //     })
  //     .catch((error) => {
  //       setError(error?.message);
  //       setIsLoading(false);
  //     });
  // }, []);

  return (
    <div>
      {/* <h1>{getIsLoading && <div className="loader" />}</h1> */}
      <div className="container--grid-wrapper">
        {getPokemons.map((pokemon) => (
          <Link
            key={pokemon.name}
            to={`/pokedex/${pokemon.name}`}
            key={pokemon.name}
          >
            <OnePokemon pokemon={pokemon} />
          </Link>
        ))}
      </div>
    </div>
  );
}
